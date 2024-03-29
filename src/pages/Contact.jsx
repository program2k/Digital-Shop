import Navigation from "../components/Navigation";
import Meta from "../components/Meta";
import { AiFillHome } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail, IoMdInformationCircle } from "react-icons/io";
import Container from "../components/Container";

export const Contact = () => {
  return (
    <>
      <Meta title="Contact" />
      <Navigation title="Contact" />

      <Container classChild="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8858.77249453163!2d105.85186443854691!3d21.006461534588308!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135add3c46cb161%3A0x463734da30e16629!2zxJDhuqFpIGjhu41jIELDoWNoIGtob2EgSMOgIE7hu5lpIC0gSGFub2kgVW5pdmVyc2l0eSBvZiBTY2llbmNlIGFuZCBUZWNobm9sb2d5!5e0!3m2!1svi!2s!4v1706683384837!5m2!1svi!2s"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile number"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Comments"
                      className="w-100 form-control"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button">Send</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiFillHome className="fs-5" />
                      <address className="mb-0">
                        2R3V+XGX, Dong Tam, Hai Ba Trung, Hanoi, Vietnam
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiSolidPhoneCall className="fs-5" />
                      <a href="tel:+81 12345678" className="mb-0 link">
                        +81 12345678
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <IoMdMail className="fs-5" />
                      <a
                        href="mailto: zzzhuyyzzz@gmail.com"
                        className="mb-0 link"
                      >
                        zzzhuyyzzz@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <IoMdInformationCircle className="fs-5" />
                      <p className="mb-0">Monday-Friday 10am-6pm</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
