import React from 'react';
import './App.css'
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Discussion from './Routes/Discussion';
import Settings from './Routes/Settings';
import Department from './Routes/Department';
import Notes from './Routes/Notes';
import Semester1 from './Routes/Semester1';
import Semester from './Routes/Semester';
import Semester3 from './Routes/Semester3';
import Semester4 from './Routes/Semester4';
import Login from './Routes/Login';

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
          <Route path='/notes/' element={<Notes />}>
            <Route path='semester1' element={<Semester1 />} />
            <Route path='semester2' element={<Semester />} />
            <Route path='semester3' element={<Semester3 />} />
            <Route path='semester4' element={<Semester4 />} />
          </Route>
          <Route path='/user' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
