import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { TfiReload, TfiHeart, TfiUser, TfiBag } from "react-icons/tfi";
import { CgMenuGridO } from "react-icons/cg";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white">Digital World</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a
                  className="text-white text-decoration-none"
                  href="tel: +123456789"
                >
                  +123456789
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white text-decoration-none">
                  Digital
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Tìm kiếm sản phẩm ở đây..."
                  aria-label="Tìm kiếm sản phẩm ở đây..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links">
                <div>
                  <Link to="/compare-product" className="header-links">
                    <TfiReload className="header-icon text-white" />
                    <p>
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/favourite" className="header-links">
                    <TfiHeart className="header-icon text-white" />
                    <p>Favourite</p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className="header-links">
                    <TfiUser className="header-icon text-white" />
                    <p>
                      Login <br /> Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="header-links">
                    <TfiBag className="header-icon text-white" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-secondary">0</span>
                      <p className="mb-0">500 đ</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap 30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <CgMenuGridO className="menu-icon" />
                      LOẠI CỬA HÀNG
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className=" gap-15 d-flex align-items-center">
                    <NavLink to="/" className="navlink">
                      Home
                    </NavLink>
                    <NavLink to="/product" className="navlink">
                      Our Store
                    </NavLink>
                    <NavLink to="/blog" className="navlink">
                      Blogs
                    </NavLink>
                    <NavLink to="/contact" className="navlink">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
