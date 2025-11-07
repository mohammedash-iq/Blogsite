import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
      <nav className="fixed top-[94%] bottom-0 " >
        <ul className="bg-gray-400 text-md p-2 flex gap-4 rounded-xl m-auto">
          <Link  to="/">Blogs</Link>
          <Link  to="/createblog">CreateBlog</Link>
          <Link  to="/myblogs">MyBlogs</Link>
        </ul>
      </nav>
  );
}

export default Navbar;
