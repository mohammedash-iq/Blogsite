import { getAllBlogsService, getCategoryBlogs } from "../services/apiServices"
import BlogCard from "../components/BlogCard"
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
      <h2>Blogs</h2>
      <CategoryList setblogs={setBlogs}></CategoryList>
      {blogs.map((item, index: number) => <BlogCard key={index} blog={item}></BlogCard>)}
    </>
  )
}

function CategoryList({ setblogs }) {
  async function handleCategoryChangeBtn(e) {
    const category = e.target.value
    if (category === "All") {
      const res = await getAllBlogsService()
      if (!res.success) {
        alert("Server Error couldn't load blogs")
        return
      }
      setblogs(res.content)
      return
    }
    else {
      const res = await getCategoryBlogs({ category: category })
      if (!res.success) {
        alert("Server Error couldn't load blogs")
        return
      }
      setblogs(res.content)
      return
    }
  }
  return (
    <select onChange={handleCategoryChangeBtn} name="category" id="category">
      <option value="All">All</option>
      <option value="Technology">Technology</option>
      <option value="Career">Career</option>
      <option value="DevOps">DevOps</option>
      <option value="Cloud">Cloud</option>
    </select>
  )
}
export default Homepage