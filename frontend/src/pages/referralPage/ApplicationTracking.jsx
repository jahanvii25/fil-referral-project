// import React, {useState, useEffect} from 'react';
// import './applicationForm.css';
// import axios from 'axios';


// const ApplicationForm = () => {

//     const data = [
//         { name: 'Priyam', jobID: 1223, location: 'India', status: true, action: true },
//         { name: 'Jahanvi', jobID: 2211, location: 'India', status: false, action: false },
//         { name: 'Abc', jobID: 3212, location: 'India', status: true, action: true },
//     ];

//     const[records, setRecords] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         axios.get('http://localhost:5000/form')
//           .then(response => {
//             setRecords(response.data.records)
//             console.log(records)
//             setLoading(false);
//           })
//           .catch(error => {
//             setError(error.message);
//             setLoading(false);
//           });
//       }, []);

//     return (
//         <div>
//             <nav className="navbar">
//                 <div className="navbar-brand">FIL Referral</div>
//             </nav>
//             <div className='container'>
//             <h1>Application Status</h1>
//             </div>
//             <div>
                
//                 <table>
//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th>Name</th>
//                             <th>Job ID</th>
//                             <th>Location</th>
//                             <th>Status</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {records}
//                         {data.map((item, index) =>
//                             <tr key={index} className='hover-slate-100'>
//                                 <td>{ }</td>
//                                 <td>{item.name}</td>
//                                 <td>{item.jobID}</td>
//                                 <td>{item.location}</td>
//                                 <td>{item.action ? 'Approved' : 'Rejected'}</td>
//                                 <td>{item.status ? 'Show' : 'Show'}</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default ApplicationForm;


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
