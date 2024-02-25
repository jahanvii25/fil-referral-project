// import React, { useState } from "react";
// import "./ReferralDetails.css"; 
// import { TiUpload } from "react-icons/ti";
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import { IoIosLogOut } from "react-icons/io";
// import { MdOutlineNotifications } from "react-icons/md";
// import { FaUserCircle } from "react-icons/fa";




// export default function ReferralPage({formData}) {
//   // const [formData, setFormData] = useState({
//   //   id: "",
//   //   name: "",
//   //   contact: "",
//   //   email: "",
//   //   relationship_with_person: "",
//   //   address: "",
//   //   city: "",
//   //   pincode: ""
//   // });
//   console.dir(formData)
//   console.log("inside formData");

//   const [submitStatus, setSubmitStatus] = useState(null);
//   const [resume, setResume] = useState(null); 
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   const handleResumeChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedFiles([file]);
//     setResume(file);
//     const { name, value } = e.target;
//     // formData.append("resume",resume)
//     console.log("inside Attach Renume ");
//     console.log(formData);
//     console.dir(formData)
//   };

//   console.log("after inserting pdf --->",formData.resume);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // formData.append("resume",resume)
//     // setFormData({
//     //   ...formData,
//     //   [name]: value
//     // });
   
//   };

//   const handleSubmit = (e) => { 
    

//   };

  

//   return (
//     <div className="container">      
//             <label htmlFor="resume">Attach Resume</label>
//               <div className="file-input">
//                 <input
//                   type="file"
//                   id="resume"
//                   name="resume"
//                   accept=".pdf"
//                   onChange={handleResumeChange}
//                   required
//                   style={{ display: 'none' }}
//                 />
//                 <label htmlFor="resume" className="dropdown-icon">
//                 <TiUpload />
//                 </label>
//               </div>
//                 <div>
//                 <h3>Selected Files:</h3>
//                 <ul>
//                   {selectedFiles.map((file, index) => (
//                     <li key={index}>{file.name}</li>
//                   ))}
//                 </ul>
//               </div>
//               <React.Fragment>
              
//               <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                
//                   <Button onClick={handleSubmit} sx={{ mt: 3, ml: 1 }}>
//                     Submit
//                   </Button>
//               </Box>
//             </React.Fragment>
//                 {resume && (
//                   <div className="resume-preview">
//                     <p>Selected Resume: {resume.name}</p>
//                   </div>
//                 )}
//                 {submitStatus === "success" && (
//                   <div className="success-message">Successfully submitted!</div>
//                 )}
//                 {submitStatus === "error" && (
//                   <div className="error-message">
//                     Submission failed. Please try again later.
//                   </div>
//                 )}

//             </div>
            
   
//   );
// }
import React, { useState } from "react";
import "./ReferralDetails.css"; 
import { TiUpload } from "react-icons/ti";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ReferralPage({ formData }) {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [resume, setResume] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setSelectedFiles([file]);
    setResume(file);
    console.log("Selected Resume:", file);
    console.log("Current formData:", formData);
    const updatedFormData = { ...formData };

    // Append the resume file to the formData
    updatedFormData.resume = resume;
    console.dir(updatedFormData)
    // Log the updated formData
    console.log("Updated formData:", updatedFormData);
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clone the existing formData object
    const updatedFormData = { ...formData };

    // Append the resume file to the formData
    updatedFormData.resume = resume;
    console.dir(updatedFormData)
    // Log the updated formData
    console.log("Updated formData:", updatedFormData);

    // Perform any other submission logic here
    // For example, you can make an API call to submit the formData with the resume
  };

  return (
    <div className="container">
      <label htmlFor="resume">Attach Resume</label>
      <div className="file-input">
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf"
          onChange={handleResumeChange}
          required
          style={{ display: 'none' }}
        />
        <label htmlFor="resume" className="dropdown-icon">
          <TiUpload />
        </label>
      </div>
      <div>
        <h3>Selected Files:</h3>
        <ul>
          {selectedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>
      <React.Fragment>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={handleSubmit} sx={{ mt: 3, ml: 1 }}>
            Submit
          </Button>
        </Box>
      </React.Fragment>
      {resume && (
        <div className="resume-preview">
          <p>Selected Resume: {resume.name}</p>
        </div>
      )}
      {submitStatus === "success" && (
        <div className="success-message">Successfully submitted!</div>
      )}
      {submitStatus === "error" && (
        <div className="error-message">
          Submission failed. Please try again later.
        </div>
      )}
    </div>
  );
}

