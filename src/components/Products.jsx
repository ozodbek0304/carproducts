import React from 'react'
import { Link } from 'react-router-dom'
import chevrolet from "../assets/Rectangle 13.png";
import lada from "../assets/Rectangle 1972.png";
import lamborgini from "../assets/Rectangle 74.png";
import ferarri from "../assets/Rectangle 1971.png";


const Products = () => {
  return (
    <div className='bg-white'>
    <div className="container min-vh-100">
      <div className='d-flex justify-content-between pt-5 pb-5'>
        <div className='d-flex gap-2 mt-5'>
          <Link to="/asosiysayt" className='text-reset text-decoration-none fs-5'>Bosh Sahifa</Link>
          <label><i className="fa-solid fa-greater-than py-2"></i></label>
          <Link  to="/asosiysayt" className='text-reset text-decoration-none fs-5'>Modellari</Link>
          <label><i className="fa-solid fa-greater-than py-2"></i></label>
          <Link  to="/asosiysayt" className='text-reset text-decoration-none fs-5'>Chevrolet turlari</Link>
        </div>
      <div>
      <Link to="/" className="btn btn-primary d-block p-2 px-3">
              <i className="fa-regular fa-user px-1"></i> Admin Qo'shish
              </Link>
      </div>
      </div>
      <h1>Modellar turlari</h1>
    <div className='d-flex flex-column'>
    <div className='d-flex justify-content-between gap-5 py-5'>
      <div>
     <Link to="/productssingle" >  <img src={chevrolet} alt="" /> </Link>
      <div className='d-flex gap-3 mx-2 fs-5'>
        <Link>
        <i className="fa-solid fa-cart-plus "></i>
        </Link> 
        <Link>
        <i className="fa-solid fa-heart text-danger"></i>
        </Link>
        </div>
      <h4 className='mx-2'>CHEVROLET MALIBU</h4>
      <h5 className='mx-2'>Narxi : 329 900 000</h5>
      </div>
      <div>
        <Link to="/productssingle"> 
      <img src={lada} alt="" />
         </Link>
      <div className='d-flex gap-3 mx-4 fs-5'>
        <Link>
        <i className="fa-solid fa-cart-plus "></i>
        </Link> 
        <Link>
        <i className="fa-solid fa-heart text-danger"></i>
        </Link>
        </div>
        
      <h4 className='mx-4'>CHEVROLET MALIBU</h4>
      <h5 className='mx-4'>Narxi : 329 900 000</h5>
      </div>
     <div>
        <Link to="/productssingle">
     <img src={lamborgini} alt="" />
        </Link>
     <div className='d-flex gap-3 mx-4 fs-5'>
        <Link>
        <i className="fa-solid fa-cart-plus "></i>
        </Link> 
        <Link>
        <i className="fa-solid fa-heart text-danger"></i>
        </Link>
        </div>
      <h4 className='mx-4'>CHEVROLET MALIBU</h4>
      <h5 className='mx-4'>Narxi : 329 900 000</h5>

     </div>
    <div>
        <Link to="/productssingle">
    <img src={ferarri} alt="" />
        </Link>
    <div className='d-flex gap-3 mx-4 fs-5'>
        <Link>
        <i className="fa-solid fa-cart-plus "></i>
        </Link> 
        <Link>
        <i className="fa-solid fa-heart text-danger"></i>
        </Link>
        </div>
      <h4 className='mx-4'>CHEVROLET MALIBU</h4>
      <h5 className='mx-4'>Narxi : 329 900 000</h5>

    </div>
      </div>
      <div className='d-flex justify-content-between gap-5 py-5'>
      <div>
        <Link to="productssingle">
      <img src={chevrolet} alt="" />
        </Link>
      <div className='d-flex gap-3 mx-2 fs-5'>
        <Link>
        <i className="fa-solid fa-cart-plus "></i>
        </Link> 
        <Link>
        <i className="fa-solid fa-heart text-danger"></i>
        </Link>
        </div>
      <h4 className='mx-2'>CHEVROLET MALIBU</h4>
      <h5 className='mx-2'>Narxi : 329 900 000</h5>
      </div>
      <div>
        <Link to="/productssingle">
      <img src={lada} alt="" />
        </Link>
      <div className='d-flex gap-3 mx-4 fs-5'>
        <Link>
        <i className="fa-solid fa-cart-plus "></i>
        </Link> 
        <Link>
        <i className="fa-solid fa-heart text-danger"></i>
        </Link>
        </div>
      <h4 className='mx-4'>CHEVROLET MALIBU</h4>
      <h5 className='mx-4'>Narxi : 329 900 000</h5>
      </div>
     <div>
        <Link to="/productssingle">
     <img src={lamborgini} alt="" />
        </Link>
     <div className='d-flex gap-3 mx-4 fs-5'>
        <Link>
        <i className="fa-solid fa-cart-plus "></i>
        </Link> 
        <Link>
        <i className="fa-solid fa-heart text-danger"></i>
        </Link>
        </div>
      <h4 className='mx-4'>CHEVROLET MALIBU</h4>
      <h5 className='mx-4'>Narxi : 329 900 000</h5>

     </div>
    <div>
        <Link to="/productssingle">
    <img src={ferarri} alt="" />
        </Link>
    <div className='d-flex gap-3 mx-4 fs-5'>
        <Link>
        <i className="fa-solid fa-cart-plus "></i>
        </Link> 
        <Link>
        <i className="fa-solid fa-heart text-danger"></i>
        </Link>
        </div>  
      <h4 className='mx-4'>CHEVROLET MALIBU</h4>
      <h5 className='mx-4'>Narxi : 329 900 000</h5>

    </div>
      </div>
    </div>
    </div>
      </div>
  )
}

export default Products
