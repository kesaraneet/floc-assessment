import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
import { useLocation, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/auth",
        { username, password },
        { headers: { "Content-Type": "application/json", withCredentials: true } }
      );
      const accessToken = response?.data?.token;
      const permission = response?.data?.permission;
      const email = response?.data?.email;
      const user_username = response?.data?.username;
      localStorage.setItem("username", user_username);
      localStorage.setItem("email", email);
      localStorage.setItem("accessToken", accessToken);
      setAuth({ user_username, password, email, permission, accessToken });
      setUsername("");
      setPassword("");
      navigate("/product");
    } catch (error) {
      console.log(error);
      if (!error?.response) {
        setErrMsg("No server response.");
      } else if (error.response?.stauts === 400) {
        setErrMsg("Missing username or password.");
      } else if (error.response?.stauts === 401) {
        setErrMsg("Unauthorized.");
      } else if (error.response?.status === 404) {
        setErrMsg("Username or password are incorrect.");
      } else {
        setErrMsg("Login failed.");
        errRef.current.focus();
      }
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="m-auto left-0 right-0 top-[15vh] bg-slate-200 w-[30vw] h-[35vh] rounded-3xl shadow-2xl p-12">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-5 gap-4 items-center">
            <p className="col-span-2">Username / Email: </p>
            <input
              className="col-span-3 block border border-slate-300 rounded-xl py-2 px-3 shadow-sm"
              type="text"
              name="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
            <p className="col-span-2">Password</p>
            <input
              className="col-span-3 block border border-slate-300 rounded-xl py-2 px-3 shadow-sm"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button className="col-span-5 rounded-xl bg-slate-500 py-2 mt-6 text-white">Login</button>
          </div>
        </form>
        <p className="text-red-700" ref={errRef}>
          {errMsg}
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
