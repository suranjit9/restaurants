import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/Auth/useAuth";
import useAdmin from "../Hook/UseAdmin/useAdmin";


const Adminprovider = ({children}) => {
    const [isAdmin, isLoading]= useAdmin();
    const {user, loading}=useAuth();
    const location = useLocation();
    if (loading || isLoading) {
        return <>
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
        </>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/Singin' state={{from:location}} replace></Navigate>
};

export default Adminprovider;