import { Link } from "react-router-dom"

function HomeNavbar() {
  return (
    <header className="sticky  top-0 z-50  border  bg-amber-200 mx-auto">
      <nav className="my-1 max-w-2xl w-full rounded-2xl mx-auto flex  items-center justify-between ">
        <Link to="/" className="py-2 px-4 text-sm font-medium rounded-full ">
          Home
        </Link>

        <Link
          to="/dashboard"
          className="py-2 px-4 text-sm font-medium rounded-full"
        >
          Dashboard
        </Link>
        <Link to="register" className="py-2 px-4 text-sm font-medium rounded-full">
          Login</Link>
      </nav>
    </header>
  )
}

export default HomeNavbar