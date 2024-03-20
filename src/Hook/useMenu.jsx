
import { useQuery } from "@tanstack/react-query";
import usePubLicUrl from "./PublickUrl/usePubLicUrl";


const useMenu = () => {
    const baseUrl = usePubLicUrl();
    const {data : menu=[], refetch, isLoading}= useQuery({
        queryKey:['menu'],
        queryFn: async ()=>{
            const res = await baseUrl.get('/menu')
            return res.data;
        }
    });
    return [menu, refetch, isLoading]
};

export default useMenu;