import axios from "axios";
import JobContainer from "../components/JobContainer";
import SearchJob from "../components/SearchJob";
import { useLoaderData } from "react-router-dom";
import { createContext, useContext } from "react";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const { data } = await axios.get(
      "http://localhost:3000/api/v1/jobs",
      {
        withCredentials: true,
        params,
      }
    );

    return { data, searchValues: {...params} };
  } catch (error) {
    console.log(error);
  }
};

const jobContext = createContext();
const AllJobs = () => {
  
  const { data, searchValues } = useLoaderData();
  

  return (
    <>
      <jobContext.Provider value={{ data, searchValues }}>
        <SearchJob />
        <JobContainer />
      </jobContext.Provider>
    </>
  );
};

export const useAllJobsContext = () => useContext(jobContext);

export default AllJobs;
