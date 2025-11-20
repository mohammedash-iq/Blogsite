import Navbar from "./components/Navbar"
import RegisterPage from "./screens/RegisterPage"
import Blogs from "./screens/Blogs"
import CreateBlog from "./screens/CreateBlog"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./screens/dashboard"
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Blogs></Blogs>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/create" element={<CreateBlog />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
