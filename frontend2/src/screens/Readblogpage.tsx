import { useParams } from "react-router-dom"
import { getBlogContent } from "../services/apiServices"
import image from "../image.jpg"
import { useEffect, useState } from "react"
function Readblogpage() {
    const params = useParams()
    const [blog, setBlog] = useState({})
    useEffect(() => {
        const getData: Function = async () => {
            const result = await getBlogContent(params.id)
            if (!result.success) {
                alert("Server Error couldn't load blogs")
                return
            }
            setBlog(result.content)
            return
        }
        getData()
    },[])
    return (
        <div key={blog.blog_id}>
            <img src={image} alt={`${blog.title} image`} />
            <h4>{blog.title}</h4>
            <div>{blog.category}</div>
            <div>
                <img src={image} alt="author image"></img>
                <p>Author Name</p></div>
            <p>{blog.description}</p>
            <p>{blog.content}</p>
            <p>{String(blog.created_at).substring(0, 10)}</p>
            <p>{String(blog.updated_at).substring(0, 10)}</p>
            <p>Likes<span>{blog.Likes}</span>Views {blog.Views}</p>
        </div>
    )
}

export default Readblogpage