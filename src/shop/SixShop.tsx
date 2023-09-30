import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext'

const SixShop = () => {
  const [lang] = useContext(LangContext)
  return (
    <div className='sixshop'>
        <div className="mycon ">
      
<h2 className='text-center'> {lang === "en" ? "Keep Up to Date with Soul Kitchen" : "Soul Mətbəx ilə yeniliklərdən xəbərdar olun"}</h2>
<p className='text-center'>{lang === "en" ? "Sign up to be the first to receive special news and event updates from SoulKitchen. " : "SoulKitchen-dən xüsusi xəbərləri və hadisə yeniləmələrini ilk əldə etmək üçün qeydiyyatdan keçin."}</p>
     <div className="butontip text-center mt-3">
        <button  className='btn'> {lang === "en" ? "Enter Email" : "E-poçtu daxil edin"}</button>
        <button style={{backgroundColor:"white", color:"gray"}} className='btn'> {lang === "en" ? "SIGN UP" : "ABUNƏ OLUN"}</button>

 
 
     </div>
        </div>
    </div>
  )
}

export default SixShop