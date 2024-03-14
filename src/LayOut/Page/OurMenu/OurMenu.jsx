import PageBanner from "../../ShearPage/PageBanner";
import img1 from "../../../assets/menu/banner3.jpg"
import sectionImage from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import soupImage from '../../../assets/menu/soup-bg.jpg'
import HeadTitle from "../../ShearPage/HeadTitle";
import useMenu from "../../../Hook/useMenu";
import FoodenuSection from "./FoodenuSection";


const OurMenu = ({ headder, subHeadder, img }, {fooditem, sectionimg, sectionheadder, sectionsubHeadder}) => {
    const [menu] = useMenu();
    const todayOffer = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    
    
    return (
        <div className="space-y-8">
            <PageBanner
                img={img1}
                headder={'OUR MENU'}
                subHeadder={'Would you like to try a dish?'}
            ></PageBanner>
            <div className="w-5/6 m-auto">
                <HeadTitle
                    hadding='Dont miss'
                    subHadding='TODAYS OFFER'
                ></HeadTitle>
            </div>

            <FoodenuSection fooditem={todayOffer} sectionimg={sectionImage} category={'offered'}></FoodenuSection>
            <FoodenuSection fooditem={dessert} sectionimg={sectionImage} sectionheadder={'dessert'} category={'dessert'}></FoodenuSection>
            <FoodenuSection fooditem={pizza} sectionimg={pizzaImage} sectionheadder={'pizza'} category={'pizza'}></FoodenuSection>
            <FoodenuSection fooditem={salad} sectionimg={saladImage} sectionheadder={'salad'} category={'salad'}></FoodenuSection>
            <FoodenuSection fooditem={soup} sectionimg={soupImage} sectionheadder={'soup'} category={'soup'}></FoodenuSection>

        </div>
    );
};

export default OurMenu;