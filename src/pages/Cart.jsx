import Navigation from "../components/Navigation";
import Meta from "../components/Meta";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCart, removeCart, updateCart } from "../features/users/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(null);
  const [amoutTotal, setAmoutTotal] = useState(null);
  const cartState = useSelector((state) => state.auth.cartItem.cartItems);

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const handleRemoveCart = (id) => {
    dispatch(removeCart(id));
    setTimeout(() => {
      dispatch(getCart());
    }, 500);
  };

  // chưa xử lý được update
  useEffect(() => {
    handleUpdateCart();
  }, [quantity]);

  const handleUpdateCart = () => {
    cartState?.forEach((item) => {
      dispatch(
        updateCart({
          id: item.productId,
          quantity: quantity,
        })
      );
    });
    setTimeout(() => {
      dispatch(getCart());
    }, 100);
  };
  //

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cartState?.length; i++) {
      sum =
        sum +
        Number(
          cartState[i]?.quantity *
            Number(cartState[i].version.split("|")[2].split(" đ")[0])
        );
      setAmoutTotal(sum);
    }
  }, [cartState]);

  return (
    <>
      <Meta title="Cart" />
      <Navigation title="Cart" />

      <Container classChild="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Sản phẩm</h4>
              <h4 className="cart-col-2">Giá</h4>
              <h4 className="cart-col-3">Số lượng</h4>
              <h4 className="cart-col-4">Tổng tiền</h4>
            </div>
            {cartState?.length === 0 && (
              <div className="text-center">
                <img
                  src="../../src/assets/empty-cart.jpg"
                  alt="empty cart"
                  className="img-fluid w-50"
                />
              </div>
            )}
            {cartState?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="cart-data py-3 d-flex justify-content-between align-items-center"
                >
                  <div className="cart-col-1 d-flex align-items-center gap-10">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-75">
                      <h5>{item.name}</h5>
                      <p>Phiên bản: {item.version.split("|")[0]}</p>
                      <p>Màu sắc: {item.version.split("|")[1]}</p>
                    </div>
                  </div>
                  <div className="cart-col-2">
                    <h5 className="price">{item.version.split("|")[2]}</h5>
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
                        value={quantity ? quantity : item.quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </div>

                    <div>
                      <MdDelete
                        className="text-danger "
                        onClick={() => handleRemoveCart(item.productId)}
                      />
                    </div>
                  </div>
                  <div className="cart-col-4">
                    <h5 className="price">
                      {Number(item.version.split("|")[2].split(" đ")[0]) *
                        Number(item.quantity)}{" "}
                      đ
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-12 py-2">
            {(amoutTotal !== null || amoutTotal !== 0) && (
              <div className="d-flex justify-content-between">
                <p>Taxes and shipping calculated at checkout</p>
                <div>
                  <h5>Tổng giá trị: {amoutTotal} đ</h5>
                  <Link to="/checkout" className="button link">
                    Thanh toán
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
