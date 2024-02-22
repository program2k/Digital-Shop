import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = ({ data }) => {
  return (
    <div className="col-6">
      {data &&
        data?.products?.map((item, index) => {
          if (item.tags === "special") {
            return (
              <div className="special-product-card" key={index}>
                <div className="d-flex justify-content-between">
                  <div>
                    <img src={item.image} alt={item.type} />
                  </div>
                  <div className="special-product-content">
                    <h5 className="brand">{item.name}</h5>
                    <h6 className="title">{item.title}</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={item.rating}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="price">
                      <span className="red-p">100.000đ</span> &nbsp;
                      <strike>{item.price}</strike>
                    </p>
                    <div className="discount-till d-flex align-items-center gap-10">
                      <p>
                        <b>3 </b>ngày
                      </p>
                      <div className="d-flex gap-10 align-items-center">
                        <span className="badge rounded-circle p-2 bg-warning">
                          1
                        </span>
                        :
                        <span className="badge rounded-circle p-2 bg-warning">
                          1
                        </span>
                        :
                        <span className="badge rounded-circle p-2 bg-warning">
                          1
                        </span>
                      </div>
                    </div>
                    <div className="prod-count">
                      <p>Sản phẩm còn lại: {item.quantity - item.sold}</p>
                      <div
                        class="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow={
                          item.quantity / ((item.quantity + item.sold) * 100)
                        }
                        aria-valuemin="0"
                        aria-valuemax={item.quantity + item.sold}
                      >
                        <div
                          className="progress-bar"
                          style={{
                            width:
                              (item.sold / (item.quantity + item.sold)) * 100 +
                              "%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <Link className="button link" to={`/product/:${item.id}`}>
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default SpecialProduct;
