import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const[values, setValues]=useState({email:"", password:""});

  const navgation=useNavigate();
  
  useEffect(()=>{
  let token=localStorage.getItem("token");

    if (token) navgation("/adminpanel")
 
  },[])

  async function handleLogin(e){
    e.preventDefault()
   
    try {
        
      let res = await axios.post("https://reqres.in/api/login", values);
  
      if (res.status===200 ) {
        toast("Logged success", { type: "success" });
        localStorage.setItem("token", res.data.token);
        setValues({email:"",password:""});
        navigate("/adminpanel")
      } 
    } catch (error) {
      toast(error.response.data.error,{type:"error"});
    } finally {
        setValues({ email: "", password: "" });
    } 
    }

  function handleInputChange(e){
    setValues(item=>({...item, [e.target.name]:e.target.value}))
  }

 
  return (
    <div>
      <div className="container d-flex justify-content-center Login_container  align-items-center min-vh-100">
        <form onSubmit={handleLogin} className='form-control w-50 p-5 border bg-white shadow rounded'>
          <h1 className='display-4 text-center'>Login</h1>
          <div className='mb-3'>
            <label className='form-label' htmlFor="email">Email address</label>
            <input onChange={handleInputChange} value={values.email}  required className='form-control ' type="email" name="email" id="email" placeholder='Your Email' />
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor="password">Password</label>
            <input onChange={handleInputChange} value={values.password} required className='form-control ' type="password" name="password" id="password" placeholder='Your Password' />
          </div>
          <button disabled={!values.email||!values.password.length>4} className='btn btn-success w-100 d-block mb-3'>Kirish</button>
          <Link to="/registratsiya" className='text-decoration-none'>Ro'yxatdan O'tish</Link>
        </form>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Login
