import Navigation from "../components/Navigation";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const SignUp = () => {
  return (
    <>
      <Meta title="Sign Up" />
      <Navigation title="Sign Up" />

      <Container classChild={"login-wrapper home-wrapper-2"}>
        <div className="row">
          <div className="col-12">
            <div className="auth-form">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type={"text"}
                  name={"email"}
                  placeholder={"Email"}
                />

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

                <CustomInput
                  type={"password"}
                  name={"password"}
                  placeholder={"Confirm Password"}
                />

                <div>
                  <div className="d-flex justify-content-center align-items-center gap-15">
                    <button className="button">Sign Up</button>
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

export default SignUp;
