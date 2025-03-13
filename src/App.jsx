import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
// import Contact from './Contact';
import Footer from './Footer';
import './App.css';
import Contact from './Contact';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;