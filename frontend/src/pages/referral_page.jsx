import React, { useState } from "react";
// import referalImage from '../../public/referral-landing.jpeg';

export default function ReferralPage() {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        contact: '',
        email: '',
        relationship_with_person: '',
        address: '',
        city: '',
        pincode: ''
      });
    
      const [submitStatus, setSubmitStatus] = useState(null);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
        console.log("looooo");
        console.log(formData);
        console.log(formData.pincode);
    
      };
    
      // const handleSubmit = (e) => {
      //   e.preventDefault();
      //   fetch('http://127.0.0.1:5000/create', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(formData)
      //   })
      //   .then(response => response.json())
      //   .then(data => {
      //     console.log(data); 
      //     setSubmitStatus('success'); 
      //   })
      //   .catch(error => {
      //     console.error('Error:', error);
      //     setSubmitStatus('error'); 
      //   });
      // };
      const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check if any required fields are empty
        const requiredFields = ['name', 'contact', 'email', 'relationship_with_person', 'address', 'city'];
        const emptyFields = requiredFields.filter(field => !formData[field]);
        
        if (emptyFields.length > 0) {
          console.error('Empty fields:', emptyFields);
          setSubmitStatus('error');
          return;
        }
      
        fetch('http://127.0.0.1:5000/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
          console.dir(data)
          console.log(data); 
          setSubmitStatus('success'); 
        })
        .catch(error => {
          console.error('Error:', error);
          setSubmitStatus('error'); 
        });
      };
  return ( <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
  <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Form</h2>
  <form onSubmit={handleSubmit}>
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
    </div>

    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="contact">Contact</label>
      <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} />
    </div>

    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
    </div>

    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="relationship_with_person">Relationship with Person</label>
      <input type="text" id="relationship_with_person" name="relationship_with_person" value={formData.relationship_with_person} onChange={handleChange} />
    </div>

    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="address">Address</label>
      <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
    </div>

    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="city">City</label>
      <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
    </div>

    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="pincode">Pincode</label>
      <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} />
    </div>

    <button style={{ display: 'block', width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} type="submit">
      Submit
    </button>

    {submitStatus === 'success' && (
      <div style={{ marginTop: '10px', backgroundColor: '#d4edda', color: '#155724', padding: '10px', borderRadius: '5px' }}>
        Successfully submitted!
      </div>
    )}
    {submitStatus === 'error' && (
      <div style={{ marginTop: '10px', backgroundColor: '#f8d7da', color: '#721c24', padding: '10px', borderRadius: '5px' }}>
        Submission failed. Please try again later.
      </div>
    )}
  </form>
</div>);    
}

