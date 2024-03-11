import Banner from "./Banner";
import Cetagori from "./Cetagori";
import ChefService from "./ChefService";


const Home = () => {
    return (
        <>
        <Banner></Banner>
        <div className="w-5/6 m-auto">
            <Cetagori></Cetagori>
            <ChefService></ChefService>
        </div>
        </>
        
    );
};

export default Home;