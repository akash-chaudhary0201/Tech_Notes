import React from 'react';
import './App.css'
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Discussion from './Routes/Discussion';
import Settings from './Routes/Settings';
import Department from './Routes/Department';

function App() {


  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/department" element={<Department />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
