import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex align-items-center gap-30">
                <FiSend className="send-icon text-white" />
                <h4 className="mb-0 text-white">Đăng ký nhận thư mới</h4>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Email của bạn"
                  aria-label="Email của bạn"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-1" id="basic-addon2">
                  Đăng ký
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Liên hệ với chúng tôi</h4>
              <div className="footer-links d-flex flex-column">
                <a className="link text-white py-2 mb-1" href="">
                  <FaFacebook className="fs-4 " /> Facebook
                </a>
                <a className="link text-white py-2 mb-1" href="">
                  <FaYoutube className="fs-4 " /> Youtube
                </a>
                <a className="link text-white py-2 mb-1" href="">
                  <FaInstagram className="fs-4 " /> Instagram
                </a>
                <a className="link text-white py-2 mb-1" href="">
                  <FaLinkedin className="fs-4 " /> Linkedin
                </a>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Thông tin</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="link text-white py-2 mb-1">
                  Chính sách bảo mật
                </Link>
                <Link className="link text-white py-2 mb-1">
                  Chính sách hoàn trả
                </Link>
                <Link className="link text-white py-2 mb-1">
                  Chính sách vận chuyển
                </Link>
                <Link className="link text-white py-2 mb-1">
                  Các điều khoản và điều kiện
                </Link>
                <Link className="link text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Tài khoản</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="link text-white py-2 mb-1">Về chúng tôi</Link>
                <Link className="link text-white py-2 mb-1">
                  Câu hỏi thường gặp
                </Link>
                <Link className="link text-white py-2 mb-1">Liên hệ</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Liên kết nhanh</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="link text-white py-2 mb-1">Laptop</Link>
                <Link className="link text-white py-2 mb-1">Headephone</Link>
                <Link className="link text-white py-2 mb-1">Tablet</Link>
                <Link className="link text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
