import { useState } from "react";
import Title from "./Title";
import Categories from "./Categories";
import Menu from "./Menu";
import data from "./data"


const categoriesList = ["all", ...new Set(data.map(item => item.category))]

const App = () => {
  const[menu, setMenu] = useState(data)
  const [categories, setCategories] = useState(categoriesList)
  const filterCategory = (category) => {
    if(category === 'all'){
      setMenu(data)
      return;
    }
    const newMenu = data.filter(item => item.category === category)
    setMenu(newMenu)
  }
  return <main>
    <section className="menu">
      <Title title='our menu'/>
      <Categories categories={categories} filterCategory={filterCategory}/>
      <Menu menu={menu}/>
    </section>
  </main>;
};
export default App;
