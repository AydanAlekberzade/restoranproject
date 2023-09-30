import React from 'react'
import { LangContext } from "../context/LangContext";
import { useContext } from "react";
const Footer = () => {
  const [lang] = useContext(LangContext)

  return (
    <div className='footer'>
   <div className="container mt-5">
    <div className="row mt-5">
        <div className="col-12 col-sm-12 col-md-3">
        {lang === "en" ? (
          <>
<h5 className='welcome'>WELCOME TO SOUL KITCHEN</h5>
<p className='mt-5'>SOUL KITCHEN, founded in 2022, is <br />
 dedicated to all those who love to <br />
  wander far and wide.</p>
  <p>We'd like to invite you on a culinary <br />
   adventure, where you’ll explore <br />
    undiscovered gourmet experiences.</p>
    </>
        ) :(
<>
<h5 className='welcome'>SOUL MƏTBƏXƏ XOŞ GƏLMİSİZ</h5>
<p className='mt-5'>2022-ci ildə əsası qoyulan SOUL KITCHEN<br />
sevən hər kəsə həsr olunub<br />
uzaq və geniş gəzmək.</p>
  <p>Sizi kulinariyaya dəvət etmək istərdik<br />
  macəra, kəşf edəcəyiniz yer<br />
  kəşf edilməmiş gurme təcrübələri.</p>
</>
        )}
        </div>

        <div className="col-12 col-sm-12 col-md-3">
       <div className="visitpart">
       {lang === "en" ? (
        <>
       <h1>VISIT</h1>
        <p><i className="fa-solid fa-location-dot"></i> 317 Pacific C Hwy</p>
        <p>Huntington, CA 92648</p>
        <h1 className='mt-3'>TALK</h1>
        <p><i className="fa-solid fa-mobile-screen-button"></i>123.456-7</p>
        <h1 className='mt-3'>WRITE</h1>
        <p><i className="fa-regular fa-envelope"></i> eat@soulkitchen.com</p>
        </>
       ) : (
        <>
        <h1>ZİYARƏT</h1>
        <p><i className="fa-solid fa-location-dot"></i> 317 Pacific C Hwy</p>
        <p>Huntington, CA 92648</p>
        <h1 className='mt-3'>ƏLAQƏ</h1>
        <p><i className="fa-solid fa-mobile-screen-button"></i>123.456-7</p>
        <h1 className='mt-3'>YAZMAQ</h1>
        <p><i className="fa-regular fa-envelope"></i> eat@soulkitchen.com</p>
        </>
       )}
       </div>
        </div>


        <div className="col-12 col-sm-12 col-md-3">
           <div className="reservations">
            {lang === "en" ? (
              <>
           <h1>RESERVATIONS</h1>
            <button className='btn mt-2'>BOOK YOUR TABLE</button>
            <h1 className='mt-3'>HOURS</h1>
            <p>MONDAY thru FRIDAY</p>
            <p>11am - 9pm</p>
            <p>SATURDAY/SUNDAY</p>
            <p>10am - 11pm</p>
            </>
            ) : (
              <>
              <h1>REZERVASIYALAR</h1>
              <button className='btn mt-2'>MASANI REZERVASIYA EDİN</button>
              <h1 className='mt-3'>SAATLAR</h1>
              <p>Bazar ertəsindən Cümə gününə qədər</p>
              <p>11:00 - 21:00</p>
              <p>ŞƏNBƏ/BAZAR</p>
              <p>10:00 - 11:00</p>
              </>
            )}
           </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3">
          <div className="about">
            {lang === "en" ? (
              <>
          <h1>ABOUT</h1>
            <ul className=' text-center mt-3'>
                <li>FAQ</li>
                <li className='mt-1'>Reservation Policy</li>
                <li className='mt-1'>Privacy Policy</li>
                <li className='mt-1'>Health & Safety</li>
            </ul>
            <h1 className='mt-4' style={{fontSize:"17px"}}>FAQ</h1> 
            </>
            ) : (
<>
              <h1>HAQQINDA</h1>
              <ul className=' text-center mt-3'>
                  <li>Tez-tez verilən suallar</li>
                  <li className='mt-1'>Rezervasiya Siyasəti</li>
                  <li className='mt-1'>Gizlilik Siyasəti</li>
                  <li className='mt-1'>Sağlamlıq və Təhlükəsizlik</li>
              </ul>
              <h1 className='mt-4' style={{fontSize:"17px"}}>İZLƏYİN</h1>   
              
              </>
            )}
       
         
           
            <div className="socials mt-5">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
            </div>
            </div>
    </div>
   </div>

    </div>
  )
}

export default Footer