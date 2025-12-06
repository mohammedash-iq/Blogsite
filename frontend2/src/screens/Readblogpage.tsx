import { useParams } from "react-router-dom"
import { getBlogContent } from "../services/apiServices"
import image from "../image.jpg"
function Readblogpage() {
    const params = useParams()
    const blog = getBlogContent(params.id)[0]
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
            <p>{String(blog.created_at).substring(0,10)}</p>
            <p>{String(blog.updated_at).substring(0,10)}</p>



            <p>Likes<span>{blog.likes}</span>Views {blog.views}</p>
        </div>
    )
}

export default Readblogpage