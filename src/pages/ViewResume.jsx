import { Link, useParams } from 'react-router-dom'
import Preview from '../Components/Preview'
import { useEffect, useState } from 'react'
import { getResumeAPI } from '../services/AllAPI'
import { IoMdDownload } from "react-icons/io";
import { IoIosRefresh } from "react-icons/io";
import Edit from '../Components/Edit';
import { FaBackward } from "react-icons/fa";

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
      <div className="col-md-12 ">
        <div className='d-flex justify-content-center align-items-center mb-3 gap-4'>
          <Link className='btn btn-' to={'/resume'}><FaBackward /></Link>
          <Edit resumeData={resume} setResumeData={setResume}/>
          <Link className='btn btn-primary' to={'/history'}><IoIosRefresh/></Link>
          <button className='btn btn-success'><IoMdDownload/></button>
        </div>
      <div >
        <Preview resumeData={resume} />
      </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default ViewResume