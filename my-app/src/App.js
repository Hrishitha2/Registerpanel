import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./client/reg";  // Make sure this path is correct
import Login from "./client/login"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />  {/* Default route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
