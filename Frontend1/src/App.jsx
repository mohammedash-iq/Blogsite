import Navbar from "./components/Navbar"
import RegisterPage from "./pages/RegisterPage"
import Blogs from "./screens/Blogs"
import CreateBlog from "./screens/CreateBlog"
import MyBlogs from "./screens/MyBlogs"
import { Routes,Route } from "react-router-dom"
function App() {
  return(
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Blogs></Blogs>}></Route>
      <Route path="/createblog" element={<CreateBlog></CreateBlog>}></Route>
      <Route path="/myblogs" element={<MyBlogs></MyBlogs>}></Route>
      <Route path="/register" element={<RegisterPage/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
