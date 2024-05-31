import { useRef } from 'react';

const AddItem = ({ addItem, setAddItem, handleSubmit }) => {
  const inputRef = useRef(null);
  return (
    <form className='addForm' method="post" onSubmit={handleSubmit}>
      <input
        required
        autoFocus
        ref={inputRef}
        type="text"
        placeholder="Add Item"
        id="addItem"
        value={addItem}
        onChange={(e) => setAddItem(e.target.value)}
      />
      <button type="submit" onClick={() => inputRef.current.focus()}>
        Add Item
      </button>
    </form>
  );
};

export default AddItem;
