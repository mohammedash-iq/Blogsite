import { useNavigate } from "react-router-dom"
import image from "../image.jpg"

function BlogCard({ blog }) {
  const navigate = useNavigate()
  function handleReadmoreBtn(e) {
    const id: number = e.target.id
    navigate(`/read/${id}`)
  }
  return (
    <div key={blog.blog_id}>
      <img src={image} alt={`${blog.title} image`} />
      <h4>{blog.title}</h4>
      <p>{blog.description}</p>
      <p>{String(blog.created_at).substring(0, 10)}</p>
      <div>{blog.category}</div>
      <p>Likes<span>{blog.likes}</span>Views {blog.views}</p>
      <button onClick={handleReadmoreBtn} id={blog.blog_id}>Readmore..</button>
    </div>
  )
}

export default BlogCard