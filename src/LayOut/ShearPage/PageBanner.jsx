

const PageBanner = ({headder, subHeadder, img}) => {
    return (
        <div className="hero w-full h-[300px] md:h-[600px]" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="z-50 bg-[#15151530] text-white max-w-md py-5 px-5 mx-auto md:max-w-screen-md md:py-10 md:px-40">
                    <h1 className=" text-2xl md:text-5xl font-bold uppercase">{headder}</h1>
                    <p className="mb-5">{subHeadder} </p>
                    
                </div>
            </div>
        </div>
    );
};

export default PageBanner;
