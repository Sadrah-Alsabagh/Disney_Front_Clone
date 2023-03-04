import React from 'react';
// eslint-disable-next-line
import {BrowserRouter as Router, Routes, Route, useRoutes} from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
          <Header />
   <Routes>
  <Route path="/" element={<Login />} />
</Routes>
    </div>
  );
}

export default App;
