import { Button, Divider } from '@mui/material'
import React from 'react'
Divider
function Preview() {
  return (
    <div  className='text-center w-100 rounded shadow p-5'>
      <h3>name</h3>
      <h5>Job-title</h5>
      <p ><span className='mx-2'>Location</span>|<span className='mx-2'>e-mail</span>|<span className='mx-2'>phone number</span></p>
      <p className='my-1'><a href="" className='mx-1' target='_blank'>GITHUB</a>|<a href="" target='_blank' className='mx-1'>LINKEDIN</a>|<a href="" target='_blank' className='mx-1'>PORTFOLIO</a></p>
      <Divider sx={{fontSize:"25px",}}>Summary</Divider>
      <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut autem expedita sit maiores exercitationem natus consequatur. Officiis id rerum veniam ad iusto repellendus distinctio aliquam, rem reprehenderit, eius assumenda odio?</p>
      <Divider sx={{fontSize:"25px",}}>Education</Divider>
      <h5>Course Name</h5>
      <p><span className='mx-2'>College</span>|<span className='mx-2'>University</span>|<span className='mx-2'>Passout Year</span></p>
      <Divider sx={{fontSize:"25px",}}>Professional Experience</Divider>
      <h5>Job/Internhsip</h5>
      <p><span className='mx-2'>company name</span>|<span className='mx-2'>company location</span>|<span className='mx-2'>duration</span></p>
      <Divider sx={{fontSize:"25px",}}>Skills</Divider>
      <div className="d-flex flex-wrap justify-content-between my-3">
        <Button variant="contained" className="m-1">Node  </Button>
      </div>
    </div>
    
  )
}

export default Preview