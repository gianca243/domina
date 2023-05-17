import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './views/Login';
import Signin from './views/Signin';
import Task from './views/Task';
import NavbarComponent from './layouts/NavbarComponent'
import './App.css';

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signin" element={ <Signin/> } />
        <Route exact path="/task" element={ <Task/> } />
      </Routes>
    </div>
  );
}

export default App;
