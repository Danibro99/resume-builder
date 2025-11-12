import React from 'react'
import { Link} from 'react-router-dom';

function LandingPage() {
  return (
     <div >
      <div className="p-0 m-0 d-flex justify-content-center align-items-center" style={{minHeight: "100vh", fontFamily: "Poppins, sans-serif",backgroundImage:"url('/bg1.png')",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"}}>
      <div className="card shadow-lg rounded text-center" style={{backgroundColor:"rgba(255,255,255,0.5)",maxWidth:"500px"}}>
      <div className="card-body p-5">
      <h2 className="fw-semibold mb-3">Designed to get hired.</h2>
      <p className="fs-5 mb-4">Your skills, your story, your next job — all in one.</p>
     <Link className='btn border' to={'/resume'} style={{backgroundColor:"yellowgreen"}}> Make Your Resume</Link>
    </div>
      </div>
      </div>
      <h1 className='text-center my-5'>Tools</h1>
      <div className="d-flex justify-content-between align-items-center px-5" style={{height:"85vh",width:"100%"}}>
        <div>
          <h3 >Resume</h3>
          <p>Create unlimited new resumes and easily edit them afterwards.</p>
          <h3>Cover Letters</h3>
          <p>Easily write professional cover letters.</p>
          <h3>Jobs</h3>
          <p>Automatically receive new and relevant job postings.</p>
          <h3>Applications</h3>
          <p>Effortlessly manage and track your job applications in an organized manner.</p>
        </div>
        <div style={{width:"60vh",margin:"50px"}} ><img style={{height:"100%",width:"100%"}} src="bg2.png" alt="" /></div>
      </div>
      <div style={{backgroundImage:"url('/bg3.jpg')",width:"100%",backgroundSize:"cover",height:"70vh",backgroundPosition:"center",backgroundAttachment:"fixed"}} className='my-5'>
      </div>
      <h1 className='text-center fs-'>Testimony</h1>
      <div className="d-flex justify-content-evenly my-5" style={{marginBottom:"50px"}}>
        <div className="w-50">
          <h2 className='my-4'>Trusted by professionals worldwide.</h2> 
          <p className='fs-5 my-1'>At CareerCraft, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
          <br />
          <p className='fs-5 my-1'>In fact, users who used CareerCraft reported getting hired an average of 48 days faster.</p>
          <br />
          <p className='fs-5 my-2'>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className='justify-content-center my-5' style={{width:"40%"}}>
            <div className="row g-3">
              <div className="col-3">
                <img src="grid1.png" className='img-fluid' style={{objectFit:"cover",width:"120px",height:"120px"}} alt="grid" />
              </div>
              <div className="col-3">
                <img src="grid12.jpg" className='img-fluid' style={{objectFit:"cover",width:"120px",height:"120px"}} alt="grid" />
              </div>
              <div className="col-3">
                <img src="grid10.jpg" className='img-fluid' style={{objectFit:"cover",width:"120px",height:"120px"}} alt="grid" />
              </div>
              <div className="col-3">
                <img src="grid9.jpg" className='img-fluid' style={{objectFit:"cover",width:"120px",height:"120px"}} alt="grid" />   
              </div>
              <div className="col-3">
                <img src="grid8.jpg" className='img-fluid' style={{objectFit:"cover",width:"120px",height:"120px"}} alt="grid" />
              </div>
              <div className="col-3">
                <img src="grid7.png" className='img-fluid' style={{objectFit:"cover",width:"120px",height:"120px"}} alt="grid" />
              </div>
              <div className="col-3">
                <img src="grid6.jpg" className='img-fluid' style={{objectFit:"cover",width:"120px",height:"120px"}} alt="grid" />
              </div>
              <div className="col-3">
                <img src="grid5.jpg" className='img-fluid' style={{objectFit:"cover",width:"120px",height:"120px"}} alt="grid" />
              </div>
              <div className="col-3">
                <img src="grid3.png" className='img-fluid' style={{objectFit:"cover",width:"120px",height:"120px"}} alt="grid" />
              </div>
              <div className="col-3">
                <img src="grid4.jpg" className='img-fluid' style={{objectFit:"cover",width:"120px",height:"120px"}} alt="grid" />
              </div>
              <div className="col-3">
                <img src="grid2.png" className='img-fluid' style={{objectFit:"cover",width:"120px",height:"120px"}} alt="grid" />
              </div>
              <div className="col-3">
                <img src="grid11.png" className='img-fluid' style={{objectFit:"cover",width:"120px",height:"120px"}} alt="grid" />
              </div>
            </div>
        </div>
          </div>
     </div>
  )
}

export default LandingPage