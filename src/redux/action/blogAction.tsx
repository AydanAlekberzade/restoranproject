import { v4 as uuid } from "uuid";

interface Blog {
  id: string;
  photo: string;
  title: string;
  desc: string;
}

interface CreateBlogAction {
  type: "CREATE_BLOG";
  myblog: Blog;
}

interface UpdateBlogAction {
  type: "UPDATE_BLOG";
  id: string;
  update: any; 
}

interface DeleteBlogAction {
  type: "DELETE_BLOG";
  myid: string;
}

export const addBlog = ({ photo, title, desc }: Blog): CreateBlogAction => ({
  type: "CREATE_BLOG",
  myblog: {
    id: uuid(),
    photo,
    title,
    desc,
  },
});

export const updateBlog = (id: string, update: any): UpdateBlogAction => ({
  type: "UPDATE_BLOG",
  id,
  update,
});

export const removeBlog = ({ comingid }: { comingid: string }): DeleteBlogAction => ({
  type: "DELETE_BLOG",
  myid: comingid,
});

