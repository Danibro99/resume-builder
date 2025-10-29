import React from 'react'
import { Link } from 'react-router-dom'
function Pnf() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-white px-3">
      <div className="text-center mx-auto" style={{ maxWidth: "415px" }}>
        <div className="mb-4">
          <div className="mx-auto d-flex justify-content-center align-items-center" style={{ height: "160px", width: "312px", position: "relative" }}>
            <img src="image.webp" fill alt="404" />
          </div>
        </div>

        <h3 className="fw-bold" style={{ fontSize: "56px", lineHeight: "64px", color: "#1A1C16" }}>
          Page Not Found
        </h3>

        <p className="mt-3">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>

        <Link to="/" className="btn text-white mt-3 rounded-4" style={{ backgroundColor: "#8AC732" }}>
          Home Page
        </Link>
      </div>
    </div>
  );
}

export default Pnf