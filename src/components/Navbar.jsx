import { NavLink, useLocation } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex flex-row items-center justify-between py-5">
      <div>
        <NavLink to="/">
          <img src={logo} alt="areka" className="w-[184px] h-[70px]" />
        </NavLink>
      </div>
      <div className="space-x-5 text-xl text-gray-700">
        <NavLink
          to="/blog"
          className={
            location.pathname === "/blog" ? "text-emerald-500 font-bold" : ""
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={
            location.pathname === "/contact" ? "text-emerald-500 font-bold" : ""
          }
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
