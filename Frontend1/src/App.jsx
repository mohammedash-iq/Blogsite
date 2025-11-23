import RegisterPage from "./screens/RegisterPage"
import Home from "./screens/Home"
import CreateBlog from "./screens/CreateBlog"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./screens/Dashboard"
function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/create" element={<CreateBlog />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
