import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/AdminPanel.css"
const AdminPanel = () => {
    const mashina=[
        { 
          id:1,
          markasi:"CHEVROLET",
          gearbook:"Avtomat karboka",
          tanirovkasi:"Yoq",
          motor:1.6,
          year:2016,
          color:"Oq",
          distance:"300km"
        },
        { 
            id:2,
            markasi:"CHEVROLET",
            gearbook:"Avtomat karboka",
            tanirovkasi:"Yoq",
            motor:1.6,
            year:2016,
            color:"Oq",
            distance:"300km"
          },
          { 
            id:3,
            markasi:"CHEVROLET",
            gearbook:"Avtomat karboka",
            tanirovkasi:"Yoq",
            motor:1.6,
            year:2016,
            color:"Oq",
            distance:"300km"
          },
          { 
            id:4,
            markasi:"CHEVROLET",
            gearbook:"Avtomat karboka",
            tanirovkasi:"Yoq",
            motor:1.6,
            year:2016,
            color:"Oq",
            distance:"300km"
          },
          { 
            id:5,
            markasi:"CHEVROLET",
            gearbook:"Avtomat karboka",
            tanirovkasi:"Yoq",
            motor:1.6,
            year:2016,
            color:"Oq",
            distance:"300km"
          },
          { 
            id:6,
            markasi:"CHEVROLET",
            gearbook:"Avtomat karboka",
            tanirovkasi:"Yoq",
            motor:1.6,
            year:2016,
            color:"Oq",
            distance:"300km"
          }
        
    ]
  const mashinaItems= mashina.map((item, index)=>{
    return(
        <tr key={index} >
        <th className='py-4'>{index+1}.</th>
        <th className='py-4'>{item.markasi}</th>
        <th className='py-4'>{item.gearbook}</th>
        <th className='py-4'>{item.tanirovkasi}</th>
        <th className='py-4'>{item.motor}</th>
        <th className='py-4'>{item.year}</th>
        <th className='py-4'>{item.color}</th>
        <th className='py-4'>{item.distance} <i className="fa-solid fa-arrow-right px-4"></i></th>
    </tr>
    )
        })

  return (
    <>
   <header>
    <div className="container">
        <nav className='d-flex justify-content-between py-3'>
            <Link to="/" className="btn btn-primary d-block p-2 px-3">
            <i className="fa-regular fa-user px-1"></i> Asosiyga qaytish
            </Link>
      <div className='d-flex gap-4'>
      <label><i className="fa-regular fa-bell fs-4 pt-1"></i></label>
     <Link to="/" >

      <i className="fa-regular fa-circle-user fs-1"></i></Link>
      </div>
        </nav>
    </div>
   </header>
    <div className="container p-4  rounded shadow containerTable">
       <div className='d-flex justify-content-between mb-5'>
       <div className="d-flex gap-2">
       <span className='iconka '></span>
       <h3> Mashinalar</h3>
       </div>
       <div className='d-flex gap-3'>
   <Link to="/addcategory" className="btn btn-primary d-block ">+ Kategoriya qo'shish</Link>
   <Link  to="/addmashina" className="btn btn-primary d-block "
     >+ Mashina qo'shish</Link>
       </div>
       </div>
       <table className='table text-center'>
     <thead>
        <tr>
            <td>#</td>
            <td>Markasi</td>
            <td>Gearbook</td>
            <td>Tanirovkasi</td>
            <td>Motor</td>
            <td>Year</td>
            <td>Color</td>
            <td>Distance</td>
        </tr>
     </thead>
     <tbody>
    {
      mashinaItems
    }
     </tbody>
       </table>
    </div>
    </>
  )
}

export default AdminPanel
