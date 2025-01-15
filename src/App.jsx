import { useState } from 'react';
import '../src/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Vision from './components/Vision';
import About from './components/About';
import Partners from './components/Partners';
import SubBlog from './components/SubBlog';
import NewsLetter from './components/NewsLetter';
import Model from './components/Model';
import Contact from './components/independentPages/Contact';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from './components/FooterComponent ';

// Create a separate component for the main content
const MainContent = ({ showModel, handleOpenModel, handleCloseModel }) => {
  return (
    <>
      <Home handleOpenModel={handleOpenModel} />
      <Vision />
      <About />
      {showModel && <Model onClose={handleCloseModel} />}
      <Partners />
      <SubBlog />
      <NewsLetter />
      <FooterComponent />
    </>
  );
};

MainContent.propTypes = {
  showModel: PropTypes.bool.isRequired,
  handleOpenModel: PropTypes.func.isRequired,
  handleCloseModel: PropTypes.func.isRequired
};

const App = ({setIsMenuOpen}) => {
  const [showModel, setShowModel] = useState(false);

  const handleOpenModel = () => {
    console.log("Modal opened");
    setShowModel(true);
    setIsMenuOpen(false);
  };

  const handleCloseModel = () => {
    setShowModel(false);
  };

  return (
    <BrowserRouter>
      <div className="relative">
        <Navbar handleOpenModel={handleOpenModel} />
        <Routes>
          <Route 
            path="/" 
            element={
              <MainContent 
                showModel={showModel}
                handleOpenModel={handleOpenModel}
                handleCloseModel={handleCloseModel}
              />
            } 
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
                {showModel && <Model onClose={handleCloseModel} />}
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

App.propTypes = {
  setIsMenuOpen: PropTypes.func.isRequired,
};

export default App;