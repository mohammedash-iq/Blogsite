
const url = "http://localhost:5500"

async function getApiService({ endpoint }) {
    const token = getJwt()
    const res = await fetch(`${url}${endpoint}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    })
    const response = await res.json()
    if (!response.success) {
        const token = await refreshJwt();
        if (token) {
            const secondres = await getApiService({ endpoint })
            return { content: secondres.content, success: true }
        }
        return { error: token.error, success: false }
    }
    return { content: response.content, success: true };
}

async function postApiService({ endpoint, payload }) {
    const token = getJwt()
    console.log(payload)
    const res = await fetch(`${url}${endpoint}`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers:
        {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    const response = await res.json()
    console.log(response)
    return { success: true, message: response.message }

}



async function deleteApiService({ endpoint, payload }) {
    const token = getJwt()
    const res = await fetch(`${url}${endpoint}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const response = await res.json()
    console.log(response)
    return { success: true, message: response.message }

}

function getJwt() {
    const jwtlocal = localStorage.getItem("jwt")
    const token = JSON.parse(jwtlocal)
    return token;
}

async function refreshJwt() {
    const res = await fetch(`${url}/user/refresh`, {
        method: "POST",
        credentials: "include"
    })
    const response = await res.json()
    console.log(response)
    if (!response.success) {
        return false;
    }
    localStorage.setItem("jwt", response.jwt)
    return true;
}
export { getApiService, postApiService, deleteApiService }