import {
  Form,
  redirect,
  useNavigate,
  useNavigation,
  useOutletContext,
} from "react-router-dom";
import FormRow from "../components/FormRow";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import FormRowSelect from "../components/FormRowSelect";
import axios from "axios";

export const action = async ({ request }) => {
  const data = await request.formData();
  const job = Object.fromEntries(data);

  try {
    await axios.post("http://localhost:3000/api/v1/jobs", job, {withCredentials: true});

    return redirect("all-jobs");
  } catch (error) {
    console.log(error);
  }
};

const addJob = () => {
  const { user } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="POST" className="from">
        <h4 className="form-title">add job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" />
          <FormRow type="text" name="company" />
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            defaultValue={user.location}
          />
          <FormRowSelect
            name="jobStatus"
            list={Object.values(JOB_STATUS)}
            defaultValue={JOB_STATUS.PENDING}
            labelText="Job status"
          />
          <FormRowSelect
            name="job tpye"
            list={Object.values(JOB_TYPE)}
            defaultValue={JOB_TYPE.FULL_TIME}
            labelText="Job type"
          />

          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default addJob;
