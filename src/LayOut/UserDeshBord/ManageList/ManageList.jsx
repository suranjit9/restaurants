import DataTable from "react-data-table-component";
import HeadTitle from "../../ShearPage/HeadTitle";
import useMenu from "../../../Hook/useMenu";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useBaseUrl from "../../../Hook/BaseUrl/useBaseUrl";
import Swal from "sweetalert2";


const ManageList = () => {
    const [menu, refetch] = useMenu();
    const baseUrl = useBaseUrl();
    const [menuData, setMenudata] = useState([]);
    const [search, setSearch] = useState('');
    const colamm = [
        {
            name: 'No',
            cell: (row, index) => index + 1, // Add 1 to start numbering from 1 instead of 0
            sortable: false,
            width: '50px'
        },
        {
            name: 'Food Img',
            selector: (row) => <img src={row.image} width={50} height={50} alt={row.image} />
        },
        {
            name: 'name',
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: 'price',
            selector: (row) => row.price,
            sortable: true,
        },
        {
            name: 'Update',
            cell: (row) =><Link to={`/userdeshbord/updateItem/${row._id}`}><button className="btn btn-outline btn-sm">Update</button></Link>
        },
        {
            name: 'Dlete',
            cell: (row) => <Link><button className="btn btn-outline btn-sm bg-red-800 text-white" onClick={() => hendalDelate(row._id)}>Dlete</button></Link>
        }

    ];
    const hendalDelate = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await baseUrl.delete(`/menu/${id}`)
                // console.log(res.data.deletedCount < 0)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }

            }
        });
    }
    useEffect(() => {
        const result = menu.filter(food => {
            return food.name.toLowerCase().match(search.toLowerCase())
        });
        setMenudata(result);
    }, [menu, search])
    return (
        <div className="w-[90%] m-auto mt-5">
            <HeadTitle subHadding={"Hurry Up!"} hadding={'MANAGE ALL ITEMS'}></HeadTitle>
            <DataTable
                columns={colamm}
                data={menuData}
                pagination
                fixedHeader

                highlightOnHover
                selectableRowsHighlight
                subHeader
                subHeaderComponent={
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                }
            ></DataTable>
        </div>
    );
};

export default ManageList;