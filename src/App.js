import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

// Pages
import Home from './Pages/Home/Home';
import ContactUs from './Pages/ContactUs/ContactUs';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/acet" element={<Home/>}/>
        <Route path="/acet/contact-us" element={<ContactUs/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
