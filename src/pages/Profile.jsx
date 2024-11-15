import { useNavigation, useOutletContext, Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import FormRow from "../components/FormRow";
import axios from "axios";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("avatar");

  if (file && file.size > 500000) {
    return {
      error: "Image size too large",
    };
  }

  try {
    await axios.patch(
      "http://localhost:3000/api/v1/users/update-user",
      formData,
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    console.log(error);
  }

  return null;
};

const Profile = () => {
  const { user } = useOutletContext();
  const { name, lastName, email, location } = user;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
        <h4 className="form-title">profile</h4>
        <div className="form-center">
          <FormRow type="text" name="name" defaultValue={name} />
          <FormRow
            type="text"
            name="lastName"
            labelText="last name"
            defaultValue={lastName}
          />
          <FormRow type="email" name="email" defaultValue={email} />
          <FormRow type="text" name="location" defaultValue={location} />
          <button
            className="btn btn-block form-btn"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
