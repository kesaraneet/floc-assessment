import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

import useAuth from "../hooks/useAuth";
import LoginPanel from "../components/LoginPanel";

function LoginPage() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(
    () =>
      async function verifyToken() {
        const token = localStorage.getItem("accessToken");
        if (token) {
          try {
            const response = await axios.post(
              "/auth/verifyToken",
              { token: localStorage.getItem("accessToken") },
              { headers: { "Content-Type": "application/json" } }
            );
            const accessToken = response?.data?.token;
            const permission = response?.data?.permission;
            const email = response?.data?.email;
            const user_username = response?.data?.username;
            setAuth({ user_username, password, email, permission, accessToken });
            navigate("/products");
          } catch (error) {}
        }
      },
    []
  );

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
      navigate("/products");
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
      }
    }
  };

  return (
    <LoginPanel
      handleSubmit={handleSubmit}
      username={username}
      pasword={password}
      setUsername={setUsername}
      setPassword={setPassword}
      errMsg={errMsg}
    />
  );
}

export default LoginPage;
