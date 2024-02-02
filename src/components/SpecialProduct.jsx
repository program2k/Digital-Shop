import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <div className="col-6">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="../../src/assets/watch.jpg" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Something...</h5>
            <h6 className="title">Samsung Galaxy Note10+ Mobile Phone</h6>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">100.000đ</span> &nbsp;
              <strike>200.000đ</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p>
                <b>3 </b>ngày
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-2 bg-warning">1</span>:
                <span className="badge rounded-circle p-2 bg-warning">1</span>:
                <span className="badge rounded-circle p-2 bg-warning">1</span>
              </div>
            </div>
            <div className="prod-count">
              <p>Sản phẩm: 100</p>
              <div
                class="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" style={{ width: "25%" }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <Link className="button link">Thêm vào giỏ hàng</Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
