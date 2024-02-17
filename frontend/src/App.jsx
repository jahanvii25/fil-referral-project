import React from 'react';
import Taskbar from './Taskbar';
import JobDetailsCard from './JobDetailsCard';
import './App.css';
import ReferralForm from "./components/referral_form";

import LandingPage from './pages/landingpage';

function App() {
  return (
    // <div className="App">
    //   <Taskbar />
    //   <div className="job-details-container">
    //     <JobDetailsCard />
    //     <JobDetailsCard />
    //     <JobDetailsCard />
    //     {/* Add more JobDetailsCard components as needed */}
    //   </div>
    // </div>
    <LandingPage />
  );
}

export default App;
