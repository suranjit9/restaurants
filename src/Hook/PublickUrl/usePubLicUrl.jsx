import axios from "axios";


const usePubLicUrl = () => {
    const axiousUrl = axios.create({
        baseURL:'http://localhost:5000'
    });
    return axiousUrl;
};

export default usePubLicUrl;