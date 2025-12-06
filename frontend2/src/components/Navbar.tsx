import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div>
      <Link to="/"><div>Logo</div></Link>
      <div><button>Login</button></div>
    </div>
  )
}

export default Navbar