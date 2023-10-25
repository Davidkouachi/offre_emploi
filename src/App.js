import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Job from './pages/Job';
import Job_detail from './pages/Job_detail';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './composents/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/job" element={<Job />} />
        <Route path="/job_detail" element={<Job_detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;