import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import seedData from "../pages/seedsData";
import { setCategory } from "../redux/slice/CategorySlice";
const CategoryMenu = () => {

   const dispatch = useDispatch()
   const [categoryies, setCategoryies] = useState([])

   const selectorCategory = useSelector((state) => state.category)

   const listOfcategory = () => {
      const uniqueCategory = [...new Set(seedData.map((seedItem) => seedItem.category)),];
      setCategoryies(uniqueCategory);
      console.log(uniqueCategory);
   };
   useEffect(() => {
      listOfcategory();
   }, []);

   return (
      <div className="flex flex-col justigy-center items-center  border-b-2 pb-7">
         <div className=" flex gap-5 scroll-smooth lg:overflow-x-hidden mt-10">
            <button onClick={() =>
               dispatch(setCategory("All"))}
               className={`px-3 py-2 bg-gray-300 font-bold rounded-lg mt-4 border-white border-2
                ${selectorCategory === "All" && "bg-emerald-700 text-white"}`}>
               Seeds
            </button>

            {categoryies.map((category, index) => {
               return (
                  <button
                     onClick={() => dispatch(setCategory(category))
                     } key={index} className={`px-3 py-2 bg-gray-300 font-bold rounded-lg mt-4 border-white border-2
                ${selectorCategory === category && "bg-emerald-700 text-white"}`}>
                     {category}
                  </button>
               );
            })}
         </div>
      </div>
   )
}
export default CategoryMenu