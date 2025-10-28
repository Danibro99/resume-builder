import React from 'react'
import UserInput from '../Components/UserInput'
import Preview from '../Components/Preview'

function Form() {
  return (
    <div className='container-fluid'>
      <div className="row p-5">
        <div className="col lg-5"><UserInput/></div>
        <div className="col lg-5"><Preview/></div>
      </div>
    </div>
  )
}

export default Form