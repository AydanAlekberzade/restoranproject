import React from 'react'
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import SecondSingleCard from '../components/SecondSingleCard';
import { Link } from 'react-router-dom';
import { LangContext } from '../context/LangContext';


const FourShop = () => {
    const [productitem] = useContext(ProductContext);
    const[lang] =useContext(LangContext)
  return (
    <section className='fourshop '>
      <div className="text-center mt-5">
      <p> { lang === "en" ? "DISCOVER OUR" : "BİZİ KƏŞF EDİN"}</p>
        <h1> {lang === "en" ? "New Products" : "Yeni məhsullar"}</h1>
        <div className="minif ">
            
        </div>
      </div>
     <div className="secondfourshop mt-5">
            <div className="row g-0">
            {productitem.slice(8,12).map((item:any)=>{
            return <SecondSingleCard
             desc={item.desc} 
             price={item.price}
              title={item.title} 
              url={item.id} 
              img={item.img}
              key={item.id} /> 
       
          
        })}
            </div>
    <Link to='/allproducts'>
    <button className=' shopall btn' > {lang === "en" ? "SHOP ALL" : "HAMISINI ALIN"}</button>
    </Link>     
        </div>
    </section>
  )
}

export default FourShop
