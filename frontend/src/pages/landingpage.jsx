import React, { useState } from 'react';
// import referalImage from '../../public/referral-landing.jpeg';


export default function LandingPage() {
  const [submitStatus, setSubmitStatus] = useState(null);

  return (
    <div style={{width:'100vw', height:'100vh', backgroundImage:`url(./referral-landing.jpeg)`,backgroundSize:'100% 100%', backgroundRepeat: "no-repeat", backgroundColor:'#A7C7E7', display:'flex' }}>
      <div style={{width:'50%', height:'100%', backgroundColor:'rgba(255,255,255,0.4)'}}>
        <p style={{fontSize:'60px', fontWeight:'bold'}}>Referral Hub</p>
        <p style={{fontSize:'50px', fontWeight:'normal'}}><i>"Connect the dots and build a brighter future – one referral at a time!"</i></p>
      </div>
      <div style={{width:'50%', height:'100%', backgroundColor:'rgba(0,0,0,0.7)'}}>
        <div style={{width:'100%', height:'100%', paddingLeft:'50px', paddingTop:'20vh'}}>
            <p style={{fontSize:'60px', fontWeight:'bold' ,color:'white'}}>Sign In</p>
            <p style={{fontSize:'30px', fontWeight:'normal', color:'white'}}>Username</p>
            <input alt='enter'/>
            <p style={{fontSize:'30px', fontWeight:'normal', color:'white'}}>Password</p>
            <input />
        </div>
        </div>
    </div>
  );
}