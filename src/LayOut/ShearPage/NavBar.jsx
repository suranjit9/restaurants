import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthCountext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCarts from "../../Hook/getCarts/useCarts";
import { CiShoppingCart } from "react-icons/ci";


const NavBar = () => {
    const { user, logOut } = useContext(AuthCountext);
    const [cart] = useCarts();
    const handalLogout =()=> {
        logOut()
        .then(toast("Successfully Sing Out"))
    }
    const naveList = <>

        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/OurMenu'}>Our Menu </NavLink></li>
        <li><NavLink to={'/OurShop/offered'}>Our Shop</NavLink></li>
        {/* <li><NavLink to={'/SingUP'}>Sing UP</NavLink></li> */}



    </>
    return (
        <div className="navbar fixed z-50 bg-[#15151530] text-white pr-10">
            <ToastContainer />
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {naveList}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {naveList}
                </ul>
            </div>
            <div className="gap-3">
                <h2>{user?.email}</h2>
                {
                    user ? <>
                            <Link to={'userdeshbord/UserCart'}>
                            <div className="flex">
                                <CiShoppingCart className="text-2xl mr-2" />
                                <div className="badge badge-secondary">+{cart.length}</div>
                            </div>
                            </Link>
                        <button onClick={handalLogout} className="btn btn-outline text-white font-bold">LogOut</button>

                    </> : <>
                        <li className="btn btn-outline text-white font-bold"><NavLink to={'/Singin'}>Sing in</NavLink></li>
                    </>
                }
            </div>
        </div>
    );
};

export default NavBar;