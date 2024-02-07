import Navigation from "../components/Navigation";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../features/users/userSlice";
import { useEffect } from "react";

const SignUp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:5173/api/user/register")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      userName: Yup.string()
        .required("User name is required")
        .min(4, "Have at least 4 characters"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "Minimum eight characters, at least one letter and one number"
        ),
      confirmPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
    }),

    onSubmit: (values) => {
      dispatch(registerUser(values));
      useEffect(() => {
        fetch("api/user/register", {
          method: "POST",
          body: JSON.stringify(values),
        });
      }, []);
    },
  });

  return (
    <>
      <Meta title="Sign Up" />
      <Navigation title="Sign Up" />

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
                  type={"email"}
                  name={"email"}
                  placeholder={"Email"}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />

                {formik.errors.email && (
                  <div className="error">{formik.errors.email}</div>
                )}

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

                <CustomInput
                  type={"password"}
                  name={"confirmPassword"}
                  placeholder={"Confirm Password"}
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                />

                {formik.errors.confirmPassword && (
                  <div className="error">{formik.errors.confirmPassword}</div>
                )}

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
