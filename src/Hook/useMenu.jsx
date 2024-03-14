import { useEffect, useState } from "react";
import useBaseUrl from "./BaseUrl/useBaseUrl";


const useMenu = () => {
    const baseUrl = useBaseUrl();
    const [menu, setMenu] = useState([]);
    const [loder, setloder] = useState(true);
    // console.log(menu)
    useEffect(()=>{
        baseUrl.get('/menu')
        .then(res =>{
            setMenu(res.data);
            setloder(false)
        })
    },[])
    return [menu, loder]
};

export default useMenu;