import Sidebar from "./Sidebar"
import Home from "./Home"
import Modal from "./Modal"
import { AppProvider } from "./context";

const App = () => {
  return <>
    <Home/>
    <Sidebar/>
    <Modal/>
  </>;
};
export default App;
