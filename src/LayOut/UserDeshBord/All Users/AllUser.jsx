import { useQuery } from "@tanstack/react-query";
import useBaseUrl from "../../../Hook/BaseUrl/useBaseUrl";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { FaUserShield, FaUsers } from "react-icons/fa";


const AllUser = () => {
    const baseUrl = useBaseUrl();
    const {data: users =[], refetch} = useQuery({
        queryKey:['users'],
        queryFn: async () =>{
            const res = await baseUrl.get('/users');
            return res.data;
        }
    });
    // Make Admin--------
    const handleMakeAdmin = (i)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be Make Admin",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                baseUrl.patch(`/users/admin/${i._id}`)
                    .then(res => {
                        refetch();
                        if (res.data.modifiedCount > 0) {
                              Swal.fire({
                                title: "Successfully Make!",
                                text: `${i.Name} Make Admin`,
                                icon: "success"
                              }); 
                        }
                    })

            }
        });
    }
    // Delete user-------
    const handleDelet = (i) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                baseUrl.delete(`/users/${i._id}`)
                    .then(res => {
                        refetch();
                        if (res.data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              }); 
                        }
                    })

            }
        });

    }
    return (
        <>
        <div className="flex justify-evenly mt-3 text-2xl">
           <h2>All Users</h2>
           <h2>Total Users : {users.length}</h2>
        </div>
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Roul</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((i, index) =><tr key={i._id}>
            <th>{index +1}</th>
            <td>{i.Name}</td>
            <td>{i.email}</td>
            <td>
           {i.role === 'Admin'? <FaUserShield className="text-2xl " /> :
           <button onClick={() => handleMakeAdmin(i)} className="btn btn-outline hover:bg-slate-300 "><FaUsers className="text-2xl text-red-800" /></button>}
            </td>
            <td>
            <button onClick={() => handleDelet(i)} className="btn btn-ghost "><MdDeleteOutline className="text-2xl text-red-800" /></button>
            </td>
          </tr> )
      }
      
     
    </tbody>
  </table>
</div>
        </>
    );
};

export default AllUser;