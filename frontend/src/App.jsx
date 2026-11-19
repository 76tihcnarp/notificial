import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/*" element={<h1> 404 not found in the system !!!</h1>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
