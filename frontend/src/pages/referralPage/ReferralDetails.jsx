import React, { useState } from "react";
import "./ReferralDetails.css"; 
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



export default function ReferralPage({ formData, handleFormDataChange }) {
  // const [formData, setFormData] = useState({
  //   id: "",
  //   firstname: "",
  //   lastname: "",
  //   contact: "",
  //   email: "",
  //   relationship_with_person: "",
  //   address: "",
  //   city: "",
  //   pincode: "",

  // });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [resume, setResume] = useState(null); 
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate();

  const handleResumeChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleFormDataChange({ ...formData, [name]: value });
    console.log(formData);
  };
    

  const handleNext = (e) => {
    e.preventDefault();

    // Check if any required fields are empty
    const requiredFields = [
      "firstName",
      "lastName",
      "contact",
      "email",
      "relationship_with_person",
      "address",
      "city",
      "pincode"
    ];
    const emptyFields = requiredFields.filter((field) => !formData[field]);

    if (emptyFields.length > 0) {
      setSubmitStatus("error");
      return;
    }

    // const formDataWithResume = new FormData();
    // formDataWithResume.append("resume", resume); // Append the resume file
    // formDataWithResume.append("formData", JSON.stringify(formData)); // Append the form data as JSON

    // axios
    //   .post("http://127.0.0.1:5000/create", formData)
    //   .then((response) => {
    //     console.log(response.data);
    //     setSubmitStatus("success");
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     setSubmitStatus("error");
    //   });
  //   axios
  //   .post("http://127.0.0.1:5000/create", formDataWithResume, {
  //     headers: {
  //       "Content-Type": "multipart/form-data" // Set content type to multipart/form-data
  //     }
  //   })
  //   .then((response) => {
  //     console.log(response.data);
  //     setSubmitStatus("success");
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //     setSubmitStatus("error");
  //   });
  
    
   };

  

  return (
//     <div>
              
// <div className="container">
             
//                 <h2>Details about the candidate</h2>
//                 <form onSubmit={handleSubmit} className="form">
//                   <div className="form-group">
//                     <label htmlFor="name">Name</label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="contact">Contact</label>
//                     <input
//                       type="text"
//                       id="contact"
//                       name="contact"
//                       value={formData.contact}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="relationship_with_person">Relationship with Person</label>
//                     <input
//                       type="text"
//                       id="relationship_with_person"
//                       name="relationship_with_person"
//                       value={formData.relationship_with_person}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="address">Address</label>
//                     <input
//                       type="text"
//                       id="address"
//                       name="address"
//                       value={formData.address}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="city">City</label>
//                     <input
//                       type="text"
//                       id="city"
//                       name="city"
//                       value={formData.city}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="pincode">Pincode</label>
//                     <input
//                       type="text"
//                       id="pincode"
//                       name="pincode"
//                       value={formData.pincode}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>           
//                 </form>
//               </div>      
//             </div>

<form onSubmit={handleNext} className="form">
<React.Fragment>
<Typography variant="h6" gutterBottom>
Details about the candidate
</Typography>
<Grid container spacing={3}>
  <Grid item xs={12} sm={6}>
    <TextField
  required
  id="firstName"
  value={formData.firstName} // Update to formData.firstName
  name="firstName" // Update to firstName
  label="First name"
  fullWidth
  variant="standard"
  onChange={handleChange}
/>

  </Grid>
  <Grid item xs={12} sm={6}>
  <TextField
  required
  id="lastName"
  value={formData.lastName} // Update to formData.lastName
  name="lastName" // Update to lastName
  label="Last name"
  fullWidth
  variant="standard"
  onChange={handleChange}
/>

  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField
      required
      id="email"
      value={formData.email}
      name="email"
      label="Email"
      fullWidth
      variant="standard"
      onChange={handleChange}
    />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField
      required
      id="contact"
      name="contact"
      value={formData.contact}
      label="Contact"
      fullWidth
      variant="standard"
      onChange={handleChange}
    />
  </Grid>
  <Grid item xs={12}>
    <TextField
      id="address"
      name="address"
      value={formData.address}
      label="Address"
      fullWidth
      variant="standard"
      onChange={handleChange}
    />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField
      required
      id="city"
      name="city"
      value={formData.city}
      label="City"
      fullWidth
      variant="standard"
      onChange={handleChange}
    />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField
      id="relationship_with_person"
      name="relationship_with_person"
      value={formData.relationship_with_person}
      label="Relationship with Person"
      fullWidth
      variant="standard"
      onChange={handleChange}
    />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField
      required
      id="pincode"
      name="pincode"
      label="Postal code"
      fullWidth
      variant="standard"
      onChange={handleChange}
    />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField
      required
      id="id"
      name="id"
      value={formData.id}
      label="AID of the Referrer"
      fullWidth
      variant="standard"
      onChange={handleChange}
    />
  </Grid>
  <Grid item xs={12}>
    <FormControlLabel
      control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
      label="High Priority"
    />
  </Grid>
</Grid>
</React.Fragment>
</form>
   
  );
}

