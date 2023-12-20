import React from 'react';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';
import {Route, Routes } from 'react-router-dom';
import List from './pages/list';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
          <Route path='/' element={<List/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
