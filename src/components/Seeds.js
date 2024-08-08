import seedData from "../pages/seedsData"
import SeedsItem from "./SeedsItem"
import CategoryMenu from "./CategoryMenu"
import { useSelector } from "react-redux"
const Seeds = () => {

  const selectCategory = useSelector((state) => state.category);
  return (
    <div>
      <img src="https://nourishyou.in/cdn/shop/files/EdibleSeeds_Desktop_1.png?v=1702309271" className="h-[32rem] w-[100vw] pt-14" />
      <CategoryMenu />
      <div className="flex flex-wrap justify-center mx-60 mt-14 gap-10 transition-all duration-700">
        {
          seedData.filter((food) => {

            if (selectCategory === "All") {
              return food;
            }
            else {
              return selectCategory === food.category;
            }
          }).map((seedItem) => (
            <SeedsItem
              key={seedItem.id}
              id={seedItem.id}
              name={seedItem.name}
              price={seedItem.price}
              desc={seedItem.desc}
              rating={seedItem.rating}
              img={seedItem.img}
              img2={seedItem.img2}

            />
          ))
        }
      </div>
    </div>
  )
}
export default Seeds