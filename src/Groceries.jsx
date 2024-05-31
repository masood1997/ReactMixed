import { useEffect, useState } from 'react';
import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import useApi from './hooks/useApi';

const Groceries = () => {
  const [items, setItems] = useState([]);
  const [addItem, setAddItem] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDB = async () => {
      try {
        const response = await fetch('http://localhost:8000/items');
        if (!response.ok) throw Error('Connection to to DB Failed. Reload again');
        const data = await response.json();
        setItems(data);
        setErrorMessage(null);
      } catch (err) {
        setErrorMessage(err.message);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => loadDB(), 2000);
  }, []);

  const addListItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    //console.log(typeof(id));
    const newItem = {
      id,
      checked: false,
      item
    };
    // const listItems = [...items, newItem];
    //console.log("before", items)
    setItems((prev) => [...prev, newItem]);
    //console.log("after",items)
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    };
    const result = await useApi('http://localhost:8000/items', postOptions);
    if (result) setErrorMessage(result);
  };

  const handleCheck = async (id) => {
    const listItems = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
    setItems(listItems);
    //Not using listItems[id] because id could be 45 46 47 etc even though the items array could be 3 in length. Hence filtering
    //the item using map on listItems and not on items because the item array brought in function would not reflect the change in checkbox
    const filteredItem = listItems.filter((item)=>item.id===id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked:filteredItem[0].checked})
    };
    const result = await useApi(`http://localhost:8000/items/${id}`, updateOptions);
    if (result) setErrorMessage(result);
  };
  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    const deleteOptions = {
      method: 'DELETE'
    };
    const result = await useApi(`http://localhost:8000/items/${id}`, deleteOptions);
    if (result) setErrorMessage(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addItem) return;
    addListItem(addItem);
    setAddItem('');
  };
  return (
    <div>
      <Header title="Grocery List" />
      <AddItem addItem={addItem} setAddItem={setAddItem} handleSubmit={handleSubmit} />
      <SearchItem search={search} setSearch={setSearch} />
      {loading && <p>Loading Items</p>}
      {errorMessage && <p style={{ color: 'red' }}>{`Error: ${errorMessage}`}</p>}
      {!errorMessage && !loading && (
        <Content
          items={items.filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Groceries;
