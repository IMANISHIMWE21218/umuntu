
import './App.css'
import Navbar from './components/Navbar.'
import Home from './components/Home'
import Vision from './components/Vision'
import About from './components/About'


import { BrowserRouter } from "react-router-dom";




const App = () => {
  return (
    <BrowserRouter>
     <div>
     <Navbar/>
      <Home/>
      <Vision/>
      <About/>
      
     </div>
    </BrowserRouter>
  );
};
export default App
