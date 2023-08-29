import { useState } from "react";

const Item = ({item, removeItem, editItem}) => {
  const handleChecked = (id) => {
    editItem(id)
  }
  return (
    <div className='single-item'>
        <input type="checkbox" name="completed" id="" checked={item.completed} onChange={() => handleChecked(item.id)}/>
        <p
        style={{
            textDecoration: item.completed && 'line-through'
        }}
        >{item.name}</p>
        <button 
        type="button" 
        className='btn remove-btn'
        onClick={() =>  removeItem(item)}
        >remove</button>
    </div>
  )
}

export default Item