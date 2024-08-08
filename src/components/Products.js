import React from "react";
import ProductItem from "./ProductItem";
const Products = ({ sideBar, setSideBar }) => {
    return (
        <div>
            <div className={`fixed bg-g right-[96rem] top-0 w-[20vw] h-full p-5 
            bg-white mb-3
            ${sideBar ? "translate-x-full" : "translate-x-0"} transition-all
             duration-500 z-50`}>
                <ProductItem setSideBar={setSideBar} />
            </div>
        </div>
    )
}
export default Products