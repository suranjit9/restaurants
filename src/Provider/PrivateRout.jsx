import { useContext } from "react";
import { AuthCountext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRout = ({ children }) => {
    const { user, loading } = useContext(AuthCountext);
    const location = useLocation();
    if (loading) {
        return <>
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
        </>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/Singin' state={{from:location}} replace></Navigate>
};

export default PrivateRout;