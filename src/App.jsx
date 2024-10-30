import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Error from "./pages/Error";
import DashboardLayout from "./pages/DashoardLayout";
import AddJob from "./pages/AddJob";
import Stats from "./pages/Stats";
import AllJobs from "./pages/AllJobs";
import EditJob from "./pages/EditJob";
import Profile from "./pages/Profile";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as creaTeJobAction } from "./pages/AddJob";

import { loader as exampleLoader } from "./pages/DashoardLayout";
import { loader as allJobsLoader } from "./pages/AllJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        loader: exampleLoader,
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: creaTeJobAction,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: allJobsLoader,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "edit-job",
            element: <EditJob />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
