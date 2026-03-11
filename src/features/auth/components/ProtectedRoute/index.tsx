import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

type Props = {};

function ProtectedRoute({}: Props) {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to={"/onboarding"} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
