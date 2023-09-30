import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext'

const FirstShop = () => {
  const [lang] = useContext(LangContext)
  return (
    <div className='firstshop'>
      
        <div className="imagemenu">
          {lang === "en" ? (
            <>
      <h1>Soul Kitchen in <br /> Your Fridge</h1>
        <p className='mt-5'>Our asian specialities from Ramen to Miso Beef are prepared in <br />
         our kitchen with only the best ingredients and filled into <br />
         containers. They can be stored in the fridge for up to 3 months.</p>     
         <button className='btn mt-3' >GO TO SHOP</button>
         </>
          ) : (
            <>
            <h1>Soul Mətbəxi <br /> Soyuducunuzda</h1>
            <p className='mt-5'>Ramendən Miso Mal ətinə qədər Asiya spesiyalitələrimiz hazırlanır <br />
            mətbəximiz yalnız ən yaxşı inqrediyentlərlə doludur <br />
            konteynerlər. Onlar soyuducuda 3 aya qədər saxlanıla bilər.</p>     
             <button className='btn mt-3' >{lang === "en" ? "GO TO SHOP" : "MAĞAZAYA KEÇİN"}</button>
             </>
          )}
      
         </div>   
   
    </div>
  )
}

export default FirstShop