

const HeadTitle = ({subHadding, hadding}) => {
    return (
        <div className="w-1/2 m-auto md:w-3/12 text-center mb-8">
            <p className="text-yellow-600 font-light pb-3">---{subHadding}---</p>
            <h2 className="md:text-3xl border-y-4 py-3 uppercase">{hadding}</h2>
        </div>
    );
};

export default HeadTitle;