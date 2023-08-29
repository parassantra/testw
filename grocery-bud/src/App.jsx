import { useState } from "react";
import Form from "./Form";
import ItemsList from "./ItemsList";
import { nanoid } from "nanoid";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from "react-toastify";

const setLocalStorage = (itemsList) => {
  localStorage.setItem('list', JSON.stringify(itemsList))
}

const defaultList = JSON.parse(localStorage.getItem('list') || '[]')

const App = () => {
  const[items, setItems] = useState(defaultList)
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: nanoid(),
      completed: false
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    toast.success(`Item added ${newItem.name}`)
    setLocalStorage(newItems)
  }

  const removeItem = (itemToRemove) => {
    const filteredItems = items.filter(item => item.id !== itemToRemove.id)
    setItems(filteredItems)
    setLocalStorage(filteredItems)
    toast.info(`Item removed ${itemToRemove.name}`)
  }

  const editItem = (itemId) => {
    const editedItems = items.map(item => {
      if(item.id === itemId)
      {
        const newItem = {...item, completed: !item.completed}
        return newItem
      }
      return item
    })
    setItems(editedItems)
    setLocalStorage(editedItems)
  }

  return <section className="section-center">
    <Form addItem={addItem}/>
    <ItemsList 
    items={items}
    removeItem={removeItem}
    editItem={editItem}
    />
    <ToastContainer position="top-center"/>
  </section>;
};

export default App;
