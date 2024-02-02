import Navigation from "../components/Navigation";
import Meta from "../components/Meta";
import ProductsCard from "../components/ProductsCard";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import Color from "../components/Color";
import { TfiReload, TfiHeart } from "react-icons/tfi";
import Container from "../components/Container";

const ViewProduct = () => {
  const [orderProduct, setOrderProduct] = useState(true);

  return (
    <>
      <Meta title="Product Name" />
      <Navigation title="Product Name" />

      <Container classChild={"main-product-wrapper py-5 home-wrapper-2"}>
        <div className="container-xxl p-3 bg-white">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <img
                    src="../../src/assets/watch.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="other-product-image d-flex gap-15 flex-wrap">
                <div>
                  <img
                    src="../../src/assets/watch.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="../../src/assets/watch.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="../../src/assets/watch.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="../../src/assets/watch.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Iphone 14 ProMax 512G</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">100.000đ</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(2 Reviews)</p>
                  </div>
                  <a href="#review" className="review-btn link">
                    Write a review
                  </a>
                </div>
                <div className="border-bottom">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type: </h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand: </h3>
                    <p className="product-data">Havels</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category:</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags: </h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availablity: </h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size: </h3>
                    <p className="d-flex flex-wrap gap-15">
                      <span className="badge border-1 bg-white text-dark border-secondary border">
                        S
                      </span>
                      <span className="badge border-1 bg-white text-dark border-secondary border">
                        M
                      </span>
                      <span className="badge border-1 bg-white text-dark border-secondary border">
                        XL
                      </span>
                      <span className="badge border-1 bg-white text-dark border-secondary border">
                        XXL
                      </span>
                    </p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color: </h3>
                    <Color />
                  </div>
                  <div className="d-flex gap-15 flex-row mt-2 mb-3 align-items-center">
                    <h3 className="product-heading">Quantity: </h3>
                    <div>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        className="form-control"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button">Add to cart</button>
                      <button className="button signup">Buy now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="" className="link mb-2">
                        <TfiReload /> Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="" className="link mb-2">
                        <TfiHeart /> Add to favorites
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-2">
                    <h3 className="product-heading">Shipping & Returns: </h3>
                    <p className="product-data">
                      Free shipping and returns available on all orders! <br />{" "}
                      We ship all US domestic orders within{" "}
                      <b>5-10 business days!</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container classChild={"description-wrapper pB-5 home-wrapper-2"}>
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                totam tenetur distinctio, ipsum autem provident facilis
                doloremque, consectetur deserunt dicta quo, mollitia obcaecati
                accusantium earum quam incidunt libero vitae accusamus.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container classChild={"reviews-wrapper py-5 home-wrapper-2"}>
        <div className="row">
          <div className="col-12">
            <h4 id="review">Review</h4>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex gap-10 align-items-center">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                <div>
                  {orderProduct && (
                    <div>
                      <a href="" className="text-dark">
                        Write a review
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="review-form py-4">
                <h4>Write a review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={0}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="w-100 form-control"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div className="reviews">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Huydeptrai</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Saepe dolor excepturi nam temporibus unde minima corporis,
                    facilis quae aperiam modi consectetur? Maiores neque tenetur
                    molestiae reprehenderit quas! Labore, sed hic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container classChild={"popular-wrapper py-5 home-wrapper-2"}>
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Sản phẩm phổ biến của chúng tôi</h3>
          </div>
        </div>
        <div className="row">
          <ProductsCard />
        </div>
      </Container>
    </>
  );
};

export default ViewProduct;
