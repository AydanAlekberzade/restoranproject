import React from "react";
import BlogForm from "../../../components/BlogForm";
import { useDispatch } from "react-redux";
import { addBlog } from "../../../redux/action/blogAction";
import { useNavigate } from "react-router-dom";
import { LangContext } from "../../../context/LangContext";
import  { useContext } from 'react'
const CreateBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [lang] = useContext(LangContext)


  return (
    <div>
      <h1 style={{color: "#000080" , fontFamily:"Source Sans Pro"}} className="text-center ">{lang === "en" ? "Add your  meal " : "Yeməyinizi əlavə edin"}</h1>
      <BlogForm
        onFormSubmitted={(allitems:any) => {
          dispatch(addBlog(allitems));
          navigate("/dashboard");
        }}
    
      />
     
    </div>
  );
};

export default CreateBlog