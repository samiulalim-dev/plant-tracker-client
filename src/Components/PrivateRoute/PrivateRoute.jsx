import React, { use } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { users, loading } = use(AuthContext);
  const location = useLocation();
  //   console.log(location);
  if (loading) {
    return (
      <div className=" flex items-center justify-center h-screen ">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  if (!users) {
    return <Navigate to="/logIn" state={location.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
