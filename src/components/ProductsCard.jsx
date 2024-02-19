import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavourite } from "../features/products/productsSlice";

const ProductsCard = ({ data }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const addToFavourite = (id) => {
    dispatch(addFavourite(id));
  };

  return (
    <>
      {data?.map((item, index) => {
        return (
          <>
            <div className="col-3" key={index}>
              <Link
                to={`${
                  location.pathname == "/"
                    ? "/product/:id"
                    : location.pathname == "/product/:id"
                    ? "/product/:id/"
                    : ":id"
                }`}
                className="product-card position-relative link"
              >
                <div
                  className="wishlist-icon position-absolute"
                  onClick={() => {
                    addToFavourite(item.id);
                  }}
                >
                  <Link>
                    <img src="../../src/assets/wish.svg" alt="wishlist" />
                  </Link>
                </div>
                <div className="product-image">
                  <img src={item.image} alt="product image" />
                </div>
                <div className="product-details">
                  <h6 className="brand">{item.name}</h6>
                  <h5 className="product-title">{item.title}</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value={item.rating}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="price">{item.price}</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15 q">
                    <Link>
                      <img
                        src="../../src/assets/prodcompare.svg"
                        alt="compare"
                      />
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
          </>
        );
      })}
    </>
  );
};

export default ProductsCard;
