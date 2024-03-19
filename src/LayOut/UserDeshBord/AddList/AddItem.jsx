import { useForm } from "react-hook-form";
import HeadTitle from "../../ShearPage/HeadTitle";
import { FaUtensils } from "react-icons/fa";
import usePubLicUrl from "../../../Hook/PublickUrl/usePubLicUrl";
import useBaseUrl from "../../../Hook/BaseUrl/useBaseUrl";
import Swal from "sweetalert2";



const imgUplodeKey = import.meta.env.VITE_IMAGE_HOSTTING;
const imgUplodeApi = `https://api.imgbb.com/1/upload?key=${imgUplodeKey}`;
const AddItem = () => {
    const axiousUrl = usePubLicUrl();
    const baseUrl = useBaseUrl();
    const { register, handleSubmit } = useForm();
    const onSubmit =async (data) =>{
        console.log(data);
        // Image uplode in Imgbb--------
        const imgFile = {image: data.image[0]}
        const res = await axiousUrl.post(imgUplodeApi,imgFile,{
            headers:{"Content-Type": "multipart/form-data"}
        })
        console.log(res.data)
        console.log(res.data.display_url)
        if (res.data.success) {
            // Now Sent the menu item in mongodb---
            const menuItem = {
                name:data.name,
                category:data.category,
                price:parseFloat(data.price),
                recipe:data.recipe,
                image:res.data.data.display_url
            };
            const menuRes = await baseUrl.post('/menu',menuItem);
            // console.log(menuRes.data.insertedId)
            if (menuRes.data.insertedId) {
                Swal.fire({
                    title: "Successfully Add your Item",
                    width: 600,
                    padding: "3em",
                    color: "#716add",
                    background: "#fff url('../../../assets/home/banner.jpg')",
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("../../../assets/nyan-cat.gif")
                      left top
                      no-repeat
                    `
                  });
            }
        }
    }
    return (
        <div className="mt-5 ">
            <HeadTitle subHadding={"What's new?"} hadding={'ADD AN ITEM'}></HeadTitle>
            <div className="w-[90%] m-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" space-y-3">
                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Food Name*</span>
                                </div>
                                <input type="text" {...register("name", { required: true })} placeholder="Food Name" className="input input-bordered w-full" />

                            </label>
                        </div>
                        <div className="flex gap-6">
                            {/* category */}
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Category*</span>
                                </div>
                                <select defaultValue="default" {...register("category", { required: true })} className="select select-bordered">
                                    <option disabled value="default">Pick a Category</option>
                                    <option>salad</option>
                                    <option>drinks</option>
                                    <option>dessert</option>
                                    <option>pizza</option>
                                    <option>soup</option>
                                </select>
                            </label>
                            {/* Price */}
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Price*</span>
                                </div>
                                <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />

                            </label>
                        </div>
                        <div>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Recipe Details*</span>

                                </div>
                                <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                            </label>
                        </div>
                        <input type="file" {...register("image", { required: true })} className="file-input  w-full max-w-xs" />
                    </div>
                    <button className="btn mt-4 btn-primary">Add Item <FaUtensils ></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;