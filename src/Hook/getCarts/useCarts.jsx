import { useQuery } from "@tanstack/react-query";
import useBaseUrl from "../BaseUrl/useBaseUrl";
import useAuth from "../Auth/useAuth";



const useCarts = () => {
    const baseUrl = useBaseUrl();
    const {user} = useAuth();
    const { data: cart = [], refetch } = useQuery({
        queryKey:['cart', user?.email],
        queryFn: async ()=>{
            const res = await baseUrl.get(`/carts?email=${user.email}`)
            return res.data;
        }
    });
    return [cart, refetch];
};

export default useCarts;