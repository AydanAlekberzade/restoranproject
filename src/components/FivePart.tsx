import React from 'react'
import { LangContext } from "../context/LangContext";
import { useContext } from "react";

const FivePart = () => {
  const [lang] = useContext(LangContext)
  return (
    <div className='fivepart'>
       {lang === "en" ? (
        <>
    <p style={{fontSize:"14px"}}>QUALITY IS AT HEART OF EVERYTHING WE DO</p>
    <h1>The Soul Kitchen Food Philosophy</h1>
    <div className="list mt-3"></div>
    <p className='mt-2'>Our daily changing menu represents the best of what our local markets have to offer. <br />
     Our passion for sourcing fresh ingredients from farmers and suppliers we know, <br />
      combining with traditional flavors and rewriting familiar recipes into exceptional cuisine <br />
       is our mission and greatest joy.</p>
       </>
       ) : (
<>
        <p style={{fontSize:"14px"}}>KEYFİYYƏT ETDİYİMİZ HƏR ŞEYİN ÜZƏRİNDƏDİR</p>
        <h1> Soul Mətbəx Qida Fəlsəfəsi</h1>
        <div className="list mt-3"></div>
        <p className='mt-2'>Gündəlik dəyişən menyumuz yerli bazarlarımızın təklif etdiyi ən yaxşıları təmsil edir.<br />
        Bildiyimiz fermerlərdən və təchizatçılardan təzə inqrediyentlər əldə etmək həvəsimiz, <br />
        ənənəvi ləzzətlərlə birləşmək və tanış reseptləri müstəsna mətbəxə yenidən yazmaq<br />
        missiyamız və ən böyük sevincimizdir.</p>
</>
       )}
    </div>
  )
}

export default FivePart