import React from 'react'
import {useContext} from "react"
import { ProductContext } from '../context/ProductContext';
import SingleCard from '../components/SingleCard';

const Third:React.FC = () => {
    const [productitem] = useContext(ProductContext);
  return (
    <div className='third'>
        <div className="container g-0">
          <div  className="row">
         
        {productitem.slice(3,6).map((item:any)=>{
            return <SingleCard 
            desc={item.desc} 
            price={item.price} 
            title={item.title} 
            img={item.img} 
             url={item.id} 
             key={item.id}/> 
       
          
        })}
    </div>
    </div>
    
         </div>
  )
}

export default Third