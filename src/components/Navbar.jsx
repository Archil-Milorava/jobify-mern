import { FaAlignLeft } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Navbar";
import { useDashboardContext } from "../pages/DashoardLayout";
import Logo from "./Logo";
import LogoutContainer from "./LogoutContainer";

const Navbar = () => {
const {toggleSidebar} = useDashboardContext()


  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" type="button" onClick={toggleSidebar} >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
          {/* <ThemeToggle /> */}
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
