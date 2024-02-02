import Navigation from "../components/Navigation";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Checkout = () => {
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
              >
                <div className="w-100">
                  <select name="" id="" className=" form-control form-select">
                    <option value="" selected disabled>
                      Select City
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex align-items-center justify-content-between">
                    <Link to="/cart" className="button link">
                      Return to cart
                    </Link>
                    <Link to="/cart" className="button link">
                      Continue to shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25">
                    <img
                      src="../../src/assets/watch.jpg"
                      alt="product name"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <h5 className="title">Watch</h5>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5>100.000đ</h5>
                  <span>x1</span>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p>Subtotal</p>
                <p>100.000đ</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">Shipping</p>
                <p className="mb-0">100.000đ</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4>Total</h4>
              <h5>100.000đ</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
