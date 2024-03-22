
import { CiShoppingCart } from 'react-icons/ci';
import { NavLink, Outlet } from 'react-router-dom';
import { IoAdd, IoList } from "react-icons/io5";
import { FaBookBookmark, FaUsers } from "react-icons/fa6";
import useAdmin from '../../Hook/UseAdmin/useAdmin';
import useCarts from '../../Hook/getCarts/useCarts';
import { MdPayment } from "react-icons/md";

const UserDeshBord = () => {
    const [isAdmin] = useAdmin();
    const [cart] = useCarts();
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
                        {isAdmin ? <>
                        {/* Admin Content-------------------------- */}
                            <li><NavLink to={'/userdeshbord/AdminHome'}>Admin Home</NavLink></li>
                            <li><NavLink to={'additem'}><IoAdd className="text-2xl mr-2" /> Add Items</NavLink></li>
                            <li><NavLink to={'ManageList'}><IoList className="text-2xl mr-2" />Manage List</NavLink></li>
                            <li><NavLink to={'userdeshbord/ManageBooking'}><FaBookBookmark className="text-2xl mr-2" />Manage Booking</NavLink></li>
                            <li><NavLink to={'users'}><FaUsers  className="text-2xl mr-2" />All Users</NavLink></li>
                        </> :
                            // User content--------------
                            <>
                                <li><NavLink to={'/'}>User Home</NavLink></li>
                                <li><NavLink to={'UserCart'}><CiShoppingCart className="text-2xl mr-2" /> My Carts ({cart.length})</NavLink></li>
                                <li><NavLink to={'paymentHistory'}><MdPayment className="text-2xl mr-2" /> Payment History </NavLink></li>
                            </>}

                        <div className="divider">OR</div>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                       

                    </ul>

                </div>

            </div>

        </div>
    );
};

export default UserDeshBord;