import { useEffect } from "react";
import { blogStore } from "../store/MyblogsStore";
function Blogs() {
  const blogList=blogStore((state)=>state.blogs)

  return (
    <div className="overflow-scroll max-w-[1000px]">
      <h2 className="text-3xl text-gray-400 m-4">Latest Blogs</h2>
      <div >
        {blogList.map((blog) => {
          return (
            <div className="m-4 p-4" key={blog.blogId}>
              <h4 className="text-2xl">{blog.title}</h4>
              <p>{blog.created_date}</p>
              <p>{blog.content.substring(0,100)}</p>
              <button className="text-blue-300">Readmore...</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
