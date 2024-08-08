import { AiFillStar } from "react-icons/ai";

const SeedsItem = ({ id, img, img2, name, desc, rating, price }) => {
  return (
    <div className="border from-gray-200  w-[280px] bg-white p-6 flex flex-col  rounded-lg gap-2 ml-1">
      <img src={img} alt=""
        className="w-[240px] h-[180px] absolute hover:rotate-180 hover:-translate-y-44 transition-all duration-900 rounded-lg cursor-grab transition-all duration-500 ease-in-out"
      ></img>
      <img src={img2} alt=""
        className="w-auto h-[170px]  rounded-lg cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="flex justify-between font-semibold mt-3">
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
export default SeedsItem