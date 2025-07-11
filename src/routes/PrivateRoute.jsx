import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children }) {
    const { user }  = useAuth();
    
    if (!user) {
        return <Navigate to={"/"} replace />
    }

    return children;
}

export default PrivateRoute;