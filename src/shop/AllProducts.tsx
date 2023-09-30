import React, { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductsCard from "../components/ProductsCard";
import Search from "./Search";
import Filter from "./Filter";
import { toast } from "react-toastify";

const AllProducts = () => {
  const [productitem] = useContext(ProductContext);

  useEffect(()=>{
    console.log(productitem);
    
  },[])

  const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
    };


  return (
    <div className="allproducts">
      <div className="mysoulimage ">

  <img className="mt-5"  src="https://soulkitchen.bg/wp-content/uploads/2019/10/SK_logo_light_full.png" alt="" />
      </div>

      <div className="searchpart">
       <Search />
       <Filter />
      </div>
      <div className="row g-0 mt-5">
        
        {productitem.map((item:any, index:any) => {
          return (
            
            <ProductsCard
            key={item.id}
              alldata={item}
              desc={item.desc}
              price={item.price}
              img={item.img}
              title={item.title}
              url={item.id}
              allItem={item}
            />
          );
        })}

  
      </div>
     
     <button className="topbutonn" id="btn"  onClick={scrollToTop}> <i className="fa-solid fa-up-long"></i> </button>
 
    </div>
  );
};

export default AllProducts;
