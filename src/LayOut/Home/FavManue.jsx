import { useEffect, useState } from "react";
import ManueCard from "../ShearPage/ManueCard";
import HeadTitle from "../ShearPage/HeadTitle";
import useMenu from "../../Hook/useMenu";


const FavManue = () => {
    const [menu] = useMenu();
 
    const populormanue = menu.filter(i => i.category === "popular");
      

    return (
        <section >
            <HeadTitle
            subHadding={"Check it out"}
            hadding={"FROM OUR MENU"}
            ></HeadTitle>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {
              populormanue.map(item =><ManueCard
              key={item._id}
              menuitem={item}
              ></ManueCard>)  
            }
        </div>
        <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4">View All</button>
        </div>
        </section>
    );
};

export default FavManue;