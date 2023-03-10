import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RequiredAuth({ allowedPermission }) {
  const { auth } = useAuth();
  const location = useLocation();
  console.log("allowedPermission: ", allowedPermission);
  console.log(auth.permission);
  const isAuthorized = allowedPermission.every((p) => auth?.permission?.includes(p));

  return isAuthorized ? (
    <Outlet />
  ) : auth?.accessToken ? (
    <Navigate to="/product" />
  ) : (
    <Navigate to="/" state={{ from: location }} replcae />
  );
}

export default RequiredAuth;
