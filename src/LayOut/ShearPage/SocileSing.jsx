import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hook/Auth/useAuth";
import useBaseUrl from "../../Hook/BaseUrl/useBaseUrl";
import { useLocation, useNavigate } from "react-router-dom";

const SocileSing = () => {
    const {googleSingIn} = useAuth();
    const baseUrl = useBaseUrl();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const handelSingin = () =>{
        googleSingIn()
        .then(result =>{
            console.log(result.user)
            // console.log(result)
            const userInfo = {
                Name:result.user.displayName,
                email:result.user.email
            }
            console.log({userInfo})
            baseUrl.post("/users", userInfo)
            .then(res=>{
              
                if (res.data.insertedId) {
                    navigate(from, { replace: true });
                }
            })
            
        })
    }
    return (
        <div className="flex gap-3">
            <button onClick={handelSingin} className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
                <span className="text-xl mr-1 text-green-700 "><FaGoogle /></span>
                Log in with Google</button>
            <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
                <span className="text-xl mr-1"><FaGoogle /></span>
                Log in with Google</button>
        </div>
    );
};

export default SocileSing;