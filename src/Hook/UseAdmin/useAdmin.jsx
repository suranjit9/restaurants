import { useQuery } from "@tanstack/react-query";
import useAuth from "../Auth/useAuth";
import useBaseUrl from "../BaseUrl/useBaseUrl";


const useAdmin = () => {
    const {user} = useAuth();
    const baseurl = useBaseUrl();
    const {data: isAdmin, isLoading} = useQuery({
        queryKey:[user?.email, 'isAdmin'],
        queryFn: async ()=>{
            const res = await baseurl.get(`/users/admin/${user.email}`);
            console.log(res.data)
            return res.data?.admin;
        }
    })
    return [isAdmin, isLoading];
};

export default useAdmin;