import { useState } from "react";
import { loginService, signInService } from "../services/registerService";
import useToken from "../store/authStore"

function RegisterPage() {
  const [registerState, setRegisterState] = useState("signin");
  const [inputState, setInputState] = useState({ username: "", email: "", password: "" });
  const setToken = useToken((state) => state.setToken)

  async function handleRegisterForm(e) {
    e.preventDefault();
    if (registerState === "login") {
      const res = await loginService({ email: inputState.email, password: inputState.password });
      if (!res.result) {
        alert(res.message);
        return
      }
      alert("Logged in successfully")
      setToken(res.token)
    }
    else {
      const res = await signInService({ username: inputState.username, email: inputState.email, password: inputState.password });
      if (!res.result) {
        alert(res.message);
        return
      }
      alert("Logged in Successfully")
      setToken(res.token)
    }
    e.preventDefault();
  }
  function RegisterButtonHandeler(e) {
    e.target.id === "signin" ? setRegisterState("signin") : setRegisterState("login");
  }
  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-lg" >

      <div className="flex gap-2 justify-center mb-6">
        <button
          id="signin"
          className={`text-sm px-4 py-2 rounded-md ${registerState === 'signin' ? 'font-semibold' : ''}`}
          onClick={RegisterButtonHandeler}
        >Signin</button>

        <button
          id="login"
          className={`text-sm px-4 py-2 rounded-md ${registerState === 'login' ? 'font-semibold' : ''}`}
          onClick={RegisterButtonHandeler}
        > Login</button>
      </div>

      <form onSubmit={handleRegisterForm} method="post" className="space-y-4">

        {registerState === "signin" ? (
          <label htmlFor="Username">
            <span className="text-sm font-medium" > Username </span>

            <input value={inputState.username}
              onChange={(e) => {
                setInputState((prev) => ({ ...prev, username: e.target.value }));
              }} type="text" name="Username" className="mt-1 p-2 w-full rounded border" required></input>
          </label>) : ("")}

        <label htmlFor="Email">
          <span className="text-sm font-medium" > Email </span>

          <input value={inputState.email}
            onChange={(e) => {
              setInputState((prev) => ({ ...prev, email: e.target.value }));
            }} type="email" name="Email" className="mt-1 p-2 w-full rounded border" required />
        </label>

        <label htmlFor="Password" className="text-sm font-medium" >
          Password

          <input value={inputState.password}
            onChange={(e) => {
              setInputState((prev) => ({ ...prev, password: e.target.value }));
            }} type="password" name="Password" className="mt-1 p-2 w-full rounded border" required />
        </label>

        <button type="submit" className="w-full rounded px-8 py-3 mt-4 text-sm font-medium" >
          {registerState === "signin" ? "Sign-In" : "Login"}
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
