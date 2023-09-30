import React from 'react'
const scrollToTop = () => {
  window.scrollTo({
  top: 0,
  behavior: "smooth"
  });
  };

const NewPart = () => {
  return (
    <>
    <div className="sondu">
    <div className='newpart'>
        
    </div>   
    
    <div className="butonumdu">
    <button  className="topbutonn" id="btn"  onClick={scrollToTop}> <i className="fa-solid fa-up-long"></i> </button>
    </div>
    </div>
    </>
 
    
  )
}

export default NewPart