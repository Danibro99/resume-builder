import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { ImCancelCircle } from "react-icons/im";


const steps = ['Basic Information', 'Contact Details', 'Educational Details','Work Experience','Skills and Experience','Review and Submit'];

function UserInput() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const skillSuggest=['NODE JS','PYTHON','REACT','BOOTSTRAP','EXPRESS JS','HARDWORKING','EFFCIENT','MONGO DB','TAILWIND','CSS']
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderStep=(stepCount)=>{
    switch(stepCount){
        case 0:
            return(
                <div>
                    <h3>Personal Details</h3>
                    <div className="row p-3">
                        <TextField id="userFullname" label="Full Name" variant="standard" />
                        <TextField id="userJob-title" label="Job-Title" variant="standard" />
                        <TextField id="userLocation" label="Location" variant="standard" />
                    </div>
                </div>
                
            )
        case 1:
            return(
                <div>user
                  <h3>Contact Details</h3>
                  <div className="row p-3">
                      <TextField id="userEmail" label="E-mail" variant="standard" />
                      <TextField id="userPhoneNum" label="Phone Number" variant="standard" />
                      <TextField id="userGithub" label="Github Profile Link" variant="standard" />
                      <TextField id="userLinkedin" label="LinkedIn Profile Link" variant="standard" />
                      <TextField id="userPortfolio" label="Portfolio Link" variant="standard" />
                  </div>
                </div>
            )
        case 2:
            return(
            <div>
              <h3>Educational Details</h3>
              <div className="row p-3">
                <TextField id="userCourse" label="Course Name" variant="standard" />
                <TextField id="userCollege" label="College Name" variant="standard" />
                <TextField id="userUni" label="University" variant="standard" />
                <TextField id="passoutYear" label="Year of Passout" variant="standard" />
              </div>
            </div>
            )
        case 3:
            return(
                <div>
                  <h3>Work Experience</h3>
                  <div className="row p-3">
                    <TextField id="userWorkexp" label="Job or Internship" variant="standard" />
                    <TextField id="workCompany" label="Company Name" variant="standard" />
                    <TextField id="companyLocation" label="Company Location" variant="standard" />
                    <TextField id="workDuration" label="Duration" variant="standard" />
                  </div>
                  </div>
            )
        case 4:
            return(
                <div>
                  <h3>Skills and Experience</h3>
                  <div className="d-flex justify-content-between align-items-center p-3">
                    <TextField id="outlined-basic" label="Skill" variant="outlined" className='w-100' />
                    <Button type='button'>ADD</Button>
                  </div>
                  <h3>Suggestions:</h3>
                  <div className="d-flex flex-wrap justify-content-between my-3">
                    {
                      skillSuggest.map((item,index) => (
                        <Button key={index} variant="outlined" className="m-1">{item}</Button>
                      ))
                    }
                  </div>
                  <h3>Added Skills:</h3>
                  <div className="d-flex flex-wrap justify-content-between my-3">
                        <Button variant="contained" className="m-1">Node <ImCancelCircle  className='ms-2'/></Button>
                  </div>
                  </div>
            )
        case 5:
            return(
                <div>
                  <h3>Professional Summary</h3>
                  <div className="p-3 row">
                    <TextField id="userSummary" variant='standard' label="Write a Short Summary of Yourself" multiline rows={4} defaultValue="Creative React Developer focused on crafting engaging and intuitive web experiences. Experienced in transforming UI/UX designs into responsive, pixel-perfect applications using React, JavaScript, and Bootstrap/Tailwind CSS. Driven by curiosity, innovation, and a commitment to writing high-quality, maintainable code."></TextField>
                  </div>
                  </div>
            )
        default:
            return null
    }
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>
            {renderStep(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default UserInput