import React, { useContext } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import ContactLogin from './ContactLogin'
import { LangContext } from '../context/LangContext';

const scrollToTop = () => {
  window.scrollTo({
  top: 0,
  behavior: "smooth"
  });
  };


const Contact = () => {
  const [lang] = useContext(LangContext)
  return (
    <div className='contact'>
      <section className='find '>
        <div className="row g-0" >
          <div className="col-12 col-sm-12 col-md-6">
            <div className="leftpart">
            <h1>{lang === "en" ? "Find Us " : "Bizi tap"} </h1>
            <h5 className='mt-3'> {lang === "en" ? "WHERE " : "HARA"}</h5>
            <p className='mt-2'>317 Pacific C HwyHuntington </p>
            <p>CA 92648</p>
            <div className="butons ">
           <button className='btn ' style={{backgroundColor:"whitesmoke", color:"gray"}}>{lang === "en" ? "VIEW MAP " : "XƏRİTƏYƏ BAXIN"}</button>
              <button className='btn ms-2'>{lang === "en" ? "BOOK A TABLE " : "MASA REZERVASIYA EDİN"}</button>
           </div>
             <div className="column mt-4">
             <h5> {lang === "en" ? "WHEN" : "NƏ VAXT"}</h5>
              <p className='mt-4'>{lang === "en" ? "Monday-Friday " : "Bazar ertəsi-Cümə"}</p>
              <p> {lang === "en" ? "11am - 10pm" : "11:00 - 10:00"}</p>
              <p>{lang === "en" ? "Saturday/Sunday " : "Şənbə/Bazar"}</p>
              <p> {lang === "en" ? "9am - 11pm" : "9:00 - 11:00"}</p>
             </div>
         
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6">
            <div className="rightpart">
              <img src="https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2022/11/soulkitchen-88-870x870.jpg" alt="" />
            </div>
            </div>
        </div>
      </section>
<section className='enquiries'>
<div className="row g-0">
  <div  className="col-12 col-sm-12 col-md-6">
 <div className="secondleft">
 <img src="https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2022/06/soulkitchen-271-870x870.jpg" alt="" />

 </div>
  </div>
  <div className="col-12 col-sm-12 col-md-6">
    <div className="secondright">
      <h1 >Enquiries</h1>
      <h5 className='mt-4'> {lang === "en" ? "PR & MARKETING ENQUIRIES" : "PR & MARKETİNQ SORGULARI"}</h5>
      <p className='mt-2'>Milo @ 0100 234 567</p>
      <h5 className='mt-3'> {lang === "en" ? "CATERING ENQUIRIES " : "KATERİNG SORAQLARI"}</h5>
      <p>Jennifer @ 0100 234 577</p>
      <h5 className='mt-4'> {lang === "en" ? "RESERVATIONS & PRIVATE DINING " : "REZERVASYONLAR VƏ ŞƏXSİ YEMƏK"}</h5>
      <p>Gwyn @ 0100 234 173</p>
    </div>
    </div>
</div>
</section>
<ContactLogin />


<section className='fours'>
  <div className="container">
    <div   className="row">
      <div className="col-12 col-sm-12 col-md-3">
            <div className="mini ">
            <i className="fa-regular fa-calendar-days "></i>
            <h6 className='mt-3'> {lang === "en" ? "Reservations" : "Rezervasiyalar"}</h6>
            <p className='mt-4'> {lang === "en" ? "Are highly recommended" : "Çox tövsiyə olunur"}</p>
            </div>
      </div>

      <div className="col-12 col-sm-12 col-md-3">
            <div className="mini ">
            <i className="fa-solid fa-car"></i>
            <h6 className='mt-3'> {lang === "en" ? "Parking" : "Parkinq"}</h6>
            <p className='mt-4'> {lang === "en" ? "Valet Parking is available" : "Valet parkinqi mövcuddur"} </p>
            </div>
      </div>
      <div className="col-12 col-sm-12 col-md-3">
            <div className="mini ">
            <i className="fa-solid fa-user-group"></i>
            <h6 className='mt-3'>  {lang === "en" ? "Dress Attire" : "Geyim Geyimi"}</h6>
            <p className='mt-4'>  {lang === "en" ? "Smart casual" : "Ağıllı təsadüfi"}</p>
            </div>
      </div>
      <div className="col-12 col-sm-12 col-md-3">
            <div className="mini ">
            <i className="fa-solid fa-seedling"></i>
            <h6 className='mt-3'> {lang === "en" ? "Vegetarian " : "Vegetarian"}</h6>
            <p className='mt-4'> {lang === "en" ? "Vegetarian on request " : "İstəyə görə vegetarian"}</p>
           
            </div>
      </div>
      
    </div>
  </div>
</section>

<div className="butonumdu">
    <button  className="topbutonn" id="btn"  onClick={scrollToTop}> <i className="fa-solid fa-up-long"></i> </button>
    </div>
    </div>
  )
}

export default Contact