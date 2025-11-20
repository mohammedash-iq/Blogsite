import { userBlogStore } from "../store/MyblogsStore";
import { Link } from "react-router-dom";
import image from "../assets/image.jpg"

function MyBlogs() {

  const myBlogs = userBlogStore((state) => state.userBlogs)
  function handleDeleteBlog(e) {
    //give a confromation screen and delete the blog from the database and the local state
    console.log(e.target.value);
  }
  function handleEditBlog(e) {
    //give a conformation screen and go to edit blog page with the blog details
    console.log(e.target.value);
  }
  return (
    <div className="py-10" >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight" >My Blogs</h2>
          <Link to="/create" className="mt-6 inline-block py-2 px-4 text-sm font-medium rounded-full bg-amber-300 border-1" ><button>Create a new blog</button></Link>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3" >
          {myBlogs.map((blog) => (
            <article key={blog.blog_id} className="flex max-w-xl flex-col items-start justify-between p-4 rounded-lg bg-amber-200 border-1">
              <img className="w-full border-1 rounded-lg" src={image} alt={blog.title + "image"} />
              <div className="flex items-center gap-x-4 text-xs">
                <p>
                  {blog.created_date}
                </p>
                <a className="relative z-10 rounded-full px-3 py-1.5 font-medium" > {blog.title}</a>
              </div>
              <div className="group relative grow mt-3">
                <h3 className="text-lg font-semibold" >
                  <a href="">
                    <span className="absolute inset-0" />
                    {blog.title}
                  </a>
                </h3>
              </div>

            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyBlogs;
