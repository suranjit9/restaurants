import Swal from "sweetalert2";
import useBaseUrl from "../../Hook/BaseUrl/useBaseUrl";
import useCarts from "../../Hook/getCarts/useCarts";
import { MdDeleteOutline } from "react-icons/md";

const CartsPage = () => {
    const [cart, refetch] = useCarts();
    const baseUrl = useBaseUrl();
    const myCartstotalPrice = cart.reduce((price, item) => price + item.price, 0);
    const handleDelet = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                baseUrl.delete(`/usercart/${id}`)
                    .then(res => {
                        refetch();
                        if (res.data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              }); 
                        }
                    })

            }
        });

    }
    return (
        <div>
            <div className="flex justify-between w-full px-8 mt-[2%]">
                <h2 className="text-3xl font-bold">Item's :<span className="text-green-500 pl-1">{cart.length}</span> </h2>
                <h2 className="text-3xl font-bold">Total Price :<span className="text-green-500 pl-1">$ {myCartstotalPrice}</span> </h2>
                <button className="text-2xl text-green-800 font-bold btn btn-outline">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <h3>SL</h3>
                            </th>
                            <th>Imgeas</th>
                            <th>Nane</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {/* row 1 */}
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center ">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>$ {item.price}</td>
                                <th>
                                    <button onClick={() => handleDelet(item._id)} className="btn btn-ghost "><MdDeleteOutline className="text-2xl text-red-800" /></button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default CartsPage;