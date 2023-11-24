import React, { useState } from 'react'
import "./form.css"
function BookingForm() {
  const [inputData ,setinput] = useState({
    fullname:"",
    email:"",
    checkIndate:"",
    checkOutdate:"",
    numOfVisitors:1,
    expectations:""
  })
function   handleChange(e){
 setinput(e.target.value);

}
function handleSubmit(e){
  setinput({...inputData,
    [e.target.name]:e.target.value}

    )
alert(" form submitted succesfully")
console.log(inputData);

}


  return (
    <>
    <h1>Booking Form</h1>
    <form onSubmit={handleSubmit}
    >
    <label htmlFor=""style={{marginRight:"65px"}}>
      full Name
      <input 
      type="text" 
      name='full name'
      placeholder='input your full name'
      value={inputData.fullname}
      onChange={handleChange}
      required
      />
    </label>
    
    <label htmlFor="">
      email
      <input 
      type="text"
      name='email'
      placeholder='input email...'
      value={inputData.email} 
      onChange={handleChange}
      required
      />
    </label>
    <br></br>
    <label htmlFor=""style={{marginRight:"100px"}}>
      check in date
      <input 
      type="date"
      name='check in date'
      
      value={inputData.checkIndate}
      onChange={handleChange}
      required 
      />
    </label>
    <label htmlFor="">
      check out date
      <input 
      type="date"
      name='check in date'
      value={inputData.checkOutdate}
      onChange={handleChange}
      required
       />
    </label>
    <br />
    <label htmlFor=""style={{marginRight:"150px"}}>
      number of visitors
      <input 
      type="number"
      name='number of visitors'
      value={inputData.numOfVisitors}
      onChange={handleChange}
      min={1}
      max={10}
      required
       />
    </label>
    <label htmlFor=""style={{marginRight:"20px"}}>
      expectations
      <input 
      type="text" 
      name='expectations'
      placeholder='write what you expect to be in your BnB'
      value={inputData.expectations}
      onChange={handleChange}
      required
      />
    </label>
    <br />
    <button>submit form</button>

    </form>
    
    </>
  )
}

export default BookingForm