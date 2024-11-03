
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Vision from './components/Vision'
import About from './components/About'
import Partners from './components/Partners'
import SubBlog from './components/SubBlog'
import NewsLetter from './components/NewsLetter'
import FooterComponent from './components/FooterComponent '


import { BrowserRouter } from "react-router-dom";





const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Home />
      <Vision />
      <About />
      <Partners />
      <SubBlog />
      <NewsLetter />
      <FooterComponent />
    </div>
  </BrowserRouter>
);
export default App
