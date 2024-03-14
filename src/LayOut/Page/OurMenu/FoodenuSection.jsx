import { Link } from "react-router-dom";
import ManueCard from "../../ShearPage/ManueCard";
import SectionBanner from "../../ShearPage/SectionBanner";
import { useState } from "react";


const FoodenuSection = ({fooditem , sectionimg, sectionheadder, sectionsubHeadder, category}) => {
   
    return (
       <div>
        {sectionheadder && <SectionBanner sectionimg={sectionimg} sectionheadder={sectionheadder} sectionsubHeadder={sectionsubHeadder}></SectionBanner>}
            <div className="w-5/6 m-auto">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {
                        fooditem.map(item => <ManueCard
                            key={item._id}
                            menuitem={item}
                        ></ManueCard>)
                    }
                </div>
                <div className="text-center">
                    <Link to={`/OurShop/${category}`}>
                    <button  className="btn btn-outline border-0 border-b-4 mt-4">ORDER YOUR FAVOURITE FOOD</button>
                    </Link>
                </div>
            </div>
       </div>
    );
};

export default FoodenuSection;