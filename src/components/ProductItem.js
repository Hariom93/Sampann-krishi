import logo from "../images/logo.jpeg"
import { GiFertilizerBag } from "react-icons/gi";
import { GiAppleSeeds } from "react-icons/gi";
import { GiFarmTractor } from "react-icons/gi";
import { AiOutlineStock } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const ProductItem = ({ setSideBar }) => {

  const [Box, setBox] = useState(false)



  return (
    <div>
      <RxCross2 className="bg-red-500 text-white p-1 rounded-full h-5 w-5 cursor-pointer
            ml-2"
        onClick={() => {
          setSideBar(false)
          setBox(false)
        }}
      />
      <img src={logo} alt="" className="h-16 w-54 ml-16" />
      <ul className="flex flex-col text-lg space-y-5 font-sans
                            mt-10">
        <div className="flex gap-10 items-center">
          <div className="flex gap-4 hover:bg-gray-200 px-10 items-center" onClick={() => {
            setBox(true)
          }} >
            <GiFertilizerBag className="h-10 w-10 bg-green-800 p-2 rounded-full 
            text-white cursor-pointer" />
            <li className="Roboto Slab mt-1 font-semibold cursor-pointer">Agrochemicals</li>
          </div>
          <span className={`bg-gray-100 w-56 right-[21rem] h-40 flex fixed items-center
                flex-col justify-center gap-y-2 ${Box ? "translate-x-[34rem]" :
              "translate-x-0"} 
                transition-all duration-700 border-b-4 border-green-800`}>
            <NavLink to="/herbicides" className="hover:bg-gray-200 px-16">
              Herbicides
            </NavLink>
            <NavLink to="/fungisides" className="hover:bg-gray-200 px-16">
              Fungisides
            </NavLink>
            <NavLink to="/insectisedes" className="hover:bg-gray-200 px-16">
              Insectisedes
            </NavLink>
            <p className="ml-48 absolute right-0 top-0 m-2 cursor-pointer"
              onClick={() => setBox(false)}
            >
              <RxCross2 /></p>
          </span>
        </div>

        <NavLink to="/seeds"
          className="flex gap-4 font-semibold hover:bg-gray-200 px-10 cursor-pointer items-center">
          <GiAppleSeeds className="h-10 w-10 bg-green-800 p-2 rounded-full text-white" />
          <li className="Roboto Slab mt-1">Seeds</li>
        </NavLink>

        <NavLink to="/farm machinery"
          className="flex gap-4 font-semibold hover:bg-gray-200 px-10 cursor-pointer items-center">
          <GiFarmTractor className="h-10 w-10 bg-green-800 p-2 rounded-full text-white" />
          <li className="Roboto Slab mt-1">Farm Machinery</li>
        </NavLink>

        <NavLink to="/agriMarketing"
          className="flex gap-4 font-semibold hover:bg-gray-200 px-10 cursor-pointer items-center">
          <AiOutlineStock className="h-10 w-20 bg-green-800 p-2 rounded-full text-white" />
          <li className="Roboto Slab mt-1">Agriculture Marketing and Procurement</li>
        </NavLink>
      </ul>
    </div>
  )
}
export default ProductItem