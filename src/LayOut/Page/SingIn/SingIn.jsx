import '../..//Home/home.css';
import singleft from '../../../assets/others/authentication1.png';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthCountext } from '../../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import SocileSing from '../../ShearPage/SocileSing';
const SingIn = () => {
    const captchRef = useRef(null);
    const [disable, setDisable] = useState(true);
    const { singIn } = useContext(AuthCountext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log(from);
    // captcha Start------------
    useEffect(() => {
        loadCaptchaEnginge(2);
    }, [])
    const handalCaptch = () => {
        const user_captcha_value = captchRef.current.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisable(false);
        }
    }

    // Frome--------
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        singIn(data.email, data.password)
            .then(result => {
                toast("Successfully Sing in")
                navigate(from, { replace: true });
                console.log(result.user)
            })

    };

    return (
        <section className='singimg h-screen flex justify-center items-center'>
            <Helmet>
                <title>Boss Restaurant || Singin</title>
            </Helmet>
            <div className="flex flex-wrap border shadow-2xl w-5/6 m-auto">
                <div className="pointer-events-none relative hidden  select-none bg-black md:block md:w-1/2">
                    {/* <img className="-z-1 absolute top-0 h-full w-full object-cover opacity-90" src={singleft} /> */}
                    <img className="-z-1 absolute top-0 h-full w-full object-cover opacity-90" src={singleft} alt='Coverimg' />
                </div>


                <div className="flex w-full flex-col md:w-1/2">
                    <ToastContainer />
                    {/* <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
                        <a href="#" className="border-b-gray-700 border-b-4 pb-2 text-2xl font-bold text-gray-900"> Damasus . </a>
                    </div> */}
                    <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-2">
                        <p className="text-center text-3xl font-bold">Welcome back, Olivia</p>
                        <p className="mt-2 text-center text-gray-500">Welcome back, please enter your details.</p>
                        {/* <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white"><img className="mr-2 h-5" src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" alt="img" /> Log in with Google</button> */}
                        <SocileSing></SocileSing>
                        <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
                            <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">or</div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pt-3 md:pt-8">

                            <div className="flex flex-col pt-4">
                                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                    <input type="email" {...register("email", { required: true })} className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
                                    {errors.email && <span className='mt-2 text-red-800 font-medium'>This field is required</span>}
                                </div>
                            </div>
                            <div className={`flex flex-col pt-4 ${disable ? 'mb-0' : 'mb-12'}`}>
                                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                    <input type="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ })} className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" />

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
                            {/* Text Captcha using react saimpl react captcha */}
                            {disable && <div className="mb-12 flex flex-col pt-4">
                                <LoadCanvasTemplate />
                                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                    <input type="password" ref={captchRef} className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Type The Text Avob " />
                                    <input onClick={handalCaptch} className='bg-slate-500 px-2 text-white font-medium' type="submit" value="Verify" />
                                </div>
                            </div>}
                            {/* <input type="submit" disabled={disable} value="Sing Up" className="w-full rounded-lg bg-black px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2" /> */}
                            <input type="submit" disabled={disable} value="Signin" className={`w-full rounded-lg px-4 py-2 text-center text-base font-semibold shadow-md ring-offset-2 focus:ring-2 ${disable ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-black text-white ring-gray-500'}`} />
                        </form>
                        <div className="py-12 text-center">
                            <p className="whitespace-nowrap text-gray-600">
                                Don't have an account?
                                <Link to={'/SingUP'}><span className="underline-offset-4 font-semibold text-gray-900 underline"> Sing Up</span></Link>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SingIn;