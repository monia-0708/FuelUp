import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';

import AddPrice from "./components/AddPrice";
import Prices from "./components/Prices";

import Signin from "./views/Signin";
import Signup from "./views/Signup";



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Prices />} />
        <Route path="/addPrice" element={<AddPrice />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
export default App;
