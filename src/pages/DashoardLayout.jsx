import axios from "axios";
import { createContext, useContext, useState } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import BigSidebar from "../components/BigSidebar";
import Navbar from "../components/Navbar";
import SmallSidebar from "../components/SmallSidebar";

export const loader = async () => {
  const { data } = await axios.get(
    "http://localhost:3000/api/v1/users/current-user",
    { withCredentials: true }
  );

  return data;
};

const DashboardContext = createContext();

const DashoardLayout = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();


  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    try {
      navigate("/");
      await axios.post(
        "http://localhost:3000/api/v1/auth/signout",
        {},
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleSidebar,
        toggleTheme,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashoardLayout;
