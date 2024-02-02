import Navigation from "../components/Navigation";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const ResetPassword = () => {
  return (
    <>
      <Meta title="Reset Password" />
      <Navigation title="Reset Password" />

      <Container classChild={"login-wrapper home-wrapper-2"}>
        <div className="row">
          <div className="col-12">
            <div className="auth-form">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <form action="" className="d-flex flex-column gap-15">
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
                  <div className="mt-3 d-flex flex-column justify-content-center align-items-center gap-15">
                    <button className="button border-0">Ok</button>
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

export default ResetPassword;
