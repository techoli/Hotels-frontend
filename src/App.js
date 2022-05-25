import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

import Homescreen from './screens/Homescreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes> <Route path="/homes"  element = {<Homescreen/>}/></Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
