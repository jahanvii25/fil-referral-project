import React from 'react';
import {  Router,Route, Routes, BrowserRouter } from 'react-router-dom';


import LandingPage from './pages/landingpage';
import ReferralPage from './pages/referral_page';

function App() {
  return (
    
      
      <BrowserRouter>
      <Routes>
        <Route path="/login"  element={<LandingPage/>} />
        <Route path="/create" element={<ReferralPage />} />
      </Routes>
      </BrowserRouter>
  
  
  );
}

export default App;