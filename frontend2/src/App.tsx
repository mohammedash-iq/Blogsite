import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Homepage from "./screens/Homepage"
import Readblogpage from "./screens/Readblogpage"
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/read/:id" element={<Readblogpage></Readblogpage>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}
export default App
