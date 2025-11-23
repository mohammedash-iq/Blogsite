const url = "http://localhost:5500"

async function globalGetApiService({ endpoint }) {
  const res =await fetch(`${url}${endpoint}`, {
    method: "GET",
  })
  const response = await res.json()
  return { success: true, content: response.content };
}

export { globalGetApiService }