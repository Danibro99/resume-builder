import { Box,Button,Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";

function History() {
  return (
    <div>
      <h1 className='text-center my-5'>Downloaded Resume History</h1>
      <Link to={'/resume'} className='float-end me-5' style={{marginTop:"-90px"}}>Back</Link>
      <Box component="section" className='container-fluid'>
        <div className='row'>
          <div className='col-md-4'>
            <Paper elevation={3} sx={{margin:"20px",padding:"20px"}} className='text-center'>
              <div className="d-flex justify-content-between text-center align-items-center">
                <h6>Review At:12/12/2012 10:12:33 PM</h6>
                <Button sx={{fontSize:"25px",color:"red",marginBottom:"8px"}}><MdDelete /></Button>
              </div>
              <div className="rounded border p-3">
                <img style={{width:"200px",height:"250px"}} src="resumedemo.png" alt="resume" />
              </div>
            </Paper>
            </div>
          </div>
    </Box>
    </div>
  )
}

export default History