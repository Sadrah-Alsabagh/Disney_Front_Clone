import React from 'react';
import {BrowserRouter as Router, Routes, Route, useRoutes} from "react-router-dom";
import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <div className="App">
   <Routes>
  <Route path="/" element={<Login />} />
</Routes>
    </div>
  );
}

export default App;
