import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductsCard = () => {
  return (
    <>
      <div className="col-3">
        <Link to=":id" className="product-card position-relative link">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="../../src/assets/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="../../src/assets/watch.jpg" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">something...</h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">100.000đ</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15 q">
              <Link>
                <img src="../../src/assets/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="../../src/assets/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="../../src/assets/add-cart.svg" alt="add cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-3">
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="../../src/assets/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="../../src/assets/watch.jpg" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">something...</h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">100.000đ</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15 q">
              <Link>
                <img src="../../src/assets/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="../../src/assets/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="../../src/assets/add-cart.svg" alt="add cart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
