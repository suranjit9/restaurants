
import { CiShoppingCart } from 'react-icons/ci';
import {  NavLink, Outlet } from 'react-router-dom';

const UserDeshBord = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* Page content here */}
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><NavLink to={'/'}>User Home</NavLink></li>
                        <li><NavLink to={'UserCart'}><CiShoppingCart className="text-2xl mr-2" /> My Carts</NavLink></li>
                        <li><NavLink to={'UserCarte'}>My Carts</NavLink></li>
                        <li><NavLink to={'UserCartr'}>My Carts</NavLink></li>
                      
                    </ul>

                </div>
               
            </div>
            
        </div>
    );
};

export default UserDeshBord;