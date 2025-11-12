async function loginService({ email, password }) {
  if (!email | !password) {
    return { message: "Please fill the Credentials", result: false };
  }
  try {
    const res = await fetch("http://localhost:5500/user/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    res = await JSON.parse(Response);
    return { message: "Logged in successfully", result: true };
  } catch (err) {
    console.log(err);
    return { message: "Error when logging in", result: false };
  }
}

async function signInService({username, email, password}) {
  if (!username | !email | !password) {
    return { message: "Please provide all the credentials", result: false };
  }
  if (!email | !password) {
    return { message: "Please fill the Credentials", result: false };
  }
  try {
    const res = await fetch("http://localhost:5500/user/signin", {
      method: "POST",
      body: JSON.stringify({username:username, email: email, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    res = await JSON.parse(Response);
    return { message: "Signed in successfully", result: true };
  } catch (err) {
    console.log(err);
    return { message: "Error when signing in", result: false };
  }
}

export { loginService, signInService };
