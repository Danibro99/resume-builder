import { useParams } from 'react-router-dom'
import Preview from '../Components/Preview'
import { useEffect, useState } from 'react'
import { getResumeAPI } from '../services/AllAPI'

function ViewResume() {
  const {id}=useParams()
  console.log(id);
  const [resume,setResume]=useState({})

  useEffect(()=>{
    getResumeDetails()
  },[])

  const getResumeDetails=async ()=>{
    const result= await getResumeAPI(id)
    console.log(result);
    if(result.status==200){
      setResume(result.data)
    }
  }
  
  return (
    <div>
        <div className="container my-5">
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                    <Preview resumeData={resume}/>
                </div>
                <div className="col-md-2">
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewResume