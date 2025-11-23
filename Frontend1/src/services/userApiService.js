const url = "http://localhost:5500"

async function getApiService({ endpoint}) {
    const token = getJwt()
    const res = await fetch(`${url}${endpoint}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    })
    const response = await res.json()
    return { content: response.content, success: true };

}

async function postApiService({ endpoint, body }) {

}


async function refreshJwt() {

}

function getJwt() {
    const jwtlocal = localStorage.getItem("jwt")
    const token = JSON.parse(jwtlocal)
    return token;
}
export { getApiService }