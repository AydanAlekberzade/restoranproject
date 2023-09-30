import { useContext } from "react";
import video from "../video/darksquare.mp4";
import { LangContext } from "../context/LangContext";
const FirstPart = () => {
  const [lang] = useContext(LangContext)
  return (
    <div className="firstpart ">
      <div className="row g-0">
        <div className="col-12 col-sm-12 col-md-6 ">
          <div className="darkmood  text-center">
 <div className="column">
  {lang === "en" ?(
    <>
 <h1>
              {" "}
              T H E S O U L K I T C H E N <br />E X P E R I E N C E
            </h1>
            <p>
              Our daily changing menu represents the best of what our local{" "}
              <br /> markets have to offer.
            </p>
  
            <button className="btn mt-3 "> VIEW MENU</button>
            </>
  ) : (

<>
    <h1>
    {" "}
    T H E S O U L K I T C H E N
<br /> T Ə C R Ü B Ə 
  </h1>
  <p>
  Gündəlik dəyişən menyumuz yerlimizin ən yaxşısını təmsil edir
.{" "}
    <br />bazarlar təklif edilməlidir
  </p>

  <button className="btn mt-3 "> {lang === "az" ? "MENUYA BAXIN" : "VIEW MENU"}</button>
</>

  )}
 </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6">
          <div className="image">
            <video className="video" muted autoPlay src={video}></video>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default FirstPart;
