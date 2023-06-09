import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "../Styles/AddMashina.css";

const AddMashina = () => {
  const navigaton=useNavigate();
 const handleClick=()=>{
  navigaton("/adminpanel")
 }

  return (
    <div className='bg-dark-subtle'>
    <div className="container  d-flex align-items-center justify-content-between min-vh-100 ">
    <form  onSubmit={handleClick} className='form-control w-100 p-5 border bg-white shadow rounded  '>
     <div className="d-flex justify-content-between">
     <div className='d-flex gap-3'>
            <span className='iconka1'></span>
        <h4>Mashina qo'shish</h4>
        </div>
        <Link className='text-reset text-decoration-none' to="/adminpanel"><i className="fa-solid fa-xmark "></i></Link>
     </div>
      <div className="d-flex gap-3 w-100 py-3">
      <div className='w-100'>
            <label className='form-label' htmlFor="mashina">Markasi</label>
            <input required className='form-control bg-body-tertiary'  type="text" name="mashina" id="mashina" placeholder='Kiriting' />
          </div>
          <div className='w-100'>
            <label className='form-label' htmlFor="rasm">Rasm 360 ichki makon</label>
            <input required className='form-control bg-body-tertiary ' type="text" name="rasm" id="rasm" placeholder='Yuklash' />
          </div>
      </div>
      <div className='d-flex btncontainer'>
      <button  className="btn btn-primary d-block px-5">Saqlash</button>
      </div>
        </form>
    </div>
    </div>
  )
}

export default AddMashina
