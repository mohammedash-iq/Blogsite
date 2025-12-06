import {getAllBlogsService} from "../services/apiServices"
import BlogCard from "../components/BlogCard"
function Homepage() {
  const blogs =getAllBlogsService()
  return (
    <>
    <h2>Blogs</h2>
    {blogs.map((item:object,index:number)=><BlogCard key={index} blog={item}></BlogCard>)}
    </>
  )
}

export default Homepage