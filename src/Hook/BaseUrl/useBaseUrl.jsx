import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../Auth/useAuth";


const axiousUrl = axios.create({
    baseURL: 'http://localhost:5000'
});
const useBaseUrl = () => {
    const naveget = useNavigate();
    const {logOut}=useAuth();
    // Add a request interceptor
    axiousUrl.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access_token')

        // console.log('baseUrl token',token)
        config.headers.authoriztion = `Bearer ${token}`;
        // console.log('baseUrl token',config)
        return config;
        
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    // Add a response interceptor
    axiousUrl.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },async function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
       
        const status = error.response.status;
        
        if (status === 401 || status === 403) {
            await logOut();
            naveget('/Singin');
        }
        console.log({status})
        return Promise.reject(error);
    });

    return axiousUrl;
};

export default useBaseUrl;