import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MenuBar from './components/Header/MenuBar';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import Home from './pages/Home'
import EVerifyReturn from './components/EverifyReturn/EVerifyReturn';
import EpayTaxForm from './components/EpayTaxForm/EpayTaxForm';

import Registration from './components/Vat/Registration';
import OTPVerification from './components/Vat/OTPVerification';
import BasicDetails from './components/Register/BasicDetails';
import OTPPage from './components/Register/OTPPage';
import Register from './components/Register/registerUi/Register';
function App() {
  const location = useLocation(); // Get the current route

  return (
    <div className="App">
      <Header />
      <MenuBar />
      
      {location.pathname === '/' && <Sidebar />}
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/eVerifyReturn-bl" element={<EVerifyReturn />} />
        <Route path="/epayTaxForm" element={<EpayTaxForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vat" element={<Registration />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/basic" element={<BasicDetails />} />
        <Route path="/otppapge" element={<OTPPage />} />
        
        {/* Add other routes here */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;