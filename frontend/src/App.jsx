import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Components/Navbar';
import Home from '../src/pages/Home';
import SignUp from './pages/Register';
import SignIn from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Calculator from './common/calculator/calculator';
import LoanDetails from './pages/LoanDetails'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/LoanDetails" element={<LoanDetails />} />
        <Route path="/Calculator" element={<Calculator />} />

      </Routes>
      <ToastContainer theme="dark" />
     
    </Router>
  );
}

export default App;
