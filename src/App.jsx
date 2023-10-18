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
// import Login from './Routes/Login';
import PYQs from './Routes/PYQs'
import VAM from './Routes/VAM'
// import Signup from './Routes/Signup';
import Team from './Routes/Team';
import FCET from './Routes/Subjects/Semester 1/FCET';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {


  return (
    <>

      <Auth0Provider
        domain="akash-dev-auth.us.auth0.com"
        clientId="glGASQRFfBrnjMjH6wPkbM2UgV2Shhe3"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
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
            {/* <Route path='/login' element={<Login />} /> */}
            <Route path='/pyq' element={<PYQs />} />
            <Route path='/vam' element={<VAM />} />
            {/* <Route path='/signup' element={<Signup />} /> */}
            <Route path='/team' element={<Team />} />
            <Route path='fcet' element={<FCET />} />
          </Routes>
        </BrowserRouter>
      </Auth0Provider>,


    </>
  )
}

export default App
