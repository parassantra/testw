import Item from "./Item"

const ItemsList = ({items, removeItem, editItem}) => {
  return (
    <div className="items">{
        items.map(item => (<Item key={item.id} removeItem={removeItem} item={item} editItem={editItem}/>))
    }</div>
  )
}

export default ItemsList