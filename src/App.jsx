import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';

import AddPrice from "./components/AddPrice";
import Map from "./components/Map";

import Signin from "./views/Signin";
import Signup from "./views/Signup";

import React from 'react';




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/addPrice" element={<AddPrice />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
export default App;
