// // import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import BlogForm from '../../../components/BlogForm';
// import { useNavigate } from 'react-router-dom';
// import { updateBlog } from '../../../redux/action/blogAction';
// import { RootState } from '../../../redux/store/configureStore';

//   const EditBlog: React.FC = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   const blogdata = useSelector((state: RootState) => state.blog);
//   const linkpathcount = window.location.pathname.length - 36;
//   const link = window.location.pathname.slice(linkpathcount, 9999);
//   const filterblog = blogdata.find((p:any) => p.id === parseInt(link));

//   return (
//     <div>
//       <h1>Edit Blog</h1>

//       <BlogForm
//         editBlog={filterblog}
//         onFormSubmitted={(item: any) => {
//           dispatch(updateBlog(filterblog.id, item));
//           navigate('/admin/dashboard');
//         }}
//       />
//     </div>
//   );
// }

// export default EditBlog;


import React, { useContext} from "react";
import { connect} from "react-redux";
import { useNavigate } from "react-router-dom";
import BlogForm from "../../../components/BlogForm";
// import { editBlogFromDatabase, removeBlogFromDatabase } from "../../../myredux/actions/blogAction";
import { LinkContainer } from "react-router-bootstrap";
// import { LangContext } from "../../../context/LangContext";
import { Button } from "react-bootstrap";
import { removeBlog } from "../../../redux/action/blogAction";

const EditBlog: React.FC = (props: any) => {
  const navigate = useNavigate();
  // const [lang] = useContext(LangContext);

  return (
    <div className="editBlog">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>edit</h1>
       
        <p className="py-3">
        <LinkContainer to="/blog">
          <span>Bloq</span>
        </LinkContainer>
        // Bloqu redaktə edin
      </p>
      :
        <p className="py-3">
        <LinkContainer to="/blog">
          <span>Blog</span>
        </LinkContainer>
        // Edit Blog
      </p>
        
      </div>
      <div className="bottom">
        <div className="top-img">
          <img
            src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png"
            alt=""
          />
        </div>
        <div className=" mt-2 d-flex align-items-center justify-content-start">
            <div className="col-9 d-flex align-items-center justify-content-end">
            <Button variant='danger'
            onClick={()=>{props.dispatch(removeBlog(props.pvalue.id))
            navigate('/dashboard')
          }
            }>Delete</Button>
            </div>
          </div>
        <BlogForm
          editBlog={props.pvalue}
          onFormSubmitted={(fd:any) => {
            props.dispatch(EditBlog(props.pvalue.id, fd));
            navigate("/dashboard");
          }}
        />
         
      </div>
    </div>
  );
};

const MapStateToProps = (state: any) => {
  const link = window.location.pathname.slice(16, 99);
  return {
    pvalue: state.find((p: any) => p.id === link),
  };
};

export default connect(MapStateToProps)(EditBlog);
