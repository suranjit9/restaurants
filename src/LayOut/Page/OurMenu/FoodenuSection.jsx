import ManueCard from "../../ShearPage/ManueCard";
import SectionBanner from "../../ShearPage/SectionBanner";


const FoodenuSection = ({fooditem , sectionimg, sectionheadder, sectionsubHeadder}) => {
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
                    <button className="btn btn-outline border-0 border-b-4 mt-4">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>
       </div>
    );
};

export default FoodenuSection;