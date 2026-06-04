import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate()

  if (!token) {
     navigate("/login");
  }

  try {
    const decoded = jwtDecode(token);

    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  } catch {
    navigate("/login");
  }

  return children;
}

export default ProtectedRoute;