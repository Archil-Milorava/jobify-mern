import { Form, Link, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import axios from "axios";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await axios.post("http://localhost:3000/api/v1/auth/signin", data, {
      withCredentials: true,
    });

    return redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

const Login = () => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="POST" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" labelText={"name"} />
        <FormRow type="password" name="password" labelText={"password"} />
        <button className="btn btn-block" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading..." : "Login"}
        </button>
        <button type="button" disabled={isSubmitting} className="btn btn-block">
          Explore the app
        </button>
        <p>
          Don't have an account?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
