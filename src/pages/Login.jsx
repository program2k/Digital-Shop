import Navigation from "../components/Navigation";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/users/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .required("User name is required")
        .min(4, "Have at least 4 characters"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "Minimum eight characters, at least one letter and one number"
        ),
    }),

    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  return (
    <>
      <Meta title="Login" />
      <Navigation title="Login" />

      <Container classChild={"login-wrapper home-wrapper-2"}>
        <div className="row">
          <div className="col-12">
            <div className="auth-form">
              <h3 className="text-center mb-3">Login</h3>
              <form
                action=""
                className="d-flex flex-column gap-15"
                onSubmit={formik.handleSubmit}
              >
                <CustomInput
                  type={"text"}
                  name={"userName"}
                  placeholder={"User name"}
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                />

                {formik.errors.userName && (
                  <div className="error">{formik.errors.userName}</div>
                )}

                <CustomInput
                  type={"password"}
                  name={"password"}
                  placeholder={"Password"}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />

                {formik.errors.password && (
                  <div className="error">{formik.errors.password}</div>
                )}

                <div>
                  <Link to="/forgot-password" className="link mb-3">
                    Forgot Password?
                  </Link>
                  <div className="d-flex justify-content-between align-items-center gap-15">
                    <button className="button" type="submit">
                      Login
                    </button>
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
