import React from 'react'
import UserInput from '../Components/UserInput'
import Preview from '../Components/Preview'

function Form() {
  const [resumeData,setResumeData]=React.useState({
      username:"",
      jobtitle:"",
      userLocation:"",
      email:"",
      phone:"",
      github:"",
      portfolio:"",
      linkedin:"",
      course:"",
      college:"",
      university:"",
      passoutyear:"",
      jobtype:"",
      compName:"",
      cLocation:"",
      duration:"",
      userSkills:[],
      summary:""
    })
  return (
    <div className='container-fluid'>
      <div className="row p-5">
        <div className="col lg-5">
          <UserInput resumeData={resumeData} setResumeData={setResumeData}/>
          </div>
        <div className="col lg-5">
          {resumeData.username &&
            <Preview resumeData={resumeData}/>
            }
          </div>
      </div>
    </div>
  )
}

export default Form