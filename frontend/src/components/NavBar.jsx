import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const NavBar = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("accessToken");
    setAuth({});
    navigate("/");
  };

  return (
    <nav className="flex bg-slate-300 p-6 items-center justify-between">
      <div className="flex-col items-left  text-slate-700">
        <p>User: {localStorage.getItem("username")}</p>
        <p>Email: {localStorage.getItem("email")}</p>
      </div>
      <div className="text-right">
        <form onSubmit={handleLogout}>
          <button className="inline-block text-sm mx-3 p-5 py-2 leading-none rounded text-white  bg-slate-400">Logout</button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
