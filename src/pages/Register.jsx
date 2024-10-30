import { Form, Link, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import axios from "axios";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await axios.post("http://localhost:3000/api/v1/auth/signup", data);
   return redirect("/login")
  } catch (error) {
    console.log(error);
  }
 
};

const Register = () => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  
  return (
    <Wrapper>
      <Form method="POST" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" labelText={"Name"} />
        <FormRow type="text" name="lastName" labelText={"Last Name"} />
        <FormRow type="text" name="location" labelText={"Location"} />
        <FormRow type="email" name="email" labelText={"Email"} />
        <FormRow type="password" name="password" labelText={"password"} />
        <button className="btn btn-block" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Register"}
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
