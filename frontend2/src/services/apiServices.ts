const URL: string = "http://localhost:5500"

async function getAllBlogsService() {
  const res = await fetch(`${URL}/api/blogs/all`)
  if (res.status === 500) {
    return { success: false, error: "Server Error" }
  }
  const response = await res.json()
  return { success: true, content: response.content }
}

async function getCategoryBlogs({ category }) {
  const res = await fetch(`${URL}/api/blogs/category/${category}`, {
    method: "POST",
    body: JSON.stringify({ category: category }),
    headers: { "Content-Type": "Application/json" }
  })
  if (res.status === 500) {
    return { success: false, error: "Server Error" }
  }
  const response = await res.json()
  return { success: true, content: response.content }
}

async function getBlogContent(id: number) {
  try {
    const res = await fetch(`${URL}/api/blogs/${id}`)
    if (res.status === 500) {
      return { success: false, error: "Server Error" }
    }
    const response = await res.json()
    return { success: true, content: response.content[0] }
  }
  catch (err) {
    console.log(err)
    return { success: false, error: "Some Error Occured" }
  }
}
export { getAllBlogsService, getBlogContent, getCategoryBlogs }