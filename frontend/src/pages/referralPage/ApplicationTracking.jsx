import React, { useState, useEffect } from 'react';
import './ApplicationTracking.css';
import axios from 'axios';
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineNotifications } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";


const ApplicationForm = () => {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/form')
          .then(response => {
            setRecords(response.data.data); // Assuming the response data is in the format { data: [/* records */] }
            setLoading(false);
          })
          .catch(error => {
            setError(error.message);
            setLoading(false);
          });
      }, []);

    return (
        <div>
            <nav className="navbar">
            <div className="logo-container">
                <div className="logo"><FaUserCircle /></div>
                <div className="logo-text">Employee Name</div>
                
            </div>
                <div className="navbar-brand">FIL Referral </div>
                <div className="navbar-icons">
                <MdOutlineNotifications />
                <IoIosLogOut />
                </div>
            </nav>
            <div className='container'>
                <h1>Application Status</h1>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Job ID</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map((item, index) => (
                                <tr key={index} className='hover-slate-100'>
                                    <td>{item.name}</td>
                                    <td>{item.id}</td>
                                    <td>{item.city}</td>
                                    <td>{item.action ? 'Approved' : 'Approved'}</td>
                                    <td>{item.status ? 'Show' : 'Show'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ApplicationForm;
