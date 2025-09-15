import jadooLogo from "../assets/svgs/logo.svg";
import { Link, NavLink } from "react-router";
import LanguagueDropdown from "./LanguagueDropdown";

function NavBar() {
  return (
    <nav className="flex items-center font-medium justify-between">
      {/* Logo */}
      <img src={jadooLogo} alt="Jadoo Logo" className="mr-[13.875rem]" />
      {/* Links */}
      <div className="flex items-center">
        <ul className="flex gap-x-[3.75rem] mr-[5.375rem] ">
          <li>
            <NavLink
              to="/destinations"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Destinations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hotels"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Hotels
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/flights"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Flights
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bookings"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Bookings
            </NavLink>
          </li>
        </ul>
        {/* Buttons */}
        <div className="flex items-center">
          <ul className="flex gap-x-[3.25rem] items-center m-[2.5rem]">
            <li>
              <Link>Login</Link>
            </li>
            <li className="border-1 rounded-[5px] px-3 py-1.5">
              <Link>Sign up</Link>
            </li>
          </ul>
          {/* Langugue dropdown button */}
          <LanguagueDropdown />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
