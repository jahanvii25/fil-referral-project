import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './pages/landingpage';
import ReferralDetails from './pages/referralPage/ReferralDetails';
import ApplicationTracking from './pages/referralPage/ApplicationTracking';
import ReferralForm from './pages/referralPage/ReferralForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LandingPage />} index={true} />
        
        <Route path='/track' element={<ApplicationTracking />} />
        <Route path='/form' element={<ReferralForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;