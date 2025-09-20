import jadooLogo from "../assets/svgs/logo.svg";
import { Link, NavLink } from "react-router";
import LanguagueDropdown from "./LanguagueDropdown";

function NavBar() {
  return (
    <nav className="flex items-center justify-between font-medium">
      {/* Logo */}
      <img src={jadooLogo} alt="Jadoo Logo" className="mr-[13.875rem]" />
      {/* Links */}
      <div className="flex items-center">
        <ul className="mr-[5.375rem] flex gap-x-[3.75rem]">
          <li>
            <NavLink
              to="fakeSocial"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Destinations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="fakeSocial"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Hotels
            </NavLink>
          </li>
          <li>
            <NavLink
              to="fakeSocial"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Flights
            </NavLink>
          </li>
          <li>
            <NavLink
              to="fakeSocial"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Bookings
            </NavLink>
          </li>
        </ul>
        {/* Buttons */}
        <div className="flex items-center">
          <ul className="m-[2.5rem] flex items-center gap-x-[3.25rem]">
            <li>
              <Link to="fakeSocial">Login</Link>
            </li>
            <li className="rounded-[5px] border-1 px-3 py-1.5">
              <Link to="fakeSocial">Sign up</Link>
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
