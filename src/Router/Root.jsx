import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../LayOut/ShearPage/NavBar";


const Root = () => {
    const locetion = useLocation();
    const noHeaderFooter = locetion.pathname.includes('/Singin') || locetion.pathname.includes('/SingUP');
    return (
        <div>
            { noHeaderFooter || <NavBar/>}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;