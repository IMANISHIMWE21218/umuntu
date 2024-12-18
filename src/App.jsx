import { useState } from 'react';
import '../src/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Vision from './components/Vision';
import About from './components/About';
import Partners from './components/Partners';
import SubBlog from './components/SubBlog';
import NewsLetter from './components/NewsLetter';
import FooterComponent from './components/FooterComponent ';
import Model from './components/Model';
import PropTypes from 'prop-types';

import { BrowserRouter } from "react-router-dom";

const App = ({setIsMenuOpen}) => {
  const [showModel, setShowModel] = useState(false);

  // Function to open the modal
  const handleOpenModel = () => {
    console.log("Modal opened");
    setShowModel(true);
    setIsMenuOpen(false);
  };

  // Function to close the modal
  const handleCloseModel = () => {
    setShowModel(false);
  };


  return (
    <BrowserRouter>
      <div>
        <Navbar handleOpenModel={handleOpenModel} />
        <Home handleOpenModel={handleOpenModel} />
        <Vision />
        <About />
        {/* Render the modal conditionally */}
        {showModel && <Model onClose={handleCloseModel} />}
        <Partners />
        <SubBlog />
        <NewsLetter />
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
};

App.propTypes = {
  setIsMenuOpen: PropTypes.func.isRequired, // Ensure setIsMenuOpen is a function and required
};

export default App;
