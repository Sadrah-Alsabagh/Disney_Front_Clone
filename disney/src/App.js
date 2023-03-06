import React from 'react';
// eslint-disable-next-line
import {BrowserRouter as Router, Routes, Route, useRoutes} from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
          <Header />
   <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/home" element={<Home />} />
</Routes>
    </div>
  );
}

export default App;
