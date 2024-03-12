import { useEffect, useState } from "react";


const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loder, setloder] = useState(true);
    // console.log(menu)
    useEffect(()=>{
        fetch('../../public/menu.json')
        .then(res => res.json())
        .then(data =>{
            setMenu(data);
            setloder(false)
        })
    },[])
    return [menu, loder]
};

export default useMenu;