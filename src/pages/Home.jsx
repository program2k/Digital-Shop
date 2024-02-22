import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import ProductsCard from "../components/ProductsCard";
import SpecialProduct from "../components/SpecialProduct";
import { services } from "../utils/data";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productsSlice";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => {
    return state?.product?.product;
  });

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    dispatch(getAllProducts());
  };

  return (
    <>
      <Container classChild="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img
                src="../../src/assets/main-banner-1.jpg"
                alt="ảnh copy"
                className="img-fluid rounded-3"
              />
              <div className="main-banner-content position-absolute">
                <h4>Đặt hàng ngày thôi nào!</h4>
                <h5>Galaxy S24 Series</h5>
                <p>Giảm đến 3 triệu đồng</p>
                <Link className="link button">Mua ngay</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              <div className="small-banner position-relative">
                <img
                  src="../../src/assets/catbanner-01.jpg"
                  alt="ảnh copy"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Đặt hàng ngày thôi nào!</h4>
                  <h5>Galaxy S24 Series</h5>
                  <p>Giảm đến 3 triệu đồng</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="../../src/assets/catbanner-02.jpg"
                  alt="ảnh copy"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Đặt hàng ngày thôi nào!</h4>
                  <h5>Galaxy S24 Series</h5>
                  <p>Giảm đến 3 triệu đồng</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="../../src/assets/catbanner-03.jpg"
                  alt="ảnh copy"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Đặt hàng ngày thôi nào!</h4>
                  <h5>Galaxy S24 Series</h5>
                  <p>Giảm đến 3 triệu đồng</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="../../src/assets/catbanner-04.jpg"
                  alt="ảnh copy"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Đặt hàng ngày thôi nào!</h4>
                  <h5>Galaxy S24 Series</h5>
                  <p>Giảm đến 3 triệu đồng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container classChild="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex justify-content-between align-items-center">
              {services?.map((data) => {
                return (
                  <div
                    key={data.id}
                    className="d-flex algin-items-center gap-15"
                  >
                    <img src={data.image} alt="services" />
                    <div>
                      <h6>{data.tilte}</h6>
                      <p className="mb-0">{data.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container classChild="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-30">
                <div>
                  <h6>Âm nhạc</h6>
                  <p>10 sản phẩm</p>
                </div>
                <img src="../../src/assets/speaker.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center gap-30">
                <div>
                  <h6>Cameras</h6>
                  <p>10 sản phẩm</p>
                </div>
                <img src="../../src/assets/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center gap-30">
                <div>
                  <h6>Tivi thông minh</h6>
                  <p>10 sản phẩm</p>
                </div>
                <img src="../../src/assets/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center gap-30">
                <div>
                  <h6>Tai nghe</h6>
                  <p>10 sản phẩm</p>
                </div>
                <img src="../../src/assets/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center gap-30">
                <div>
                  <h6>Âm nhạc</h6>
                  <p>10 sản phẩm</p>
                </div>
                <img src="../../src/assets/speaker.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center gap-30">
                <div>
                  <h6>Cameras</h6>
                  <p>10 sản phẩm</p>
                </div>
                <img src="../../src/assets/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center gap-30">
                <div>
                  <h6>Tivi thông minh</h6>
                  <p>10 sản phẩm</p>
                </div>
                <img src="../../src/assets/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center gap-30">
                <div>
                  <h6>Tai nghe</h6>
                  <p>10 sản phẩm</p>
                </div>
                <img src="../../src/assets/headphone.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container classChild="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Bộ sưu tập nổi bật</h3>
          </div>
          <ProductsCard data={productState} />
        </div>
      </Container>

      <Container classChild="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Sản phẩm đặc biệt</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct data={productState} />
        </div>
      </Container>

      <Container classChild="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Sản phẩm phổ biến của chúng tôi</h3>
          </div>
        </div>
        <div className="row">
          <ProductsCard data={productState} />
        </div>
      </Container>

      <Container classChild="marque-wrapper home-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="../../src/assets/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="../../src/assets/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="../../src/assets/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="../../src/assets/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="../../src/assets/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="../../src/assets/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="../../src/assets/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
