import { Link, useParams } from 'react-router-dom'
import Preview from '../Components/Preview'
import { useEffect, useState } from 'react'
import { addHistoryAPI, getResumeAPI } from '../services/AllAPI'
import { IoMdDownload } from "react-icons/io";
import Edit from '../Components/Edit';
import { GrFormNext } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

function ViewResume() {
  const {id}=useParams()
  console.log(id);
  const [resume,setResume]=useState({})

  useEffect(()=>{
    getResumeDetails()
  },[])

  const handleDownloadResume= async()=>{
    // create a pdf file
    const doc = new jsPDF();
    // screenshot preview
    const preview=document.getElementById('preview')
    const canvas=await html2canvas(preview,{scale:2})
    const resumeImg=canvas.toDataURL('image/png')
    const imgWidth=doc.internal.pageSize.getWidth()
    const imgHeight=doc.internal.pageSize.getHeight()
    doc.addImage(resumeImg,"PNG",0,0,imgWidth,imgHeight)
    doc.save('resume.pdf')
    // instance for local time and date
    const localTimeData=new Date()
    //shifting to string data
    const timeStamp=`${localTimeData.toLocaleDateString()},${localTimeData.toLocaleTimeString()}`
    console.log(timeStamp)
    try{
      await addHistoryAPI({timeStamp,resumeImg})
    }catch(err){
      console.log(err);
    }
  }

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
          <Link className='btn btn-danger' to={'/resume'}><IoIosArrowBack /></Link>
          <Edit resumeData={resume} setResumeData={setResume}/>
          <button className='btn btn-primary' onClick={handleDownloadResume}><IoMdDownload/></button>
          <Link className='btn btn-success' to={'/history'}><GrFormNext/></Link>
        </div>
      <div >
        <div id="preview"><Preview resumeData={resume} /></div>
      </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default ViewResume