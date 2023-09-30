// interface Blog {
//     id: number;
    
//   }
  
  // interface CreateBlogAction {
  //   type: "CREATE_BLOG";
  //   myblog: Blog;
  // }
  
  // interface UpdateBlogAction {
  //   type: "UPDATE_BLOG";
  //   id: number;
  //   update: Partial<Blog>;
  // }
  
  // interface DeleteBlogAction {
  //   type: "DELETE_BLOG";
  //   myid: number;
  // }
  
  // type BlogAction = CreateBlogAction | UpdateBlogAction | DeleteBlogAction;
  
  // const blogData: Blog[] = [];
  
  // export const blogReducer = (state: Blog[] = blogData, action: BlogAction): Blog[] => {
 const blog: any[] = [];

    export const blogReducer = (state=blog, action:any) => {
    switch (action.type) {
      case "CREATE_BLOG":
        return [...state, action.myblog];
  
      case "UPDATE_BLOG":
        return state.map( (b :any) => {
          if (b.id === action.id) {
            return {
              ...b,
              ...action.updates
            };
          } else {
            return b
          }
        });
  
      case "DELETE_BLOG":
        return state.filter(({ id } :any) => {
          return id !== action.myid;
        });
  
      default:
        return state;
    }
  };
  
