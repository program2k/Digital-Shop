import Navigation from "../components/Navigation";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavouriteList } from "../features/users/userSlice";
import { removeFavourite } from "../features/products/productsSlice";

const Favourite = () => {
  const dispatch = useDispatch();
  const favouriteState = useSelector(
    (state) => state.auth.favouriteProducts.favorites
  );

  useEffect(() => {
    getProductFavourite();
  }, []);

  const getProductFavourite = () => {
    dispatch(getFavouriteList());
  };

  const removeProductFavourite = (id) => {
    dispatch(removeFavourite(id));
    setTimeout(() => {
      dispatch(getFavouriteList());
    }, 500);
  };

  return (
    <>
      <Meta title="Favourite" />
      <Navigation title="Favourite" />

      <Container classChild={"favourite-wrapper home-wrapper-2 py-5"}>
        <div className="row">
          {favouriteState?.length === 0 && (
            <div className="text-center">
              <img
                src="../../src/assets/empty-cart.jpg"
                alt="empty cart"
                className="img-fluid w-50"
              />
            </div>
          )}

          {favouriteState?.map((item, index) => {
            return (
              <>
                <div className="col-3" key={index}>
                  <div className="favourite-cart position-relative">
                    <img
                      src="../../src/assets/cross.svg"
                      alt="cross"
                      className="position-absolute cross img-fluid"
                      onClick={() => removeProductFavourite(item.productId)}
                    />
                    <div className="favourite-cart-img">
                      <img
                        src={item.image}
                        alt={item.type}
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="bg-white px-2 py-3">
                      <h5 className="tilte">{item.name}</h5>
                      <h6 className="price">{item.price}</h6>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          {/* <div className="col-3">
            <div className="favourite-cart position-relative">
              <img
                src="../../src/assets/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="favourite-cart-img">
                <img
                  src="../../src/assets/watch.jpg"
                  alt="watch"
                  className="img-fluid w-100"
                />
              </div>
              <div className="bg-white px-2 py-3">
                <h5 className="tilte">
                  Honor T1 7.0 1GB 8GB ROM 7 Inch With Wi-fi+3G Tablet
                </h5>
                <h6 className="price">100.000đ</h6>
              </div>
            </div>
          </div> */}
        </div>
      </Container>
    </>
  );
};

export default Favourite;
