import Navigation from "../components/Navigation";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <>
      <Meta title="Login" />
      <Navigation title="Login" />

      <Container classChild={"login-wrapper home-wrapper-2"}>
        <div className="row">
          <div className="col-12">
            <div className="auth-form">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type={"text"}
                  name={"username"}
                  placeholder={"User name"}
                />

                <CustomInput
                  type={"password"}
                  name={"password"}
                  placeholder={"Password"}
                />

                <div>
                  <Link to="/forgot-password" className="link mb-3">
                    Forgot Password?
                  </Link>
                  <div className="d-flex justify-content-between align-items-center gap-15">
                    <button className="button">Login</button>
                    <Link to="/sign-up" className="button signup link">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
