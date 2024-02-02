import Navigation from "../components/Navigation";
import Meta from "../components/Meta";
import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title="Compare Products" />
      <Navigation title="Compare Products" />

      <Container classChild="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-cart position-relative">
              <img
                src="../../src/assets/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-img">
                <img src="../../src/assets/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1GB 8GB ROM 7 Inch With Wi-fi+3G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">100.000đ</h6>
                <div className="product-detail">
                  <h5 className="mb-0">Brand:</h5>
                  <p className="mb-0">Something...</p>
                </div>
                <div className="product-detail">
                  <h5 className="mb-0">Type:</h5>
                  <p className="mb-0">Watch</p>
                </div>
                <div className="product-detail">
                  <h5 className="mb-0">Availability:</h5>
                  <p className="mb-0">In stock</p>
                </div>
                <div className="product-detail">
                  <h5 className="mb-0">Size:</h5>
                  <div className="d-flex gap-10">
                    <p className="mb-0">S</p>
                    <p className="mb-0">M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-cart position-relative">
              <img
                src="../../src/assets/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-img">
                <img src="../../src/assets/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1GB 8GB ROM 7 Inch With Wi-fi+3G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">100.000đ</h6>
                <div className="product-detail">
                  <h5 className="mb-0">Brand:</h5>
                  <p className="mb-0">Something...</p>
                </div>
                <div className="product-detail">
                  <h5 className="mb-0">Type:</h5>
                  <p className="mb-0">Watch</p>
                </div>
                <div className="product-detail">
                  <h5 className="mb-0">Availability:</h5>
                  <p className="mb-0">In stock</p>
                </div>
                <div className="product-detail">
                  <h5 className="mb-0">Size:</h5>
                  <div className="d-flex gap-10">
                    <p className="mb-0">S</p>
                    <p className="mb-0">M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-cart position-relative">
              <img
                src="../../src/assets/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-img">
                <img src="../../src/assets/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1GB 8GB ROM 7 Inch With Wi-fi+3G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">100.000đ</h6>
                <div className="product-detail">
                  <h5 className="mb-0">Brand:</h5>
                  <p className="mb-0">Something...</p>
                </div>
                <div className="product-detail">
                  <h5 className="mb-0">Type:</h5>
                  <p className="mb-0">Watch</p>
                </div>
                <div className="product-detail">
                  <h5 className="mb-0">Availability:</h5>
                  <p className="mb-0">In stock</p>
                </div>
                <div className="product-detail">
                  <h5 className="mb-0">Size:</h5>
                  <div className="d-flex gap-10">
                    <p className="mb-0">S</p>
                    <p className="mb-0">M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
