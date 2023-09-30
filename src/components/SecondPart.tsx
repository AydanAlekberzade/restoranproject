import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { LangContext } from "../context/LangContext";
import { useContext } from "react";
interface ImageProps {
    src: string;
  }

  const Image = (props: ImageProps) => {
    return <img  width={480} src={props.src}  alt="" />;
  };

  interface SecondPartProps {
    firstPhotoSrc: string;
    secondPhotoSrc: string;
    thirdPhotoSrc: string;
  }

 const SecondPart = (props: SecondPartProps) => {
   useEffect(()=>{
   AOS.init();
    }, [])

    const [lang] = useContext(LangContext)

    return (
      <div className='secondpart'>
        <div className="container ">
          <div className="row ">
            <div className="col-12 col-sm-12 col-md-4 mt-5">
              <div className="firstphoto">
                <div  data-aos="fade-right" className="myfirstphoto">
                  <div className="text ">
                    <p >{lang === "az" ? "DÜNYANIN BÜTÜNLƏRİNDƏN DADLAR" : "FLAVORS FROM AROUND THE WORLD "}</p>
                    <h1>{lang ==="az" ? "Haqqımızda" : "About Us"}</h1>
                  </div>
                  <Image  src={props.firstPhotoSrc} />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 mt-5 ">
                <div className="secondphoto data-aos=fade-down">
                    <div  className="mysecondphoto"> 
                    <div className="text">
                    <p >{lang ==="az" ? "Aclıq hiss edirsiniz?" : "FEELING HUNGRY ? "}</p>
                    <h1 style={{fontSize:"29px"}}>{lang ==="az" ? "Xüsusi nahar"  : "Lunch Special  "}  </h1>
                  </div>
                     <Image src={props.secondPhotoSrc} />
                    </div>
              
                </div>
             
            </div>
            <div className="col-12 col-sm-12 col-md-4 mt-5">
                <div className="thirdphoto">
                    <div data-aos="fade-left" data-aos-duration="2000" className="mythirdphoto">
                    <div className="text">
                    <p > {lang ==="az" ? "SON XƏBƏRLƏR, HEKAYƏLƏR VƏ RESEPTLER" : "LATEST NEWS, STORIES AND RECIPES "}</p>
                    <h1 style={{fontSize:"29px"}}> {lang ==="az" ? "Nə baş verir?" : "What's Happening"}</h1>
                  </div>
                    <Image src={props.thirdPhotoSrc} />
                    </div>
                
                </div>
             
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SecondPart;
  

