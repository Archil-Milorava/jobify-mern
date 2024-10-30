import {  useAllJobsContext } from "../pages/AllJobs"
import Wrapper  from "../assets/wrappers/JobsContainer"
import Job from "./Job";

const JobContainer = () => {
  const {data} = useAllJobsContext()
  const jobs = data.jobs;
  

  if(jobs.length === 0) {
    return <Wrapper>
      <h1>No jobs to display</h1>
    </Wrapper>
  }

  return <Wrapper>
    <div className="jobs">

    {
      jobs.map((job) => {
        return <Job key={job._id} {...job} />
      })
  }
  </div>
  
  </Wrapper>
}

export default JobContainer