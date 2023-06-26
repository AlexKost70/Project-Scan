import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

const RequireNotAuth = ({children}) => {
    const location = useLocation();
    // const user = useAuth();
    const user = true;
    if (user) {
        return <Navigate to="/" state={{from: location}} />
    }

    return children;
}

export default RequireNotAuth;