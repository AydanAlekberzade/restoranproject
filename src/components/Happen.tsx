import React from 'react'
import { LangContext } from "../context/LangContext";
import { useContext } from "react";

const Happen = () => {
  const [lang] = useContext(LangContext)
  return (
    <div className='happen'>
    <h1 className='text-center mt-5'>{lang ==="az" ? "Nə baş verir ?" : "What's happening? "}</h1>
<div className='mini'></div>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-4">
        <div className="firstphoto">
          <div className="firsttext text-center">
          <h1 className='text-center'> {lang ==="az" ? "hadisələr" : "events "}</h1>
          <h3>{lang ==="az" ? "18 dekabr 2022-ci il" : "december 18, 2022  "}</h3>
          <h3>{lang ==="az" ? "Soul Mətbəxdə Yeni il gecəsi" : "New Year's Eve at Soul Kitchen  "}</h3>
          <button className='btn mt-3'>{lang ==="az" ? "daha çox oxu" : "read more "}</button>
          </div>
      
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-4">
        <div className="secondphoto">
        <div className="secondtext text-center">
          <div className="minifoodmenu d-flex justify-content-center align-items-center ">
          <p className='text-center me-2'>{lang ==="az" ? "yemək" : "food "}</p>
          <p className='text-center'>{lang ==="az" ? "menyu" : "menu  "}</p>
          </div>
        
          <h3> {lang ==="az" ? "2 noyabr 2022-ci il" : "november 2, 2022 "}</h3>
          <h3> {lang ==="az" ? "Yeni qış menyusu" : "New winter menu "}</h3>
          <button className='btn mt-1'>{lang ==="az" ? "daha çox oxu" : "read more "}</button>
          </div>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
        <div className="thirdphoto">
        <div className="thirdtext text-center">
          <h1 className='myinter'>{lang ==="az" ? "müsahibə" : "interview "}</h1>
          <h3 className='text-center'>{lang ==="az" ? "21 oktyabr 2022-ci il" : "october 21, 2022 "}</h3>
          <h3 className='text-center'> {lang ==="az" ? "Aşpaz Mila Kim ilə müsahibə" : "An Interview with Chef Mila Kim"}</h3>
          <button className='btn mt-2'>{lang ==="az" ? "daha çox oxu" : "read more "}</button>
          </div>
        </div>
        </div>
    </div>


    </div>
  )
}

export default Happen