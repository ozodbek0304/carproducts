import { Routes, Route } from "react-router-dom"
import AddMashina from "./Pages/AddMashina"
import AdminPanel from "./components/AdminPanel"
import AddCategory from "./Pages/AddCategory"
import Login from "./Pages/Login"
import Registratsiya from "./Pages/Registratsiya"
import AsosiySahifa from "./components/AsosiySahifa"
import Products from "./components/Products"
import ProductsSingle from "./components/ProductsSingle"

function App() {
  return (
    <Routes>
     <Route path="/"  element={<Login/>}/>
     <Route path="/registratsiya" element={<Registratsiya/>}/>
    <Route path="/adminpanel" element={<AdminPanel/>} />
    <Route path="/addmashina" element={ <AddMashina/>} />
    <Route path="/addcategory" element={<AddCategory/>}/>
    <Route path="/asosiysayt" element={<AsosiySahifa/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/productssingle" element={<ProductsSingle/>}/>
   </Routes>
  )
}

export default App
