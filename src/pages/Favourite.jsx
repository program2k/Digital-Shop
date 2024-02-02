import Navigation from "../components/Navigation";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Favourite = () => {
  return (
    <>
      <Meta title="Favourite" />
      <Navigation title="Favourite" />

      <Container classChild={"favourite-wrapper home-wrapper-2 py-5"}>
        <div className="row">
          <div className="col-3">
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
          </div>
          <div className="col-3">
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
          </div>
          <div className="col-3">
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
          </div>
        </div>
      </Container>
    </>
  );
};

export default Favourite;
