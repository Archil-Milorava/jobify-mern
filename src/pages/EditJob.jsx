import axios from "axios";
import { redirect, useLoaderData, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form } from "react-router-dom";
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants";

export const loader = async ({ params }) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/jobs/${params.id}`,
      {
        withCredentials: true,
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const newJob = Object.fromEntries(formData);

  try {
    await axios.patch(
      `http://localhost:3000/api/v1/jobs/${params.id}`,
      newJob,
      { withCredentials: true }
    );
    return redirect("../all-jobs");
  } catch (error) {
    console.log(error);
  }
};

const EditJob = () => {
  const { job } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="POST" className="form">
        <h4 className="form-title">edit job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" defaultValue={job.position} />
          <FormRow type="text" name="company" defaultValue={job.company} />
          <FormRow
            type="text"
            name="jobLocation"
            defaultValue={job.jobLocation}
          />

          <FormRowSelect
            name="jobStatus"
            labelText="job status"
            defaultValue={job.jobStatus}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            name="jobType"
            labelText="job type"
            defaultValue={job.jobStatus}
            list={Object.values(JOB_TYPE)}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-block form-btn"
          >
            {isSubmitting ? "Loading..." : "save changes"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditJob;
