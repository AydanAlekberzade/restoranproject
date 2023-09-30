import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"
import { LangContext } from '../../context/LangContext';
const users = [
  {
  email: "aydan@gmail.com",
  pass: "a123",
  isAdmin: true,
  name: "Aydan"
  },
  {
  email: "zeyneb@gmail.com",
  pass: "user123",
  isAdmin: false,
  name: "zeyneb"
  },
  {
  email: "orxaneliyev@gmail.com",
  pass: "a123",
  isAdmin: false,
  name: "Orxan"
  }
]

const Auth  = () => {
  const [lang] = useContext(LangContext)
   const [email, setEmail] = useState("");
   const [pass, setPass] = useState("");
   const navigate = useNavigate();

const emailChange=(e:any)=>{
  setEmail(e.target.value)
}
const passChange=(e:any)=>{
  setPass(e.target.value)
}
  const formSubmit =(e:React.FormEvent)=>{
    e.preventDefault();
    if(email === "" || pass === ""){
     Swal.fire({
          icon: 'question',
          title: 'Hmm.. ',
          text: 'email or password is empty..',
        })
    }else{
      const autoUser:any =users.find((corr:any)=> corr?.email === email)
      if(!autoUser || pass !== autoUser.pass ){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
      else if(email === autoUser.email && pass === autoUser.pass && autoUser.isAdmin ===false){
  Swal.fire({
          icon: 'success',
          title: 'Great!',
          text: 'You are welcome..',
          timer:1500
        })
   localStorage.setItem("user", autoUser.name);
   navigate("/shop")
   window.location.reload();
      }else if(email === autoUser.email && pass === autoUser.pass && autoUser.isAdmin === true){
       Swal.fire({
          icon: 'success',
          title: 'Great!',
          text: 'You are welcome..',
          timer:1500
        })
      localStorage.setItem("admin", autoUser.name)
      navigate("/dashboard")
      window.location.reload()
      }
    }

  }  
      
  const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
  }
  return (
    <>
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-5">{lang === "en" ? "Login" : "Daxil ol"}</h1>
      <form onSubmit={formSubmit} className="col-4">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
         {lang === "en" ? " Email address " : "Mail ünvanı"}
          </label>
          <input
            onChange={emailChange}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            {lang === "en" ? "  Password  " : "Şifrə"}
          </label>
          <input 
            onChange={passChange}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-danger">
        {lang === "en" ? "    Submit   " : "Daxil ol"}
        </button>
      </form>
    </div>
   
    </>
  )
  }

export default Auth;
