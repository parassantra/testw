import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  const [colorList, setColorList] = useState([])
  const addColor = (color) => {
    try{
      const newList = new Values(color).all(10)
      setColorList(newList)
    }
    catch(err){
      toast.error(err.message)
    }
  }
  return <main>
    <Form addColor={addColor}/>
    <ColorList colorList={colorList}/>
    <ToastContainer position="top-center"/>
  </main>;
};
export default App;
