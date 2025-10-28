import React from 'react'
import { IoDocument } from "react-icons/io5";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ResumeGenerator() {
  return (
    <div className='container-fluid'>
      <h1 className='text-center mt-5'>Create a Job-Winning Resume in Minutes</h1>
      <div style={{height:"60vh"}} className="row justify-content-center align-items-center gap-4">
      <div className="col-md-4 border rounded shadow p-5 text-center">
        <IoDocument style={{color:"yellowgreen"}} className=' fs-1 mb-3'/>
        <h4>Add Your Information</h4>
        <p>Add pre-written examples to each section</p>
        <h5>Step 1</h5>
      </div>
      <div className="col-md-4 border rounded shadow p-5 text-center">
      <FaCloudDownloadAlt style={{color:"yellowgreen"}} className='fs-1 mb-3'  />
        <h4>Download Your Resume</h4>
        <p>Download and start applying</p>
        <h5>Step 2</h5>
      </div>
      </div>
      <div className='d-flex justify-content-center align-items-center ms-5 mb-4'>
        <Link to={'/form'} className="btn text-white" style={{backgroundColor:"yellowgreen"}}>Start</Link>
        </div>
    </div>
  )
}

export default ResumeGenerator