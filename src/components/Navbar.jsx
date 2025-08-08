import { NavLink } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between py-5">
      <div>
        <NavLink to="/">
          <img src={logo} alt="areka" className="w-[184px] h-[70px]" />
        </NavLink>
      </div>
      <div className="space-x-5 text-xl text-gray-700">
        <NavLink to="blog">Blog</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
