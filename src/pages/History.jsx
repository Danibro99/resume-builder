import { Box, Button, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { deleteHistoryAPI, getHistoryAPI } from '../services/AllAPI';

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const result = await getHistoryAPI();
    console.log(result);
    if (result.status === 200) {
      setHistory(result.data);
    }
  };

  const deleteHistory=async(id)=>{
    try{
      await deleteHistoryAPI(id)
      getHistory()
    }
    catch(err){
      console.log(err);
      
    }
  }

  return (
    <div>
      <h1 className="text-center my-5">Downloaded Resume History</h1>
      <Link
        to={"/resume"}
        className="float-end me-5"
        style={{ marginTop: "-90px" }}
      >
        Back
      </Link>

      <Box component="section" className="container-fluid">
        <div className="row">
          {history.length > 0 ? (
            history.map((item) => (
              <div key={item?.id} className="col-md-4">
                <Paper
                  elevation={3}
                  sx={{ margin: "20px", padding: "20px" }}
                  className="text-center"
                >
                  <div className="d-flex justify-content-between text-center align-items-center">
                    <h6>{item?.timeStamp}</h6>
                    <Button
                      onClick={()=>deleteHistory(item?.id)}
                      sx={{
                        fontSize: "25px",
                        color: "red",
                        marginBottom: "8px",
                      }}
                    >
                      <MdDelete />
                    </Button>
                  </div>
                  <div className="rounded border p-3">
                    <img
                      style={{ width: "200px", height: "250px" }}
                      src={item?.resumeImg}
                      alt="resume"
                    />
                  </div>
                </Paper>
              </div>
            ))
          ) : (
            <p className="text-center my-5">No resumes are downloaded</p>
          )}
        </div>
      </Box>
    </div>
  );
}

export default History;
