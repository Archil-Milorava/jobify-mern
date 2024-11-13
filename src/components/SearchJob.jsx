import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, Link, useSubmit } from "react-router-dom";
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from "../utils/constants";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";
import { useAllJobsContext } from "../pages/AllJobs";

const SearchJob = () => {
  const { searchValues } = useAllJobsContext();

  const { jobStatus, jobType, search, sort } = searchValues;

  const submit = useSubmit();
  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">search form</h5>
        <div className="form-center">
          <FormRow
            type="search"
            name="search"
            defaultValue={search || ""}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />

          <FormRowSelect
            labelText="job status"
            name="jobStatus"
            list={["all", ...Object.values(JOB_STATUS)]}
            defaultValue={jobStatus}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />

          <FormRowSelect
            labelText="job type"
            name="jobType"
            list={["all", ...Object.values(JOB_TYPE)]}
            defaultValue={jobType}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            name="sort"
            defaultValue={sort}
            list={[...Object.values(JOB_SORT_BY)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn">
            Reset Search Values
          </Link>
          <button className="btn btn-block form-btn" type="submit">
            search
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchJob;
