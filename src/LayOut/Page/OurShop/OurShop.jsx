import PageBanner from "../../ShearPage/PageBanner";
import pageBAnner from '../../../assets/shop/banner2.jpg';
import useMenu from "../../../Hook/useMenu";
import ShopCard from "./ShopCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import { useParams } from "react-router-dom";


const OurShop = ({ headder, subHeadder, img }, { item }) => {
    // recive category
    const {category} = useParams();
    // Created a array for my Tab category (exactly same)
    const categoryList = ["offered" ,"salad", "pizza" , "soups", "dessert", "drinks"];
    // Chack my recive tab and currnt tab and set my Tab clint page
    const inisialcategory = categoryList.indexOf(category);
    

    const [menu] = useMenu();
    const [indexe, setIndex] = useState(inisialcategory);
 
    const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <PageBanner headder={'our Shop'} subHeadder={'Would you like to try a dish?'} img={pageBAnner}  ></PageBanner>
            
            <Tabs className={"my-4 text-center border-b-0"} defaultIndex={indexe} onSelect={(index) => setIndex(index)}>
                <TabList className={"text-xl active:underline"}>
                    <Tab>Offered</Tab>
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                <ShopCard item={offered}></ShopCard>
                </TabPanel>
                <TabPanel>
                <ShopCard item={salad}></ShopCard>
                </TabPanel>
                <TabPanel>
                <ShopCard item={pizza}></ShopCard>
                </TabPanel>
                <TabPanel>
                <ShopCard item={soup}></ShopCard>
                </TabPanel>
                <TabPanel>
                <ShopCard item={dessert}></ShopCard>
                </TabPanel>
                <TabPanel>
                <ShopCard item={drinks}></ShopCard>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OurShop;