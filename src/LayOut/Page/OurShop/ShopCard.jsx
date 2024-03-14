import Swal from "sweetalert2";
import useAuth from "../../../Hook/Auth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useBaseUrl from "../../../Hook/BaseUrl/useBaseUrl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ShopCard = ({item}) => {
    const baseUrl = useBaseUrl();
    const {user} = useAuth();
    // console.log(user)
    const nevegat = useNavigate();
    const locetion = useLocation();
    const handelAddtoCart =(fod)=>{
        // console.log(fod)
        if (!user) {
            Swal.fire({
                title: "Please Login",
                text: "",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Singin"
              }).then((result) => {
                if (result.isConfirmed) {
                    nevegat('/singIn', {state:{from:locetion}})
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
                }
              });
        }else{
            const {image, _id, name, price}=fod;
            const cartItem = {
                menuId: _id,
                email:user.email,
                name,
                price,
                image
            };
        baseUrl.post('/carts',cartItem)
        .then(res =>{
            if (res.data.insertedId) {
                toast("Successfully Add Your Food") 
            }
        })
        }
    }

    return (
        
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 w-5/6 m-auto mt-5">
           <ToastContainer />
            {
                item.map(food => <div key={food._id} className="card bg-base-100 shadow-xl">
                        <figure><img className="w-full" src={food.image} alt="Shoes" /></figure>
                        <h3 className="absolute r-0 ml-[80%] mt-5 bg-slate-500 rounded-lg p-2 text-white font-bold">${food.price}</h3>
                        <div className="card-body">
                            <h2 className="card-title">{food.name}</h2>
                            <p>{food.recipe}</p>
                            <div className="card-actions justify-center">
                                <button onClick={()=>handelAddtoCart(food)} className="btn btn-outline border-0 border-b-4 mt-4 border-yellow-600">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default ShopCard;