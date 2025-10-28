import React from 'react'
import { Link } from 'react-router-dom'
function Pnf() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column" 
         style={{
           minHeight: "100vh",
           backgroundColor: "#f5f5f5",
           fontFamily: "Poppins, sans-serif"
         }}>
      <h1 style={{fontSize: "120px", color: "#333"}}>404</h1>
      <h2 className="mb-4" style={{color: "#666"}}>Page Not Found</h2>
      <p className="text-center mb-4" style={{maxWidth: "500px", color: "#777"}}>
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="btn px-4 py-2"
        style={{
          backgroundColor: "yellowgreen",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}>
        Back to Home
      </Link>
    </div>
  )
}

export default Pnf