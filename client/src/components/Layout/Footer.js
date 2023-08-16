import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container-fluid bg-light pt-5">
      <div classname="container m-auto">
        <div className="row container m-auto d-flex justify-content-between">
          <div className="col-lg-4 mr-auto col-sm-6">
            <div className="mb-5 mb-lg-0">
              <div className="logo mb-4 text-sm-center text-md-start">
                <img
                  src="logo.png"
                  className="foote-logo"
                  alt="footer-logo"
                  width={"20%"}
                />
              </div>
              <p className="text-justify pe-3">
                Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur
                veritatis eveniet distinctio possimus.</p>
              <ul className="list-inline footer-socials mt-4 footer">
                <li className="list-inline-item"><a href="https://www.facebook.com/themefisher"><i className="icofont-facebook" /></a></li>
                <li className="list-inline-item"><a href="https://twitter.com/themefisher"><i className="icofont-twitter" /></a></li>
                <li className="list-inline-item"><a href="https://www.pinterest.com/themefisher/"><i className="icofont-linkedin" /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="mb-5 mb-lg-0 footer">
              <h4 className="text-capitalize mb-3">Department</h4>
              <div className="divider mb-4" />
              <ul className="list-unstyled footer-menu lh-35">
                <li><NavLink to="/Surgery">Surgery </NavLink></li>
                <li><NavLink to="/WomenHealth"> Women's Health</NavLink></li>
                <li><NavLink to="/Radiology">Radiology</NavLink></li>
                <li><NavLink to="/Cardioc">Cardioc</NavLink></li>
                <li><NavLink to="/Medicine">Medicine</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="mb-5 mb-lg-0 footer">
              <h4 className="text-capitalize mb-3">Support</h4>
              <div className="divider mb-4" />
              <ul className="list-unstyled footer-menu lh-35">
                <li><NavLink to="/Terms">Terms &amp; Conditions</NavLink></li>
                <li><NavLink to="/Privacy">Privacy Policy</NavLink></li>
                <li><NavLink to="/CompanySupport">Company Support </NavLink></li>
                <li><NavLink to="/FAQuestions">FAQuestions</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget widget-contact mb-5 mb-lg-0 footer">
              <h4 className="text-capitalize mb-3">Get in Touch</h4>
              <div className="divider mb-4" />
              <div className="footer-contact-block mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-email mr-3" />
                  <span className="h6 mb-0">Support Available for 24/7</span>
                </div>
                <p className="mt-2 h6"><a href="tel:+23-345-67890">familycare@email.com</a></p>
              </div>
              <div className="footer-contact-block">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-support mr-3" />
                  <span className="h6 mb-0">Mon to Fri : 06:00AM - 10:00PM</span>
                </div>
                <p className="mt-2 ">01616-023800</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-4 container m-auto">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
            <div className="copyright footer">
              © Copyright Reserved to <span className="text-color">Family Care</span> by <a href="https://sr-it-Solution.com/" target="_blank">SR-IT Solution</a>
            </div>
            </div>
            <div className="col-lg-6">
              <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
                <form action="#" className="subscribe">
                  <div className="d-flex">
                    <input type="text" className="form-control" placeholder="Your Email address" />
                    <button className="btn btn-main-2 rounded-pill py-2 px-4">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <a className="backtop js-scroll-trigger" href="#top">
                <i className="icofont-long-arrow-up" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
