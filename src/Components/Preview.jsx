import { Button, Divider } from '@mui/material'
import React from 'react'


function Preview({resumeData}) {
  return (
    <div  className='text-center w-100 rounded shadow p-5'>
      <h3>{resumeData?.username}</h3>
      <h5>{resumeData?.jobtitle}</h5>
      <p ><span className='mx-2'>{resumeData?.userLocation}</span>|<span className='mx-2'>{resumeData?.email}</span>|<span className='mx-2'>{resumeData?.phone}</span></p>
      <p className='my-1'><a href={resumeData?.github} className='mx-1' target='_blank'>GITHUB</a>|<a href={resumeData?.linkedin} target='_blank' className='mx-1'>LINKEDIN</a>|<a href={resumeData?.portfolio} target='_blank' className='mx-1'>PORTFOLIO</a></p>
      <Divider sx={{fontSize:"25px",}}>Summary</Divider>
      <p style={{textAlign:"justify"}}>{resumeData?.summary}</p>
      <Divider sx={{fontSize:"25px",}}>Education</Divider>
      <h5>{resumeData?.course}</h5>
      <p><span className='mx-2'>{resumeData?.college}</span>|<span className='mx-2'>{resumeData?.university}</span>|<span className='mx-2'>{resumeData?.passoutyear}</span></p>
      <Divider sx={{fontSize:"25px",}}>Professional Experience</Divider>
      <h5>{resumeData?.jobtype}</h5>
      <p><span className='mx-2'>{resumeData?.compname}</span>|<span className='mx-2'>{resumeData?.cLocation}</span>|<span className='mx-2'>{resumeData?.duration}</span></p>
      <Divider sx={{fontSize:"25px",}}>Skills</Divider>
      <div className="d-flex flex-wrap justify-content-between my-3">
        {
          resumeData.userSkills?.map((skill,index)=>(<Button key={index} variant="contained" className="m-1">{skill}</Button>
        ))}
      </div>
    </div>
    
  )
}

export default Preview