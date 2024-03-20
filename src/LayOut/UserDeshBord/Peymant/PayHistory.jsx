import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hook/Auth/useAuth";
import useBaseUrl from "../../../Hook/BaseUrl/useBaseUrl";


const PayHistory = () => {
    const {user} = useAuth();
    const baseUrl = useBaseUrl();
    const {data: payment=[]}= useQuery({
        queryKey:['payment', user?.email],
        queryFn: async ()=>{
            const res = await baseUrl.get(`/cardpayment/recive/${user?.email}`)
            return res.data;
        }
    })
    return (
        <div className="mt-5 w-[90%] m-auto">
            <h2 className="text-xl">Total Payment : {payment.length}</h2>
        </div>
    );
};

export default PayHistory;