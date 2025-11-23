async function loginService({ email, password }) {
  if (!email | !password) {
    return { message: "Please fill the Credentials", result: false };
  }
  const res = await fetch("http://localhost:5500/user/login", {
    method: "POST",
    body: JSON.stringify({ email: email, password: password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await res.json()
  return response;
}

async function signInService({ username, email, password }) {
  if (!username | !email | !password) {
    return { message: "Please provide all the credentials", result: false };
  }
  const res = await fetch("http://localhost:5500/user/signin", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await res.json();
  return response;

}

export { loginService, signInService };
