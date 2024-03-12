

const SectionBanner = ({sectionimg, sectionheadder, sectionsubHeadder}) => {
    return (
        <div className="hero w-full mt-4 mb-4" style={{ backgroundImage: `url(${sectionimg})` }}>
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="z-50 bg-[#15151530] text-white max-w-md py-5 px-5 mx-auto md:max-w-screen-md md:py-10 my-16 md:px-40">
                    <h1 className=" text-2xl md:text-5xl font-bold uppercase">{sectionheadder}</h1>
                    <p className="mb-5">{sectionsubHeadder} </p>

                </div>
            </div>
        </div> 
    );
};

export default SectionBanner;