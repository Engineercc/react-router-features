import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) {
    return (
      <Navigate
        to="/auth/login"
        replace={true}
        state={{ return_url: location.pathname + location.search }}
      />
    ); // location.search parametresi, search edilen bir değer varsa, login olduğunda onun url sonucunu da getirir.
    // replace: Yönlendirilen sayfaya gidip tekrar gelmesini önlemek için replace keywordu kullanılır/
  }
  return children;
};

export default PrivateRoute;
