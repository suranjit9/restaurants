import Banner from "./Banner";
import Cetagori from "./Cetagori";
import ChefService from "./ChefService";
import FavManue from "./FavManue";


const Home = () => {
    return (
        <>
        <Banner></Banner>
        <div className="w-5/6 m-auto">
            <Cetagori></Cetagori>
            <ChefService></ChefService>
            <FavManue></FavManue>
        </div>
        </>
        
    );
};

export default Home;