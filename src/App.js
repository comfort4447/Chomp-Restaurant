import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Order from "./components/Order";
import Company from './components/Company';
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="App">
       <Router>
      <div className="app">
        <Routes>
        <Route exact path="/" element={<Navbar/>}/>
          <Route exact path="/order" element={<Order/>}/>
          <Route exact path="/company" element={<Company/>}/>
          <Route exact path="/faq" element={<FAQ/>}/>
        </Routes> 
      </div>

    </Router>
    </div>
  );
}

export default App;
