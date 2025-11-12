import React, { useState, useRef } from "react";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { ImCancelCircle } from "react-icons/im";
import { updateResumeAPI } from "../services/AllAPI";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  maxHeight: "80vh",
  bgcolor: "background.paper",
  overflowY: "auto",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Edit({ resumeData, setResumeData }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const skillInputRef = useRef();

  const addSkill = (skill) => {
    if (resumeData.userSkills.includes(skill)) {
      alert("The given skill already exists.Enter another one");
    } else {
      setResumeData({
        ...resumeData,
        userSkills: [...resumeData.userSkills, skill],
      });
      // skillInputRef.current.value=""
    }
  };

  const removeskill = (skill) => {
    setResumeData({
      ...resumeData,
      userSkills: resumeData.userSkills.filter((item) => item != skill),
    });
  };

  const handleUpdateResume = async ()=>{
    const {id,username,jobtitle,userLocation}=resumeData
    if(!username || !jobtitle || !userLocation){
      alert("Please fill the form completely")
    }else{
      console.log("API Call!!");
      try{
        const result= await updateResumeAPI(id,resumeData)
        console.log(result);
        if(result.status==200){
          alert("Resume updated successfully")
          handleClose()
        }       
      }catch(err){
        console.log(err);
      }
    }
  }

  return (
    <div>
      <button className='btn btn-warning'  onClick={handleOpen}>
        <MdEdit />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className="d-flex justify-content-center" id="modal-modal-title" variant="h6" component="h2">
            <h2>Edit Resume details</h2>
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* personal data */}
            <div>
              <h3>Personal Details</h3>
              <div className="row p-3">
                <TextField
                  value={resumeData.username}
                  onChange={(e) => {
                    setResumeData({ ...resumeData, username: e.target.value });
                  }}
                  id="userFullname"
                  label="Full Name"
                  variant="standard"
                />
                <TextField
                  value={resumeData.jobtitle}
                  onChange={(e) => {
                    setResumeData({ ...resumeData, jobtitle: e.target.value });
                  }}
                  id="userJob-title"
                  label="Job-Title"
                  variant="standard"
                />
                <TextField
                  value={resumeData.userLocation}
                  onChange={(e) => {
                    setResumeData({
                      ...resumeData,
                      userLocation: e.target.value,
                    });
                  }}
                  id="userLocation"
                  label="Location"
                  variant="standard"
                />
              </div>
            </div>
            <div>
              {/* Contact Data */}
              <h3>Contact Details</h3>
              <div className="row p-3">
                <TextField
                  value={resumeData.email}
                  onChange={(e) => {
                    setResumeData({ ...resumeData, email: e.target.value });
                  }}
                  id="userEmail"
                  label="E-mail"
                  variant="standard"
                />
                <TextField
                  value={resumeData.phone}
                  onChange={(e) => {
                    setResumeData({ ...resumeData, phone: e.target.value });
                  }}
                  id="userPhoneNum"
                  label="Phone Number"
                  variant="standard"
                />
                <TextField
                  value={resumeData.github}
                  onChange={(e) => {
                    setResumeData({ ...resumeData, github: e.target.value });
                  }}
                  id="userGithub"
                  label="Github Profile Link"
                  variant="standard"
                />
                <TextField
                  value={resumeData.linkedin}
                  onChange={(e) => {
                    setResumeData({ ...resumeData, linkedin: e.target.value });
                  }}
                  id="userLinkedin"
                  label="LinkedIn Profile Link"
                  variant="standard"
                />
                <TextField
                  value={resumeData.portfolio}
                  onChange={(e) => {
                    setResumeData({ ...resumeData, portfolio: e.target.value });
                  }}
                  id="userPortfolio"
                  label="Portfolio Link"
                  variant="standard"
                />
              </div>
            </div>
            {/* Educational details */}
            <div>
              <h3>Educational Details</h3>
              <div className="row p-3">
                <TextField
                  value={resumeData.course}
                  onChange={(e) => {
                    setResumeData({ ...resumeData, course: e.target.value });
                  }}
                  id="userCourse"
                  label="Course Name"
                  variant="standard"
                />
                <TextField
                  value={resumeData.college}
                  onChange={(e) => {
                    setResumeData({ ...resumeData, college: e.target.value });
                  }}
                  id="userCollege"
                  label="College Name"
                  variant="standard"
                />
                <TextField
                  value={resumeData.university}
                  onChange={(e) => {
                    setResumeData({
                      ...resumeData,
                      university: e.target.value,
                    });
                  }}
                  id="userUni"
                  label="University"
                  variant="standard"
                />
                <TextField
                  value={resumeData.passoutyear}
                  onChange={(e) => {
                    setResumeData({
                      ...resumeData,
                      passoutyear: e.target.value,
                    });
                  }}
                  id="passoutYear"
                  label="Year of Passout"
                  variant="standard"
                />
              </div>
            </div>
            {/* work experience */}
            <div>
              <h3>Work Experience</h3>
              <div className="row p-3">
                <TextField
                  value={resumeData.jobtype}
                  onChange={(e) => {
                    setResumeData({ ...resumeData, jobtype: e.target.value });
                  }}
                  id="userWorkexp"
                  label="Job or Internship"
                  variant="standard"
                />
                <TextField
                  value={resumeData.compName}
                  onChange={(e) => {
                    setResumeData({ ...resumeData, compName: e.target.value });
                  }}
                  id="workCompany"
                  label="Company Name"
                  variant="standard"
                />
                <TextField
                  value={resumeData.cLocation}
                  onChange={(e) => {
                    setResumeData({ ...resumeData, cLocation: e.target.value });
                  }}
                  id="companyLocation"
                  label="Company Location"
                  variant="standard"
                />
                <TextField
                  value={resumeData.duration}
                  onChange={(e) => {
                    setResumeData({ ...resumeData, duration: e.target.value });
                  }}
                  id="workDuration"
                  label="Duration"
                  variant="standard"
                />
              </div>
            </div>
            {/* Skills */}
            <div>
              <h3>Skills and Experience</h3>
              <div className="d-flex justify-content-between align-items-center p-3">
                <TextField
                  id="skill-input"
                  inputRef={skillInputRef}
                  label="Skill"
                  variant="outlined"
                  className="w-100"
                />
                <Button
                  onClick={() => {
                    addSkill(skillInputRef.current.value);
                  }}
                  type="button"
                >
                  ADD
                </Button>
              </div>

              <h3>Added Skills:</h3>
              <div className="d-flex flex-wrap justify-content-between my-3">
                {resumeData.userSkills?.length > 0 ? (
                  resumeData.userSkills.map((skill, index) => (
                    <Button key={index} variant="contained" className="m-1">
                      {skill}
                      <ImCancelCircle
                        onClick={() => removeskill(skill)}
                        className="ms-2"
                      />
                    </Button>
                  ))
                ) : (
                  <p className="fw-bolder">No skills are added yet!!!</p>
                )}
              </div>
            </div>
            <div>
              <h3>Professional Summary</h3>
              <div className="p-3 row">
                <TextField
                  id="userSummary"
                  onChange={(e) => {
                    setResumeData({ ...resumeData, summary: e.target.value });
                  }}
                  variant="standard"
                  label="Write a Short Summary of Yourself"
                  multiline
                  rows={4}
                  defaultValue="Creative React Developer focused on crafting engaging and intuitive web experiences. Experienced in transforming UI/UX designs into responsive, pixel-perfect applications using React, JavaScript, and Bootstrap/Tailwind CSS. Driven by curiosity, innovation, and a commitment to writing high-quality, maintainable code."
                ></TextField>
              </div>
            </div>
            <div className="d-flex justify-content-center"><button onClick={handleUpdateResume} className="btn btn-primary ">Update</button></div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit;
