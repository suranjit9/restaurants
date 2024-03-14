import axios from "axios";


const useBaseUrl = () => {
    const axiousUrl = axios.create({
        baseURL:'http://localhost:5000'
    });
    return axiousUrl;
};

export default useBaseUrl;