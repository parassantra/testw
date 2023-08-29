const Categories = ({categories, filterCategory}) => {
  return (
    <div className="btn-container">
        {
            categories.map(category => (
                <button type="button" className="btn" onClick={()=> filterCategory(category)} key={category}>{category}</button>
            ))
        }
    </div>
  )
}

export default Categories