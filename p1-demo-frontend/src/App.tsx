import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login/Login';

//If we want a component to render as soon as the app starts...
//...then you should leave the path as ""
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="" element={<Login/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
