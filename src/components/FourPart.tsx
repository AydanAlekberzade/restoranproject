import React from 'react'
import { Button } from 'react-bootstrap'
import { LangContext } from "../context/LangContext";
import { useContext } from "react";

const FourPart = () => {
  const [lang] = useContext(LangContext)
  return (

    <div className='fourpart'>
        <div className="row">
            <div data-aos="zoom-in" className="col-12 col-sm-12 col-md-6">
                <div className="chefmila">
                <img className='imgmila' src="https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2022/11/soulkitchen-91-1600x1600.jpg" alt="" />
                </div>
               
            </div>

            <div className="col-12 col-sm-12 col-md-6 fray">
                <div className="row ikinci">
             <div className="col-12 col-sm-12 col-md-6 ">
                 <div className="chefmilatext">
                 <h4>Chef Mila Kim</h4>
                 {lang === "en" ? (
                 <p className='mt-5'>Mila’s culinary creations are <br />
                  reflective of her own extensive <br />
                   travels and love of combining <br />
                    flavours from all over the world. Her <br />
                     cooking focuses on vegetable- <br />
                      centric dishes sourced from local <br />
                       farmers and she pays thoughtful <br />
                        attention to ingredients and subtle <br /> 
                        flavors.</p>
                 ) :(
                  <p className='mt-5'>Milanın kulinariya əsərləri <br />
                 öz genişliyini əks etdirir<br />
                 səyahətlər və birləşmə sevgisi<br />
                 dünyanın hər yerindən ləzzətlər. Onun <br />
                 yemək tərəvəzə diqqət yetirir <br />
                 yerli qaynaqlı mərkəzli yeməklər <br />
                 fermerlər və o düşüncəli ödəyir <br />
                 maddələrə diqqət və incə<br /> 
                      dadlar.</p>
                 )}
                        <button className='btn'> {lang === "az" ? "Komandayla görüş" : "MEET THE TEAM"}</button>
                 </div>
             </div>
             <div className="col-12 col-sm-12 col-md-6">
                <div className="ustlist">
<img src="https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2022/12/soulkitchen-264.jpg" alt="" />
                </div>
                <div data-aos="flip-right" className="altlist">
<img src="https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2022/11/soulkitchen-242-1600x1600.jpg" alt="" />
                </div>
                </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default FourPart