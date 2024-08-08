
import { AiFillStar } from "react-icons/ai";

const ItemsCard = ({ id, img, name,desc, rating, price}) =>{
    return(
        <div className="bg-gradient-to-b from-gray-200 font-bold w-[250px] bg-white p-5 flex flex-col  rounded-lg gap-4 ml-8">
        <img src={img} alt=""
          className="w-auto h-[170px] hover:scale-110 rounded-lg cursor-grab transition-all duration-500 ease-in-out"
        ></img>
        <div className="text-sm flex justify-between">
          <h2>{name}</h2>
          <span className="text-emerald-900">{price}</span>
        </div>
        <p className="text-sm font-normal ">{desc.slice(0, 50).concat("...")}</p>
        <div className="flex justify-between">
          <span className="flex justify-center items-center">
            <AiFillStar className="mr-1 text-yellow-400" />{rating}
          </span>
          </div>
      </div>
    )
}
export default ItemsCard