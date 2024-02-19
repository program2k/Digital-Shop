import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Meta from "../components/Meta";
import ProductsCard from "../components/ProductsCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productsSlice";

const OurStore = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.product.products);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    dispatch(getAllProducts());
  };

  return (
    <>
      <Meta title="Our Store" />
      <Navigation title="Our Store" />

      <Container classChild={"store-wrapper home-wrapper-2 py-5"}>
        <div className="row">
          <div className="col-3">
            <div className="filter-cart mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Laptop</li>
                  <li>Tivi</li>
                  <li>Watch</li>
                  <li>Camera</li>
                </ul>
              </div>
            </div>
            <div className="filter-cart mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availablity</h5>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label htmlFor="" className="form-check-label">
                    In stock (1)
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label htmlFor="" className="form-check-label">
                    Out of stock (0)
                  </label>
                </div>
              </div>
            </div>

            <div className="filter-cart mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Watch
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    TV
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="total-products mb-0">
                    <strong>21 Products</strong>
                  </p>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select className="form-control form-select" name="" id="">
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductsCard data={productState} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
