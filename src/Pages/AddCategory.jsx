import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "../Styles/AddMashina.css"

const AddCategory = () => {
  const navigaton=useNavigate();
  const handleClick=()=>{
   navigaton("/adminpanel")
  }
  return (
    <>
      <div className="container mt-5 d-flex align-items-center justify-content-between min-vh-100 ">
      <form onSubmit={handleClick} className='form-control mb-4  w-100 p-5 border bg-white shadow rounded ' >
      <div className="d-flex justify-content-between pb-4">
     <div className='d-flex gap-3'>
            <span className='iconka1'></span>
        <h4>Mashina qo'shish</h4>
        </div>
        <Link className='text-reset text-decoration-none' to="/adminpanel"><i className="fa-solid fa-xmark"></i></Link>
     </div>
     <div className="d-flex justify-content-between gap-5">
     <div className="d-flex flex-column w-100">
      <label htmlFor="markasi" className='form-label'>Markasi</label>
      <input className='form-control mb-4 bg-body-tertiary ' type="text" name='markasi' id='markasi' placeholder='CHEVROLET' />
      <label htmlFor="motor" className='form-label'>Motor</label>
      <input className='form-control mb-4 bg-body-tertiary ' type="text" name='motor' id='motor' placeholder='Kiriting' />
      <label htmlFor="color" className='form-label'>Color</label>
      <input className='form-control mb-4 bg-body-tertiary ' type="text" name='color' id='color' placeholder='Kiriting' />
      <label htmlFor="gearbook" className='form-label'>Gearbook</label>
      <input className='form-control mb-4 bg-body-tertiary ' type="text" name='gearbook' id='gearbook' placeholder='Kiriting' />
      <label htmlFor="rasm" className='form-label'>Rasm 360 ichki makon</label>
      <input className='form-control mb-4 bg-body-tertiary ' type="text" name='rasm' id='rasm' placeholder='Kiriting' />
      <label htmlFor="deseription" className='form-label'>Deseription</label>
      <input className='form-control mb-4 bg-body-tertiary deserption pb-5 ' type="text" name='deseription' id='deseription' placeholder='Mazmuni kiritng' />
     </div>
     <div className="d-flex flex-column w-100 ">
      <label htmlFor="tanirovka" className='form-label'>Tanirovkasi</label>
      <input className='form-control mb-4 bg-body-tertiary ' type="text" name='tanirovka' id='tanirovka' placeholder='Yoq' />
      <label htmlFor="year" className='form-label'>Year</label>
      <input className='form-control mb-4 bg-body-tertiary ' type="data" name='year' id='year' placeholder='Kiriting' />
      <label htmlFor="distance" className='form-label'>Distance</label>
      <input className='form-control mb-4 bg-body-tertiary ' type="text" name='distance' id='distance' placeholder='Kiriting' />
      <label htmlFor="narxi" className='form-label'>Narxi</label>
      <input className='form-control mb-4 bg-body-tertiary ' type="text" name='narxi' id='narxi' placeholder='Kiriting' />
      <label htmlFor="rasm1" className='form-label'>Rasm 360 tashqi makon</label>
      <input className='form-control mb-4 bg-body-tertiary ' type="text" name='rasm1' id='rasm1' placeholder='Yuklash' />
      <label htmlFor="rasm2" className='form-label'>Modeli turi uchun rasm</label>
      <input className='form-control mb-4 bg-body-tertiary  ' type="text" name='rasm2' id='rasm2' placeholder='Yuklash' />
     </div>
     </div>
     <div className='d-flex btncontainer'>
      <button  className="btn btn-primary d-block px-5">Saqlash</button>
      </div>
      </form>
     </div>
    </>
  )
}

export default AddCategory
