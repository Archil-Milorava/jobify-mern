import axios from "axios";
import JobContainer from "../components/JobContainer";
import SearchJob from "../components/SearchJob";
import { useLoaderData } from "react-router-dom";
import { createContext, useContext } from "react";

export const loader = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/v1/jobs", {
      withCredentials: true,
    });

    return { data };
  } catch (error) {
    console.log(error);
  }
};

const jobContext = createContext();
const AllJobs = () => {
  const { data } = useLoaderData();

  return (
    <>
      <jobContext.Provider value={{data}}>
        <SearchJob />
        <JobContainer />
      </jobContext.Provider>
    </>
  );
};

export const useAllJobsContext = () => useContext(jobContext);

export default AllJobs;
