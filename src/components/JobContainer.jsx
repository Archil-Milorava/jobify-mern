import { useAllJobsContext } from "../pages/AllJobs";
import Wrapper from "../assets/wrappers/JobsContainer";
import Job from "./Job";
import PageBtnContainer from "./PageBtnContainer";

const JobContainer = () => {
  const { data } = useAllJobsContext();

  const {  countJobs, countOfPages, jobs } = data;

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h1>No jobs to display</h1>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {countJobs} job{Number(countJobs) > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {countOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobContainer;
