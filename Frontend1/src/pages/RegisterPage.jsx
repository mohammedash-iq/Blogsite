import React, { useState } from "react";
import { loginService, signInService } from "../services/registerService";

function RegisterPage() {
  const [registerState, setRegisterState] = useState("signin");
  const [inputState, setInputState] = useState({
    username: "",
    email: "",
    password: "",
  });

  async function handleRegisterForm(e) {
    e.preventDefault();
    if (registerState === "login") {
      const res = await loginService({
        email: inputState.email,
        password: inputState.password,
      });
      if (!res.result) {
        alert(res.message);
      }
    } else {
      const res = await signInService({
        username: inputState.username,
        email: inputState.email,
        password: inputState.password,
      });
      if (!res.result) {
        alert(res.message)
      }
    }
    e.preventDefault();
  }
  function RegisterButtonHandeler(e) {
    if (e.target.id === "signin") {
      setRegisterState("signin");
    } else {
      setRegisterState("login");
    }
  }
  return (
    <>
      <div>
        <button
          id="signin"
          className={registerState === "signin" ? "bg-gray-100" : "bg-blue-400"}
          onClick={RegisterButtonHandeler}
        >
          Sign In
        </button>
        <button
          id="login"
          className={registerState === "login" ? "bg-gray-100" : "bg-blue-400"}
          onClick={RegisterButtonHandeler}
        >
          Login In
        </button>
      </div>
      <form onSubmit={handleRegisterForm} method="post">
        {registerState === "signin" ? (
          <>
            <label htmlFor="username">Username</label>
            <input
              value={inputState.username}
              onChange={(e) => {
                setInputState((prev) => ({
                  ...prev,
                  username: e.target.value,
                }));
              }}
              type="text"
              name="username"
              required
            />
          </>
        ) : (
          ""
        )}
        <label htmlFor="email">Email</label>
        <input
          value={inputState.email}
          onChange={(e) => {
            setInputState((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
          type="text"
          name="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          value={inputState.password}
          onChange={(e) => {
            setInputState((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
          type="password"
          required
        />
        <button type="submit">
          {registerState === "signin" ? "Sign-In" : "Login"}
        </button>
      </form>
    </>
  );
}

export default RegisterPage;
