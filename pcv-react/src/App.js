import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Experiences from './pages/experiences';
import Partners from './pages/partners';
import Testimonials from './pages/testimonials';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/experiences' element={<Experiences />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/testimonials' element={<Testimonials />} />
      </Routes>
    </Router>
  );
}

export default App;
