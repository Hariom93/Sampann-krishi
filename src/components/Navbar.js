
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../images/logo.png"
const Navbar = ({ setSideBar }) => {

    return (
        <div className="text-white flex bg-emerald-900 w-full absolute justify-evenly text-xl py-2 items-center">
            <div className="flex gap-5 cursor-pointer">
                <AiOutlineMenu className="mt-3" onClick={() => {
                    setSideBar(true)
                }} />
                <NavLink to="/">
                    <img src={logo} className="h-12 w-34 " />
                </NavLink>
            </div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/careers">Careers</NavLink>
        </div>
    )
}
export default Navbar