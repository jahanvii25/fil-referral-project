import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from 'react-router-dom';
import JobPostings from "./jobpostings";
// import referalImage from '../../public/referral-landing.jpeg';


export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const history = useHistory();
  const updateEmail = (event) => setEmail(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);
  const navigate = useNavigate();
  async function login() {
    console.log(email);
    console.log(password);
    const response = await axios.post("http://localhost:5000/login", {
      email: email,
      password: password,
    });
    console.log(response);
    navigate('/create');
  }

//   const [loginSuccess, setLoginSuccess] = useState(false);
//   const [error, setError] = useState("");
//   const [role, setRole] = useState("");
//   const updateEmail = (event) => setEmail(event.target.value);
//   const updatePassword = (event) => setPassword(event.target.value);

//   async function login() {
//     console.log(email);
//     console.log(password);
//     const response = await axios.post("http://127.0.0.1:5000/login", {
//       email: email,
//       password: password,
//     });
//     console.log(response.data.login);
//     const chimu = await response.data;
//     if (!chimu.login)
//       setError("Incorrect login details");
//     else {
//       setError("");
//       setRole(chimu.role);
//     }
//     setLoginSuccess(chimu.login);
//   }

//   if (loginSuccess)
//     return <JobPostings role={role} />

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(./referral-landing.jpg)`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#A7C7E7",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",
          backgroundColor: "rgba(255,255,255,0.4)",
          boxSizing: "border-box",
          padding: "20px",
        }}
      >
        <p style={{ fontSize: "60px", fontWeight: "bold" }}>Referral Hub</p>
        <p style={{ fontSize: "50px", fontWeight: "normal" }}>
          <i>
            "Connect the dots and build a brighter future – one referral at a
            time!"
          </i>
        </p>
      </div>
      <div
        style={{
          width: "50%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
          boxSizing: "border-box",
          padding: "50px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ fontSize: "60px", fontWeight: "bold", color: "white" }}>
          Sign In
        </p>
        {/* <p style={{ fontSize: '30px', fontWeight: 'normal', color: 'white' }}>Username</p> */}
        <input
          value={email}
          onChange={updateEmail}
          placeholder="Enter username .."
          style={{ marginBottom: "20px", padding: "7px" }}
        />
        {/* <p style={{ fontSize: '30px', fontWeight: 'normal', color: 'white' }}>Password</p> */}
        <input
          type="password"
          value={password}
          onChange={updatePassword}
          placeholder="Enter password .."
          style={{ marginBottom: "20px", padding: "7px" }}
        />
        <button
          onClick={login}
          style={{ color: "white", backgroundColor: "#24a0ed", padding: "7px" }}
        >
          Login
        </button>
        <h5 style={{ color: 'red' }}>{error}</h5>

      </div>
    </div>
  );
}
