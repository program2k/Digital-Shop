import Navigation from "../components/Navigation";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const Checkout = () => {
  const productState = useSelector((state) => state.auth.cartItem.cartItems);
  const [amoutTotal, setAmoutTotal] = useState(null);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < productState?.length; i++) {
      sum =
        sum +
        Number(
          productState[i]?.quantity *
            Number(productState[i].version.split("|")[2].split(" đ")[0])
        );
      setAmoutTotal(sum);
      console.log(sum);
    }
  }, [productState]);

  const formik = useFormik({
    initialValues: {
      city: "",
      firstName: "",
      lastName: "",
      address: "",
      mobileNumber: "",
      email: "",
    },
    validationSchema: Yup.object({
      city: Yup.string().required("City is required"),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      address: Yup.string().required("Address is required"),
      mobileNumber: Yup.number().required("Mobile Number is required"),
      email: Yup.string().required("Email is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Meta title="Checkout" />
      <Navigation title="Checkout" />

      <Container classChild="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Huydeptrai</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="link text-dark">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Information
                  </li>
                  &nbsp; /<li className="breadcrumb-item">Shipping</li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title">Contact Information</h4>
              <p className="user-details">Huydeptrai (zzzhuyyzzz@gmail.com)</p>
              <form
                action=""
                className="d-flex justify-content-between gap-15 flex-wrap"
                onSubmit={formik.handleSubmit}
              >
                <div className="w-100">
                  <select
                    className=" form-control form-select"
                    name={"city"}
                    value={formik.values.city}
                    onChange={formik.handleChange}
                  >
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="Thành phố Hồ Chí Minh">
                      Thành phố Hồ Chí Minh
                    </option>
                  </select>
                  {formik.errors.city && (
                    <div className="error ms-2 my-1">{formik.errors.city}</div>
                  )}
                </div>

                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    name={"firstName"}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.firstName && (
                    <div className="error ms-2 my-1">
                      {formik.errors.firstName}
                    </div>
                  )}
                </div>

                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    name={"lastName"}
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.lastName && (
                    <div className="error ms-2 my-1">
                      {formik.errors.lastName}
                    </div>
                  )}
                </div>

                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    name={"address"}
                    value={formik.values.address}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.address && (
                    <div className="error ms-2 my-1">
                      {formik.errors.address}
                    </div>
                  )}
                </div>

                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="form-control"
                    name={"mobileNumber"}
                    value={formik.values.mobileNumber}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.mobileNumber && (
                    <div className="error ms-2 my-1">
                      {formik.errors.mobileNumber}
                    </div>
                  )}
                </div>

                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                    name={"email"}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && (
                    <div className="error ms-2 my-1">{formik.errors.email}</div>
                  )}
                </div>

                <div className="w-100">
                  <div className="d-flex align-items-center justify-content-between">
                    <Link to="/cart" className="button link">
                      Trở về giỏ hàng
                    </Link>
                    <Link to="/product" className="button link">
                      Tiếp tục mua sắm
                    </Link>
                    <button className="button" type="submit">
                      Đồng ý
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {productState &&
                productState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex gap-10 align-items-center"
                    >
                      <div className="w-75 d-flex gap-10">
                        <div className="w-25">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <h5 className="title">{item.name}</h5>
                          <p>{item.version}</p>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5>{item.version.split("|")[2]}</h5>
                        <span>x{item.quantity}</span>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p>Tổng giá trị đơn hàng</p>
                <p>{amoutTotal}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">Phí vận chuyển</p>
                <p className="mb-0">{amoutTotal / 100}</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4>Tổng cộng</h4>
              <h5>{amoutTotal + amoutTotal / 100}</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
