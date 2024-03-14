import { useContext } from "react";
import { AuthCountext } from "../../Provider/AuthProvider";


const useAuth = () => {
    const auth = useContext(AuthCountext);
    return auth;
};

export default useAuth;