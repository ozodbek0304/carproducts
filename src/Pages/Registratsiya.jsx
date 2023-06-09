import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Registratsiya = () => {
  const navgation=useNavigate();
  const[values, setValues]=useState({email:"", password:""});
 
  useEffect(()=>{
    let token=localStorage.getItem("token");
  
      if (token) navgation("/asosiysayt")
   
    },[])
  function handleInputChange(e){
    setValues(item=>({...item, [e.target.name]:e.target.value}))
  }
 async  function handleClick(e){
  e.preventDefault()

  try {
      
    let res = await axios.post("https://reqres.in/api/login", values);

    if (res.status===200 ) {
      toast("Logged success", { type: "success" });
      // localStorage.setItem("token", res.data.token);
      navgation("/asosiysayt")
    } 
  } catch (error) {
    toast(error.response.data.error,{type:"error"});
  } finally {
      setValues({ email: "", password: "" });
  } 
  

  }
  return (
    <div>
      <div className="container d-flex justify-content-center Login_container  align-items-center min-vh-100">
        <form onSubmit={handleClick} className='form-control w-50 p-5 border bg-white shadow rounded'>
          <h1 className='display-4 text-center'>Registratsiya</h1>
          <div className='mb-3'>
            <label className='form-label' htmlFor="fname">FirstName</label>
            <input required className='form-control ' type="fname" name="fname" id="name" placeholder='Your FistName' />
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor="name">LastName</label>
            <input required className='form-control ' type="name" name="name" id="name" placeholder='Your LastName' />
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor="img">Images</label>
            <input required className='form-control ' type="img" name="img" id="img" placeholder='Your Images' />
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor="email">Email address</label>
            <input value={values.email} onChange={handleInputChange} required className='form-control ' type="email" name="email" id="email" placeholder='Your Email' />
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor="password">Password</label>
            <input value={values.password} onChange={handleInputChange} required className='form-control ' type="password" name="password" id="password" placeholder='Your Password' />
          </div>
          <button  className='btn btn-primary  w-100 d-block mb-3'>Ro'yxatdan O'tish</button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Registratsiya
