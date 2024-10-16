import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" labelText={"Email"} />
        <FormRow type="password" name="password" labelText={"password"} />
        <button className="btn btn-block" type="submit">
          Login
        </button>
        <button type="button" className="btn btn-block">
          Explore the app
        </button>
        <p>
          Don't have an account?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
