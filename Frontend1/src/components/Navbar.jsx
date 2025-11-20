import React from "react";
import { Link } from "react-router-dom"

function Navbar() {
  return (

    <header className="sticky top-0 z-50 w-full">
      <nav className="mt-4 max-w-2xl w-full rounded-2xl mx-auto flex items-center justify-between p-2" >
        <div className="flex items-center">
          <Link to="/" className="text-xl font-semibold"
          >Logo Here</Link>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/register" className="py-2 px-4 text-sm font-medium rounded-full"  >
            Login
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center gap-3">
            <Link to="/dashboard" className="py-2 px-3" >Dashboard</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
