import Navigation from "../components/Navigation";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const ForgotPassword = () => {
  return (
    <>
      <Meta title="Forgot Password" />
      <Navigation title="Forgot Password" />

      <Container classChild={"login-wrapper home-wrapper-2"}>
        <div className="row">
          <div className="col-12">
            <div className="auth-form">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">
                We will send you an email to reset your password
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type={"text"}
                  name={"email"}
                  placeholder={"Enter your email"}
                />

                <div>
                  <div className="mt-3 d-flex flex-column justify-content-center align-items-center gap-15">
                    <button className="button border-0">Submit</button>
                    <Link to="/login" className=" link">
                      Cancel
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

export default ForgotPassword;
