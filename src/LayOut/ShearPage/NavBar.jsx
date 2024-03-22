import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthCountext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCarts from "../../Hook/getCarts/useCarts";

import useAdmin from "../../Hook/UseAdmin/useAdmin";


const NavBar = () => {
    const { user, logOut } = useContext(AuthCountext);
    // console.log(user)
    const [isAdmin] = useAdmin();
    const [cart] = useCarts();
    const totalprice = cart.reduce((total, item) => total + item.price, 0)

    const naveList = (
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/OurMenu'}>Our Menu</NavLink></li>
            <li><NavLink to={'/OurShop/offered'}>Our Shop</NavLink></li>
            </>
    );
    
    const handalLogout = () => {
        logOut()
            .then()
    }
    return (
        <div className="navbar fixed z-50 bg-[#15151530] text-white pr-10">
            <ToastContainer />
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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

            {/* ---------------------------------- */}
            <div className="flex-none text-black">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">{cart.length}</span>
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">{cart.length} Items</span>
                            <span className="text-info">Total: ${totalprice}</span>
                            <div className="card-actions">
                                <Link to={'/userdeshbord/UserCart'}><button className="btn btn-primary btn-block">View cart</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    user ? <>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user?.photoURL ? <><img src={user?.photoURL} alt={user?.name} /> </> : <><img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> </>
                                    }

                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                
                                    {user && isAdmin ? <li><NavLink to={'/userdeshbord/AdminHome'}>Deshbord</NavLink></li> : ""}
                                    {user && !isAdmin ? <li><NavLink to={'/userdeshbord/UserHome'}>Deshbord</NavLink></li> : ""}

                               

                                <button onClick={handalLogout} className="btn btn-outline btn-sm font-bold">LogOut</button>
                            </ul>
                        </div>
                    </> : <>
                        <li className="btn btn-outline text-white font-bold"><NavLink to={'/Singin'}>Sing in</NavLink></li>
                    </>
                }
            </div>
        </div>
    );
};

export default NavBar;