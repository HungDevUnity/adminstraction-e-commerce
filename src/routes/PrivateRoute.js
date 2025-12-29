import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isLogin = localStorage.getItem("isLogin");
  return isLogin ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
