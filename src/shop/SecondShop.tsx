import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext'

const SecondShop = () => {
   const [lang] = useContext(LangContext)
  return (
    <div className='secondshop'>
        <div className="container">
            <div  className="row">
                <div className="col-12 col-sm-12 col-md-3">
                   <div className="minicol">
                   <i className="fa-solid fa-bicycle "></i>
                    <h5 className='mt-3'> {lang === "en" ? "We deliver to your home" : "Evinizə çatdırırıq  "}</h5>
                    <p> {lang === "en" ? "Order on-demand or schedule" : "Tələb və ya cədvəl üzrə sifariş edin"} <br />
                    {lang === "en" ? "delivery up to a week in advance." : "bir həftə əvvələ qədər çatdırılma."}            </p>
                   </div>
                </div>
                
                <div className="col-12 col-sm-12 col-md-3">
                   <div className="minicol">
                   <i className="fa-regular fa-heart"></i>
                    <h5 className='mt-3'> {lang === "en" ? "Made with love" : "Sevgi ilə hazırlanmışdır  "}</h5>
                    <p> {lang === "en" ? "Taste the difference." : "Fərqi dadın.  "} </p>
                   </div>
                </div>

                <div className="col-12 col-sm-12 col-md-3">
                   <div className="minicol">
                   <i className="fa-solid fa-seedling"></i>
                    <h5 className='mt-3'> {lang === "en" ? "From farm to fork" : "Fermadan çəngəyə "}</h5>
                    <p> {lang === "en" ? "An exceptional meal experience " : "Müstəsna yemək təcrübəsi "} <br />
                      {lang === "en" ? "starts with only the best ingredients." : "yalnız ən yaxşı maddələrlə başlayır. "}</p>
                   </div>
                </div>

                <div className="col-12 col-sm-12 col-md-3">
                   <div className="minicol">
                   <i className="fa-solid fa-anchor"></i>
                    <h5 className='mt-3'> {lang === "en" ? "High quality seafood, no less" : "Yüksək keyfiyyətli dəniz məhsulları, heç də az deyil "}</h5>
                    <p>{lang === "en" ? "Experience the best, seasonal " : "Ən yaxşı, mövsümi təcrübə edin "} <br /> 
                    {lang === "en" ? "seafood in your home " : "evinizdə dəniz məhsulları"} </p>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondShop