import React, { useState, useEffect } from "react";
import axios from "axios";
// import referalImage from '../../public/referral-landing.jpeg';

export default function JobPostings(props) {
  const [jobs, setJobs] = useState([]);
  const [cardMargin, setCardMargin] = useState(0);
  useEffect(() => {
    async function fetchJobPostings() {
      let response = await axios.get("http://127.0.0.1:5000/fetchJobPostings");
      response = await response.data;
      console.log(response);
      setJobs(response);
    }
    fetchJobPostings();
  }, []);

  useEffect(() => {
    setCardMargin( 
      (window.innerWidth % 304) / (Math.floor(window.innerWidth / 304) * 2) - 1
    );
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setCardMargin(
        (window.innerWidth % 304) / (Math.floor(window.innerWidth / 304) * 2) -
        1
      );
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#dadada",
          padding: "30px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: 'space-between'
        }}
      >
        <p style={{ fontSize: "35px", margin: 0, fontWeight: "bold" }}>
          Referral Hub
        </p>
        <p style={{
          color: 'blue',
          size: '25px',
        }}><u>
            {props.role == "Admin" ? "Add New Job Posting" : "Check Referrals Status"}
          </u>
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {jobs.map((item) => {
          return (
            <div
              style={{
                width: "300px",
                height: "250px",
                backgroundColor: "#3944bc",
                display: "flex",
                flexDirection: "column",
                //alignItems: "center",
                justifyContent: "space-around",
                border: "2px solid #dadada",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: cardMargin,
                marginRight: cardMargin,
                padding: '20px',
                paddingTop: '20px',
                boxSizing: 'border-box',
                cursor: "pointer"
              }}
            >
              <h1 style={{ color: 'white' }}>{item[2]}</h1>
              <div>
                <h3 style={{ color: 'white' }}>Location: {item[1]}</h3>
                <h3 style={{ color: 'white' }}>Experience: {item[5]} years</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
