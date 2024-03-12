

const ManueCard = (menuitem) => {
    // console.log(menuitem)
    const {name, recipe, image, price}=menuitem.menuitem;
    return (
        <div>
          <div className="flex gap-3">
            <img className="menucarimg w-[120px] h-[100px]" src={image} alt="" />
            <div>
            <h2 className="text-xl">{name}---------</h2>
            <p className="opacity-80">{recipe}</p>
            
            </div>
            <h2 className="text-orange-500 font-bold">${price}</h2> 
          </div>
        </div>
    );
};

export default ManueCard;