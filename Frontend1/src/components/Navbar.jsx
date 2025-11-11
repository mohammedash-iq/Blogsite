import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
      <nav className="flex flex-col justify-center" >
        <ul className="bg-gray-400 text-md p-2 flex gap-4 rounded-xl m-auto">
          <Link  to="/">Blogs</Link>
          <Link  to="/createblog">CreateBlog</Link>
          <Link  to="/myblogs">MyBlogs</Link>
          <Link to="/register">Register</Link>
        </ul>
      </nav>
  );
}

export default Navbar;
