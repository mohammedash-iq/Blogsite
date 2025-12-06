import { getAllBlogsService } from "../services/apiServices"
import BlogCard from "../components/BlogCard"
import BlogsContext from "../store/Context"
import { useEffect, useState } from "react"
function Homepage() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    const getData: Function = async () => {
      const res = await getAllBlogsService()
      if (!res.success) {
        alert("Server Error couldn't load blogs")
        return
      }
      setBlogs(res.content)
      return
    }
    getData()
  }, [])
  return (
    <>
    <BlogsContext.Provider value={blogs}>
      <h2>Blogs</h2>
      <select name="category" id="category">
        <option value="all">All</option>
        <option value="education">Education</option>
      </select>
      {blogs.map((item, index: number) => <BlogCard key={index} blog={item}></BlogCard>)}
      </BlogsContext.Provider>
    </>
  )
}

export default Homepage