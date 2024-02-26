import Navigation from "../components/Navigation";
import Meta from "../components/Meta";
import ProductsCard from "../components/ProductsCard";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import { TfiReload, TfiHeart } from "react-icons/tfi";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getOnlyProduct } from "../features/products/productsSlice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { addToCart } from "../features/users/userSlice";
import { toast } from "react-toastify";

const ViewProduct = () => {
  const [orderProduct, setOrderProduct] = useState(true);
  const location = useLocation();
  const [version, setVersion] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const getIdProduct = location.pathname.split("/:")[1];

  const dispatch = useDispatch();

  const productState = useSelector((state) => {
    return state.product.product;
  });

  const onlyProductState = useSelector((state) => {
    return state.product.onlyProduct.product;
  });

  useEffect(() => {
    viewProduct();
  }, []);

  const viewProduct = () => {
    dispatch(getOnlyProduct(getIdProduct));
  };

  const addToProductCart = () => {
    if (version === null) {
      toast.error("Vui lòng chọn phiên bản");
      return false;
    }
    if (quantity === null) {
      toast.error("Vui lòng chọn số lượng");
      return false;
    } else {
      dispatch(
        addToCart({
          id: onlyProductState?.id,
          name: onlyProductState?.name,
          image: onlyProductState?.image,
          quantity: quantity,
          price: onlyProductState?.price,
          version: version,
        })
      );
    }
  };

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
                    src={onlyProductState?.image}
                    alt={onlyProductState?.type}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="other-product-image d-flex gap-15 flex-wrap">
                <div>
                  <img
                    src={onlyProductState?.image}
                    alt={onlyProductState?.type}
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src={onlyProductState?.image}
                    alt={onlyProductState?.type}
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src={onlyProductState?.image}
                    alt={onlyProductState?.type}
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src={onlyProductState?.image}
                    alt={onlyProductState?.type}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">{onlyProductState?.title}</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">{onlyProductState?.price} đ</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={onlyProductState?.rating}
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
                    <h3 className="product-heading">Loại hàng: </h3>
                    <p className="product-data">{onlyProductState?.type}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Thương hiệu:</h3>
                    <p className="product-data">{onlyProductState?.brand}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Danh mục:</h3>
                    <p className="product-data">{onlyProductState?.type}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags: </h3>
                    <p className="product-data">Watch</p>
                  </div>
                  {onlyProductState?.versions.map((item, index) => {
                    return (
                      <div
                        className="d-flex gap-10 flex-column mt-2 mb-3"
                        key={index}
                      >
                        <h3 className="product-heading">Phiên bản: </h3>
                        <p className="d-flex flex-wrap gap-15 click">
                          {item.version.map((item, index) => {
                            return (
                              <option
                                key={index}
                                className="badge border-1 bg-white text-dark border-secondary border"
                                onClick={(e) => setVersion(e.target.value)}
                              >
                                {item.storage} | {item.color} | {item.price} đ
                              </option>
                            );
                          })}
                        </p>
                      </div>
                    );
                  })}
                  <div className="d-flex gap-15 flex-row mt-2 mb-3 align-items-center">
                    <h3 className="product-heading">Số lượng</h3>
                    <div>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        className="form-control"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button
                        className="button"
                        onClick={() => addToProductCart(onlyProductState?.id)}
                      >
                        Thêm vào giỏ hàng
                      </button>
                      <button className="button signup">Mua ngay</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="" className="link mb-2">
                        <TfiReload /> Thêm vào so sánh
                      </a>
                    </div>
                    <div>
                      <a href="" className="link mb-2">
                        <TfiHeart /> Thêm vào yêu thích
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
              <p>{onlyProductState?.description}</p>
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
          <ProductsCard data={productState} />
        </div>
      </Container>
    </>
  );
};

export default ViewProduct;
