import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import malibu from "../assets/Rectangle 1974.png";
import malibu1 from "../assets/Rectangle 1973.png";
import malibuIchki from "../assets/Rectangle 19.png"

const ProductsSingle = () => {
  const [img, setImg]=useState([malibu1]);
  const handleImgTashqi =()=>{
    setImg(malibu1)
  }
  const handleImgIchki =()=>{
 
  setImg(malibuIchki)
  }
  return (
    <div className='bg-white'>
      <div className="container min-vh-100 pb-5">
      <div className='d-flex justify-content-between pt-5  pb-5'>
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
      <h1>Modellari</h1>
     <div className="d-flex gap-5">
     <div className='d-flex flex-column p-4 mt-5 rounded bg-body-tertiary single'>
     <h3>CHEVROLET MALIBU</h3>
     <h5>329 000 000 so'mdan</h5>
     <div className='py-3'>
     <img src={malibu} alt="" />
     </div>
     <p><strong>Marka: </strong>CHEVROLET</p>
     <p><strong>Tanirovkasi: </strong>Yoq</p>
     <p><strong>Motor: </strong>1.6</p>
     <p><strong>Year: </strong>2016</p>
     <p><strong>Color: </strong>Oq</p>
     <p><strong>Distance: </strong>300km</p>
     <p><strong>Gearbook: </strong>Avtomat karobka</p>
     <p><strong>Deseription: </strong>Mashina idael holatda 
     krasskasi top toza 100tali.Ayol kishiniki judayyam akuratno haydalgan</p>
     <hr />
     <p className='mx-4'><strong>Umumiy xarajat: </strong>329 900 000 so'mdan</p>

      </div>
    <div>
    <div className='d-flex justify-content-between w-100 mt-5'>
     <h3>CHEVROLET MALIBU</h3>
     <div className='d-flex gap-3'>
     <label className='fs-3'> <i className="fa-solid fa-tree "></i></label>
      <label className='fs-3' > <i className="fa-solid fa-house "></i></label>
     </div>
      </div>
      <div className='py-5'>
        <img src={img} alt=""/>
      </div>
      <p>Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.</p>
      <div className='d-flex justify-content-center pt-4 gap-5'>
        <div className='fs-5'>
        <input type="radio"  onChange={handleImgTashqi} /> Tashqi
        </div>
        <div className='fs-5'>
        <input type="radio"   onChange={handleImgIchki} /> Ichki makon
        </div>
      </div>
    </div>
      
     </div>
      </div>
    </div>
  )
}

export default ProductsSingle
