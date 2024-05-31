import React from 'react';

const LineItem = ({ item, handleDelete, handleCheck }) => {
  return (
    <li className="item">
      <input id ={item.id} type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked} />
      <label style={item.checked ? { textDecoration: 'line-through' } : null} htmlFor={item.id}>
        {item.item}
      </label>
      <button type="button" onClick={()=>handleDelete(item.id)}>Delete Item</button>
    </li>
  );
};

export default LineItem;
