import { useForm } from 'react-hook-form';
import singleft from '../../../assets/others/authentication1.png';
import '../../Home/home.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthCountext } from '../../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SingUp = () => {
    const {createdUser, updatProfile} = useContext(AuthCountext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) =>{
        createdUser(data.email, data.password)
        .then(result =>{
            console.log(result.user)
            updatProfile(data.name, data.photo)
            .then(()=>{
                console.log('updata profile')
                toast("Successfully Sing in")

            })
        })
    };
    return (
        <section className='singimg h-screen flex justify-center items-center'>
            <div className="flex flex-wrap border shadow-2xl w-5/6 m-auto">
                <div className="pointer-events-none relative hidden  select-none bg-black md:block md:w-1/2">
                    {/* <img className="-z-1 absolute top-0 h-full w-full object-cover opacity-90" src={singleft} /> */}
                    <img className="-z-1 absolute top-0 h-full w-full object-cover opacity-90" src={singleft} alt='hello' />
                </div>
                <ToastContainer />

                <div className="flex w-full flex-col md:w-1/2">
                    {/* <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
                        <a href="#" className="border-b-gray-700 border-b-4 pb-2 text-2xl font-bold text-gray-900"> Damasus . </a>
                    </div> */}
                    <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-2">
                        <p className="text-center text-3xl font-bold">Welcome back, Olivia</p>
                        <p className="mt-2 text-center text-gray-500">Welcome back, please enter your details.</p>
                        <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white"><img className="mr-2 h-5" src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" alt='hhhhh' /> Log in with Google</button>
                        <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
                            <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">or</div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pt-3 md:pt-8">
                            <div className="flex flex-col pt-4">
                                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                    <input type="text" {...register("name", { required: true })} className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter Your Name" />
                                    {errors.name && <span className='mt-2 text-red-800 font-medium'>This field is required</span>}
                                </div>
                            </div>
                            <div className="flex flex-col pt-4">
                                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                    <input type="text" {...register("photo", { required: true })} className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter Your Photo Url" />
                                    {errors.photo && <span className='mt-2 text-red-800 font-medium'>This field is required</span>}
                                </div>
                            </div>
                            <div className="flex flex-col pt-4">
                                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                    <input type="email" {...register("email",{ required: true })} className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
                                    {errors.email && <span className='mt-2 text-red-800 font-medium'>This field is required</span>}
                                </div>
                            </div>
                            <div className="mb-12 flex flex-col pt-4">
                                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                    <input type="password" {...register("password", { required: true, minLength: 6, pattern:/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ })} className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" />
                                    
                                </div>
                                {errors.password?.type === "required" && (
                                        <p className='mt-2 text-red-800 font-medium'>Password is required</p>
                                    )}
                                    {errors.password?.type === "minLength" && (
                                        <p className='mt-2 text-red-800 font-medium'>Password Need to 6 Caracters</p>
                                    )}
                                    {errors.password?.type === "pattern" && (
                                        <p className='mt-2 text-red-800 font-medium'>Please Use One letter One Lower letter One Number and One Any Symbul</p>
                                    )}
                            </div>
                            <input type="submit" value="Sing Up" className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2" />

                        </form>
                        <div className="py-12 text-center">
                            <p className="whitespace-nowrap text-gray-600"> Alredy Have an Account
                                <Link to={'/Singin'}><span className="underline-offset-4 font-semibold text-gray-900 underline"> Log In</span></Link>
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
          <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
            <p className="mb-8 text-3xl font-semibold leading-10">We work 10x faster than our compeititors and stay consistant. While they're bogged won with techincal debt, we're realeasing new features.</p>
          </div>
          <img className="-z-1 absolute top-0 h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </div> */}
            </div>
        </section>


    );
};

export default SingUp;