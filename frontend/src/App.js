import React from 'react';
import Taskbar from './Taskbar';
import JobDetailsCard from './JobDetailsCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Taskbar />
      <div className="job-details-container">
        <JobDetailsCard />
        <JobDetailsCard />
        <JobDetailsCard />
        {/* Add more JobDetailsCard components as needed */}
      </div>
    </div>
  );
}

export default App;
