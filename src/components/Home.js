import React from "react";
import bgimg from "../images/bg.png"
import Products from "./Products";
import { NavLink } from "react-router-dom";
import img2 from "../images/img2.png";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { PiYoutubeLogoBold } from "react-icons/pi";

const Home = ({ sideBar, setSideBar }) => {

    return (
        <div>
            <img src={bgimg} alt="img" className="h-[100vh] w-[100vw] ">
            </img>
            <div className="mt-24 text-center">
                <h1 className="text-4xl ">Our <span className="text-emerald-900 uppercase">Products</span></h1>
                <div className="flex gap-10 justify-center mt-10">
                    <div>
                        <img src="https://png.pngtree.com/thumb_back/fw800/background/20221128/pngtree-farmer-sprays-fungicide-and-pesticide-on-potato-bushes-for-effective-crop-protection-photo-image_42446908.jpg"
                            className=" h-[34vh] w-[22vw] " />
                        <div className="w-[22vw] h-[30vh] bg-gray-100 px-10 py-7 hover:-translate-y-10  transition-all
             duration-500 z-50">
                            <NavLink to="/herbicides" className="text-xl text-emerald-900 font-semibold">Agrochemicals</NavLink>
                            <p className="mt-7">An agrochemical or agrichemical, a contraction of agricultural
                                chemical, is a chemical product used in agriculture. </p>
                        </div>
                    </div>
                    <div className="">
                        <img src="https://melissaknorris.com/wp-content/uploads/2022/05/Bean-Seeds_MKN.jpg"
                            className="relative h-[34vh] w-[22vw]" />
                        <div className="w-[22vw] h-[30vh] bg-gray-100 px-10 py-7 hover:-translate-y-10  transition-all
             duration-500 z-50">
                            <NavLink to="/seeds" className="text-xl text-emerald-900 font-semibold">Seeds</NavLink>
                            <p className="mt-7">We’re a global innovation powerhouse with local, passionate,
                                expert teams collaborating with farmers </p>
                        </div>
                    </div>
                    <div className="">
                        <img src="https://i0.wp.com/www.india-briefing.com/news/wp-content/uploads/2021/11/MicrosoftTeams-image-6.jpg?fit=900%2C506&ssl=1"
                            className="relative h-[34vh] w-[22vw]" />
                        <div className="w-[22vw] h-[30vh] bg-gray-100 px-10 py-7 hover:-translate-y-10  transition-all
             duration-500 z-50">
                            <NavLink to="/agriMarketing" className="text-xl text-emerald-900 font-semibold">Agriculture Marketing</NavLink>
                            <p className="mt-7">Sampann krishi accommodates direct transactions between buyers and sellers. </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img2} className="h-[86vh] w-[100vw] mt-20" />
                </div>
                <div className="my-32">
                    <h1 className="text-emerald-900 font-semibold text-5xl">Connect with us</h1>
                    <p className="my-10">Follow us on social media for the latest news, updates and stories!</p>
                    <div className="flex gap-5 text-4xl justify-center">
                        <BsInstagram className="text-3xl mt-1 cursor-pointer" />
                        <AiOutlineFacebook className=" mt-1 cursor-pointer" />
                        <PiLinkedinLogoBold className=" mt-1 cursor-pointer" />
                        <PiYoutubeLogoBold className=" mt-1 cursor-pointer" />
                    </div>
                </div>

            </div>
            <Products sideBar={sideBar} setSideBar={setSideBar} />
        </div>
    )
}
export default Home