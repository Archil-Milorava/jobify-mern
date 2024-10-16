import { NavLink } from "react-router-dom";
import links from "../utils/Links";
import { useDashboardContext } from "../pages/DashoardLayout";

const NavLinks = () => {
    const {user, toggleSidebar} = useDashboardContext()
  return (
    <div className="nav-links">
            {links.map((link) => {
              const { text, path, icon } = link;
              return (
                <NavLink key={text} to={path} className="nav-link" onClick={toggleSidebar} end>
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
  )
}

export default NavLinks