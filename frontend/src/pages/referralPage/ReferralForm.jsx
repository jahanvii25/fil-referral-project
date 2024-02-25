// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Paper from '@mui/material/Paper';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';
// import ReferralDetails from './ReferralDetails';
// import AttatchResume from './AttatchResume';
// import ApplicationReview from './ApplicationReview';
// import { IoIosLogOut } from "react-icons/io";
// import { MdOutlineNotifications } from "react-icons/md";
// import { FaUserCircle } from "react-icons/fa";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const steps = ['Referral Details', 'Attatch Resume', 'Review your Application'];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <ReferralDetails />;
//     case 1:
//       return <AttatchResume />;
//     case 2:
//       return <ApplicationReview />;
//     default:
//       throw new Error('Unknown step');
//   }
// }

// export default function Checkout() {
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep(activeStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep(activeStep - 1);
//   };

//   return (
   
            
//     <React.Fragment>
//       <CssBaseline />
//       <AppBar
//         position="absolute"
//         color="default"
//         elevation={0}
//         sx={{
//           position: 'relative',
//           borderBottom: (t) => `1px solid ${t.palette.divider}`,
//         }}
//       >
//         <div>
//             <nav className="navbar">
//             <div className="logo-container">
//                 <div className="logo"><FaUserCircle /></div>
//                 <div className="logo-text">Hello, Priyam!</div> 
//             </div>
//             <div className="navbar-brand">FIL Referral </div>
//             <div className="navbar-icons">
//                 <MdOutlineNotifications />
//                 <IoIosLogOut />
//             </div>
//             </nav>
//         </div>
//       </AppBar>
//       <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
//         <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
//           <Typography component="h1" variant="h4" align="center">
//             Application Form
//           </Typography>
//           <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
//             {steps.map((label) => (
//               <Step key={label}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//           {activeStep === steps.length ? (
//             <React.Fragment>
//               <Typography variant="h5" gutterBottom>
//                 Application Submitted.
//               </Typography>
//               <Typography variant="subtitle1">
//                 It might take a while to review your application. 
//                 You can view the status of the Application from the Dashboard.
//               </Typography>
//             </React.Fragment>
//           ) : (
//             <React.Fragment>
//               {getStepContent(activeStep)}
//               <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//                 {activeStep !== 0 && (
//                   <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
//                     Back
//                   </Button>
//                 )}

//                 <Button
//                   variant="contained"
//                   onClick={handleNext}
//                   sx={{ mt: 3, ml: 1 }}
//                 >
//                   {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
//                 </Button>
//               </Box>
//             </React.Fragment>
//           )}
//         </Paper>
//         <Copyright />
//       </Container>
//     </React.Fragment>
//   );
// }
import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ReferralDetails from './ReferralDetails';
import AttatchResume from './AttatchResume';
import ApplicationReview from './ApplicationReview';
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineNotifications } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Referral Details', 'Attach Resume', 'Review your Application'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = useState({
    id: "",
    firstname: "",
    lastname: "",
    contact: "",
    email: "",
    relationship_with_person: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleFormDataChange = (updatedFormData) => {
    setFormData(updatedFormData);
  };
  // Inside the Checkout component
function getStepContent(step, formData, handleFormDataChange) {
  switch (step) {
    case 0:
      return <ReferralDetails formData={formData} handleFormDataChange={handleFormDataChange} />;
    case 1:
      return <AttatchResume formData={formData} />;
    case 2:
      return <ApplicationReview formData={formData} />;
    default:
      throw new Error('Unknown step');
  }
}


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <div>
          <nav className="navbar">
            <div className="logo-container">
              <div className="logo"><FaUserCircle /></div>
              <div className="logo-text">Hello, Priyam!</div> 
            </div>
            <div className="navbar-brand">FIL Referral </div>
            <div className="navbar-icons">
              <MdOutlineNotifications />
              <IoIosLogOut />
            </div>
          </nav>
        </div>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Application Form
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Application Submitted.
              </Typography>
              <Typography variant="subtitle1">
                It might take a while to review your application. 
                You can view the status of the Application from the Dashboard.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, formData, handleFormDataChange)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
