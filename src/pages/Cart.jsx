import Navigation from "../components/Navigation";
import Meta from "../components/Meta";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <Navigation title="Cart" />

      <Container classChild="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 d-flex align-items-center gap-10">
                <div>
                  <img
                    src="../../src/assets/watch.jpg"
                    alt="product name"
                    className="img-fluid"
                  />
                </div>
                <div className="w-75">
                  <h5>Apple 14 Promax</h5>
                  <p>Color: red</p>
                  <p>Size: S</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">100.000đ</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    type="number"
                    name=""
                    id=""
                    min={1}
                    max={10}
                    className="form-control"
                  />
                </div>

                <div>
                  <MdDelete className="text-danger " />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">100.000đ</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2">
            <div className="d-flex justify-content-between">
              <p>Taxes and shipping calculated at checkout</p>
              <div>
                <h5>SubTotal: 100.000đ</h5>
                <Link to="/checkout" className="button link">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
