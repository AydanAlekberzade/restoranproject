import React, { useState } from "react";

interface Blog {
  photo: string;
  title: string;
  desc: string;
}

interface BlogFormProps {
  onFormSubmitted: (blog: Blog) => void;
  editBlog?: Blog;
}

const BlogForm: React.FC<BlogFormProps> = ({ onFormSubmitted, editBlog }) => {
  const [iphoto, setiPhoto] = useState(editBlog ? editBlog.photo : "");
  const [ititle, setiTitle] = useState(editBlog ? editBlog.title : "");
  const [idesc, setiDesc] = useState(editBlog ? editBlog.desc : "");

  const blogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ititle || !iphoto || !idesc) {
      alert("Please fill in all input fields");
    } else {
      onFormSubmitted({
        photo: iphoto,
        title: ititle,
        desc: idesc,
      });
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <form onSubmit={blogSubmit} className="col-4">
        <div className="mb-3">
          <label className="form-label">Blog photo url</label>
          <input
            value={iphoto}
            type="text"
            className="form-control"
            onChange={(e) => {
              setiPhoto(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Blog title</label>
          <input
            value={ititle}
            type="text"
            className="form-control"
            onChange={(e) => {
              setiTitle(e.target.value);
            }}
          />
        </div>

        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            onChange={(e) => {
              setiDesc(e.target.value);
            }}
            id="floatingTextarea2"
            style={{ height: 100 }}
            defaultValue={idesc}
          />
          <label htmlFor="floatingTextarea2">Blog description</label>
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          {editBlog ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
