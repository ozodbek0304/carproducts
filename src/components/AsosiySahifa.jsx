import React from 'react'
import { Link } from 'react-router-dom'
import chevrolet from "../assets/Rectangle 13.png";
import lada from "../assets/Rectangle 1972.png";
import lamborgini from "../assets/Rectangle 74.png";
import ferarri from "../assets/Rectangle 1971.png";

const AsosiySahifa = () => {
  return (
    <div className='bg-white'>
  <div className="container min-vh-100">
    <div className='d-flex justify-content-between pt-5 pb-5'>
      <div className='d-flex gap-2 mt-5'>
        <Link to="/asosiysayt" className='text-reset text-decoration-none fs-5'>Bosh Sahifa</Link>
        <label><i className="fa-solid fa-greater-than py-2"></i></label>
        <Link  to="/asosiysayt" className='text-reset text-decoration-none fs-5'>Modellari</Link>
      </div>
    <div>
    <Link to="/" className="btn btn-primary d-block p-2 px-3">
            <i className="fa-regular fa-user px-1"></i> Admin Qo'shish
            </Link>
    </div>
    </div>
    <h1>Modellari</h1>
    <div className='d-flex justify-content-between py-5'>
    <div>
   <Link to="/products" ><img src={chevrolet} alt="" /></Link>
    <h4 className='mx-5'>CHEVROLET</h4>
    </div>
    <div>
      <Link to="/products"><img src={lada} alt="" /></Link>
    <h4 className='mx-5 px-5'>LADA</h4>
    </div>
   <div>
    <Link to="/products"><img src={lamborgini} alt="" /></Link>
    <h4 className='mx-5'>LAMBORGHINI</h4>
   </div>
  <div>
    <Link to="/products"><img src={ferarri} alt="" /></Link>
    <h4 className='mx-5 px-5'>FERRARI</h4>
  </div>
    </div>
  </div>
    </div>
  )
}

export default AsosiySahifa
