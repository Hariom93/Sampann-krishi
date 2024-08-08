import fungisidesData from "../pages/fungisidesData";
import ItemsCard from "./ItemsCard";

const Fungisides = () => {
   return (
      <div>
         <img src="https://www.syngenta.co.in/sites/g/files/kgtney376/files/styles/syn_full_width_scale/public/media/image/2022/08/01/new_banner_all_5_products_with_veggies_r_2.png?itok=0_smY2NB"
            alt="img" className="w-[100vw] h-[80vh]" />
         <div className="flex flex-wrap justify-center mx-60 mt-14 gap-10 transition-all duration-700">
            {
               fungisidesData.map((fungisideItem) => (
                  <ItemsCard
                     id={fungisideItem.id}
                     name={fungisideItem.name}
                     price={fungisideItem.price}
                     desc={fungisideItem.desc}
                     rating={fungisideItem.rating}
                     img={fungisideItem.img}

                  />
               ))
            }
         </div>
      </div>
   )
}
export default Fungisides;