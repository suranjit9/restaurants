import useAuth from "../../../Hook/Auth/useAuth";


const UserHome = () => {
    const {user} = useAuth();
    return (
        <div className="w-[90%] mx-auto mt-5">
            <h2 className="text-3xl font-bold">WellCome <span className="text-green-700">{user?.displayName ? user?.displayName : 'Back'} .....</span>  </h2>

        </div>
    );
};

export default UserHome;