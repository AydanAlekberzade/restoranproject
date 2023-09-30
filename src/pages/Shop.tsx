import React from 'react'
import FirstShop from '../shop/FirstShop'
import SecondShop from '../shop/SecondShop'
import Third from '../shop/Third'
import FourShop from '../shop/FourShop'
import FiveShop from '../shop/FiveShop'
import SixShop from '../shop/SixShop'
// import Example from '../shop/Example'
const scrollToTop = () => {
  window.scrollTo({
  top: 0,
  behavior: "smooth"
  });
  };
  
const Shop = () => {
  return (
    <div>

      <FirstShop />
      <SecondShop />
      <Third />
      <FiveShop />
      <FourShop />
    
      <SixShop/>
      {/* <Example /> */}
      <div className="butonumdu">
    <button  className="topbutonn" id="btn"  onClick={scrollToTop}> <i className="fa-solid fa-up-long"></i> </button>
    </div>
    </div>
  )
}

export default Shop