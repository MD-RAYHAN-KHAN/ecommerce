import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "../components/Layout/Layout";
import { AiOutlineReload } from "react-icons/ai";
import "../styles/Homepage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts(); // Call getAllProducts() directly to fetch doctor products
  }, [page]);

  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"Best Service - Family Care"}>
      {/* banner section start */}
      <section className="bannner-section mt-sm-5 mt-lg-4">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/bg/slider-bg-3.jpg"
                className="banner-img"
                alt="bannerimage"
                width={"100%"}
              />
              <div className="carousel-caption mb-lg-200 d-none d-md-block">
                <div className="row">
                  <div className="col-lg-10 col-md-12 col-xl-7">
                    <div className=" m-auto">
                      <div className="divider mb-3 pb-2" />
                      <span className="text-uppercase letter-spacing">Total Health care solution</span>
                      <h1 className="fs-h1 letter-spacing pt-2 slider-content-2">Your most trusted health partner</h1>
                      <p class="mb-4 pr-5 fs-5">
                        Family Care is a one-stop shop for expecting families with services catered to every stage throughout their parenting journey.
                      </p>

                      <div className="btn-container ">
                        <NavLink to="/Nanny" className="nav-link">
                          <button className="btn-1 btn-main-2 btn-icon btn-round-full">
                            Nanny Service
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/bg/slider-bg-1.jpg"
                className="banner-img"
                alt="bannerimage"
                width={"100%"}
              />
              <div className="carousel-caption mb-lg-200 d-none d-md-block">
                <div className="row">
                  <div className="col-lg-10 col-md-12 col-xl-7">
                    <div className=" m-auto">
                      <div className="divider mb-3 pb-2" />
                      <span className="text-uppercase letter-spacing">Total Health care solution</span>
                      <h1 className="fs-h1 letter-spacing pt-2 content-2">Your most trusted health partner</h1>
                      <p class="mb-4 pr-5 fs-5">
                        We both full time and part-time baby care at home facilites
                      </p>

                      <div className="btn-container ">
                        <NavLink to="/Nurse" className="nav-link">
                          <button className="btn-1 btn-main-2 btn-icon btn-round-full">
                            Child Care service
                          </button>
                        </NavLink>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/bg/slider-bg-2.2.jpg"
                className="banner-img"
                alt="bannerimage"
                width={"100%"}
              />
              <div className="carousel-caption  mb-lg-200 d-none d-md-block">
                <div className="row">
                  <div className="col-lg-10 col-md-12 col-xl-7">
                    <div className="m-auto">
                      <div className="divider mb-3 pb-2" />
                      <span className="text-uppercase letter-spacing">Total Health care solution</span>
                      <h1 className="fs-h1 letter-spacing pt-2 content-2 animation-style-01">Your most trusted health partner</h1>
                      <p className="mb-4 pr-5 fs-5 animation-style-01">
                        A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam
                        aperiam maiores sunt fugit, deserunt rem suscipit placeat.
                      </p>

                      <div className="btn-container">
                        <NavLink to="/doctor" className="nav-link">
                          <button className="btn-1 btn-main-2 btn-icon btn-round-full">Doctor Consultation</button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* banner section end */}

      {/* header info section start  */}
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="feature-block mx-sm-1 mx-lg-0 d-lg-flex">
                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont-surgeon-alt" />
                  </div>
                  <span>24 Hours Service</span>
                  <h4 className="my-3">Consultation </h4>
                  <p className="mb-4">Get All time support for emergency.We have introduced the principle of
                    family medicine.</p>
                  <NavLink to="/Doctor" className="btn btn-main btn-round-full">Consultation</NavLink>
                </div>
                <div className="feature-item mx-lg-4 mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont-ui-clock" />
                  </div>
                  <span>Volunteer Timing schedule</span>
                  <h4 className="my-3">Working Hours</h4>
                  <ul className="w-hours list-unstyled">
                    <li className="d-flex justify-content-between">Sun - Wed : <span>8:00 AM - 9:00 PM</span>
                    </li>
                    <li className="d-flex justify-content-between">Thu - Fri : <span>9:00 AM - 9:00 PM</span>
                    </li>
                    <li className="d-flex justify-content-between">Sat - sun : <span>8:00 AM - 9:00 PM</span>
                    </li>
                  </ul>
                </div>
                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont-support" />
                  </div>
                  <span>Emegency Cases</span>
                  <h4 className="my-3">01729-586613</h4>
                  <p>Get ALl time support for emergency.We have introduced the principle of family
                    medicine.Get Conneted with us for any urgency .</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* header info section end  */}

      {/* nanny section start */}
      <section className="nanny px-3 py-2">
        <div className="container-fluid">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section-title text-center">
                  <h2 className="fs-h2 letter-spacing">View available Nurses​</h2>
                  <div className="divider mx-auto my-4" />
                  <p className="">Last Update: January 19, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide mt-3" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="d-flex justify-content-center">
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog4.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Rohima Yeasmin</h4>
                      <span>Nurse</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : General</p>
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog6.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Kamrun Nahar</h4>
                      <span>Nurse</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : Child Specialist</p>
                        <p className="info-employee">Experience : More than 1 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog4.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Kamrun Nahar</h4>
                      <span>Nurse</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : Child Specialist</p>
                        <p className="info-employee">Experience : More than 1 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary : Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog4.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Kamiliya Jahan</h4>
                      <span>Nurse</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : Child Specialist</p>
                        <p className="info-employee">Experience : More than 1 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog4.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Rohima Yeasmin</h4>
                      <span>Nurse</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : Child Specialist</p>
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog6.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Kamrun Nahar</h4>
                      <span>Nurse</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : Child Specialist</p>
                        <p className="info-employee">Experience : More than 1 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary : Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog4.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Sumiya Tisha</h4>
                      <span>Nurse</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : Child Specialist</p>
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog4.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Kamiliya Jahan</h4>
                      <span>Nurse</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : Women's Health Specialist</p>
                        <p className="info-employee">Experience : More than 1 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog4.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Rohima Yeasmin</h4>
                      <span>Nurse</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : General</p>
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog6.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Kamrun Nahar</h4>
                      <span>Nurse</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : Child Specialist</p>
                        <p className="info-employee">Experience : More than 1 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary : Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog4.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Tania jannat</h4>
                      <span>Nurse</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : Child Specialist</p>
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog4.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Kamiliya Jahan</h4>
                      <span>Nurse</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : General</p>
                        <p className="info-employee">Experience : More than 1 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* nanny section end  */}

      {/* nanny section start */}
      <section className="nanny px-3 mt-5">
        <div className="container-fluid">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section-title text-center">
                  <h2 className="fs-h2 letter-spacing">View available nannies​</h2>
                  <div className="divider mx-auto my-4" />
                  <p className="">Last Update: January 20, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide mt-3" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="d-flex justify-content-center">
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog4.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Rohima Yeasmin</h4>
                      <span>Nanny</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : General</p>
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog6.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Kamrun Nahar</h4>
                      <span>Nanny</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : Child Specialist</p>
                        <p className="info-employee">Experience : More than 1 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog4.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Kamrun Nahar</h4>
                      <span>Nanny</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : Child Specialist</p>
                        <p className="info-employee">Experience : More than 1 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary : Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog4.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Kamiliya Jahan</h4>
                      <span>Nanny</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : Child Specialist</p>
                        <p className="info-employee">Experience : More than 1 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog4.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Rohima Yeasmin</h4>
                      <span>Nanny</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : Child Specialist</p>
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog6.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Kamrun Nahar</h4>
                      <span>Nanny</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : Child Specialist</p>
                        <p className="info-employee">Experience : More than 1 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary : Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog4.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Sumiya Tisha</h4>
                      <span>Nanny</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : Child Specialist</p>
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog4.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Kamiliya Jahan</h4>
                      <span>Nanny</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : Women's Health Specialist</p>
                        <p className="info-employee">Experience : More than 1 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog4.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Rohima Yeasmin</h4>
                      <span>Nanny</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : General</p>
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog6.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Kamrun Nahar</h4>
                      <span>Nanny</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : Child Specialist</p>
                        <p className="info-employee">Experience : More than 1 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary : Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog4.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Tania</h4>
                      <span>Nanny</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : Child Specialist</p>
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog4.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Kamiliya Jahan</h4>
                      <span>Nanny</span>
                      <div className="mt-5">
                        <p className="info-employee">Department : General</p>
                        <p className="info-employee">Experience : More than 1 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* nanny section end */}

      {/* medicine center */}
      <section className="medicine mt-5">
        <div className="container-fluid">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section-title text-center">
                  <h2 className="fs-h2 letter-spacing">Medicine Corner</h2>
                  <div className="divider mx-auto my-4" />
                  <p className="">Best Online Pharmacy And Health Care Platform in Bangladesh.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="catagory d-flex justify-content-around mb-5">
          <div className=" container ms-lg-5 catagory mt-3 home-page d-flex row">
            <div className="col-3">
              <div className="shadow">
                <h4 className="">Filter By Category</h4>
                <div className="d-flex flex-column">
                  {categories?.map((c) => (
                    <Checkbox
                      key={c._id}
                      onChange={(e) => handleFilter(e.target.checked, c._id)}
                    >
                      {c.name}
                    </Checkbox>
                  ))}
                </div>
              </div>
              <div className="shadow mt-4">
                <h4 className="mt-4">Filter By Price</h4>
                <div className="d-flex flex-column">
                  <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                    {Prices?.map((p) => (
                      <div key={p._id}>
                        <Radio value={p.array}>{p.name}</Radio>
                      </div>
                    ))}
                  </Radio.Group>
                </div>
              </div>
              <div className="shadow mt-4">
                <div className="d-flex flex-column">
                  <button
                    className="btn btn-danger"
                    onClick={() => window.location.reload()}
                  >
                    RESET FILTERS
                  </button>
                </div>
              </div>
            </div>
            <div className="col-9 d-flex">
              <div className="d-flex flex-wrap">
                {products?.map((p) => (
                  <div className="card m-2" key={p._id}>
                    <div className="medicine">
                      <img
                        src={`/api/v1/product/product-photo/${p._id}`}
                        className="card-img-top bg-none"
                        alt={p.name}
                      />
                    </div>
                    <div className="card-body shadow-3">
                      <div className="card-name-price">
                        <h6 className="card-title">{p.name}</h6>
                        <p className="card-title card-price text-dark">
                          {p.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "BDT",
                          })}
                        </p>
                      </div>
                      <span className="card-text">
                        {p.description.substring(0, 60)}...
                      </span>
                      <div className="card-name-price">
                        <button
                          className="btn btn-main-2 text-white ms-1"
                          onClick={() => navigate(`/product/${p.slug}`)}
                        >
                          Details
                        </button>
                        <button
                          className="btn btn-dark ms-1"
                          onClick={() => {
                            setCart([...cart, p]);
                            localStorage.setItem(
                              "cart",
                              JSON.stringify([...cart, p])
                            );
                            toast.success("Item Added to cart");
                          }}
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="m-2 p-3">
                {products && products.length < total && (
                  <button
                    className="btn loadmore"
                    onClick={(e) => {
                      e.preventDefault();
                      setPage(page + 1);
                    }}
                  >
                    {loading ? (
                      "Loading ..."
                    ) : (
                      <>
                        Loadmore <AiOutlineReload />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* medicine center end */}

      {/* volunteer section start */}
      <section className="nanny px-3 mt-5">
        <div className="container-fluid">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section-title text-center">
                  <h2 className="fs-h2 letter-spacing">View available Volunteer​</h2>
                  <div className="divider mx-auto my-4" />
                  <p className="">Last Update: January 20, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide mt-3" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="d-flex justify-content-center">
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Rayhan Shuvro</h4>
                      <span>Delivery Boy</span>
                      <div className="mt-5">
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Rayhan Shuvro</h4>
                      <span>Delivery Boy</span>
                      <div className="mt-5">
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Rayhan Shuvro</h4>
                      <span>Delivery Boy</span>
                      <div className="mt-5">
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Rayhan Shuvro</h4>
                      <span>Delivery Boy</span>
                      <div className="mt-5">
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Rayhan Shuvro</h4>
                      <span>Delivery Boy</span>
                      <div className="mt-5">
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Rayhan Shuvro</h4>
                      <span>Delivery Boy</span>
                      <div className="mt-5">
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Rayhan Shuvro</h4>
                      <span>Delivery Boy</span>
                      <div className="mt-5">
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Rayhan Shuvro</h4>
                      <span>Delivery Boy</span>
                      <div className="mt-5">
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Rayhan Shuvro</h4>
                      <span>Delivery Boy</span>
                      <div className="mt-5">
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Rayhan Shuvro</h4>
                      <span>Delivery Boy</span>
                      <div className="mt-5">
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Rayhan Shuvro</h4>
                      <span>Delivery Boy</span>
                      <div className="mt-5">
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info">
                      <h4>Rayhan Shuvro</h4>
                      <span>Delivery Boy</span>
                      <div className="mt-5">
                        <p className="info-employee">Experience : More than 5 years</p>
                        <p className="info-employee">Address : Dhaka</p>
                        <p className="info-employee">Desired job : Live-out</p>
                        <p className="info-employee">Desired monthly salary: Negotiable</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* volunteer section end */}

      {/* about seciton start */}
      <section className="section about bg-light py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-sm-6">
              <div className="about-img">
                <img
                  src="/images/blog/blog2.jpg"
                  className="img-fluid"
                  alt="bannerimage"
                  width={"100%"}
                />
                <img
                  src="/images/blog/blog1.jpg"
                  className="img-fluid mt-4"
                  alt="bannerimage"
                  width={"100%"}
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="about-img mt-4 mt-lg-0">
                <img
                  src="/images/blog/blog3.jpg"
                  className="img-fluid me-3"
                  alt="bannerimage"
                  width={"100%"}
                />
              </div>
            </div>
            <div className="col-lg-4 ps-lg-4">
              <div className="about-content pl-4 mt-4 mt-lg-0">
                <h2 className="title-color fs-h2">Personal care <br />&amp; healthy living</h2>
                <p className="mt-4 mb-5">We provide best leading medicle service Nulla perferendis veniam deleniti
                  ipsum officia dolores repellat laudantium obcaecati neque.</p>
                <NavLink to="/Service" className="btn btn-main-2 rounded-pill py-2 px-5 btn-icon">Services..</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about seciton end */}

      {/* department section start */}
      <section className="container-fluid bg-light pt-5 background-img-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h2 className="fs-h2 letter-spacing">Award winning patient care</h2>
                <div className="divider mx-auto my-4" />
                {/* <p className="">Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row container m-auto mt-4">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-4">
              <div className="icon d-flex align-items-center">
                <i className="icofont-laboratory text-lg" />
                <h4 className="mt-3 mb-3">Laboratory services</h4>
              </div>
              <div className="content">
                <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-4">
              <div className="icon d-flex align-items-center">
                <i className="icofont-heart-beat-alt text-lg" />
                <h4 className="mt-3 mb-3">Baby Stimulation</h4>
              </div>
              <div className="content">
                <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-4">
              <div className="icon d-flex align-items-center">
                <i className="icofont-tooth text-lg" />
                <h4 className="mt-3 mb-3">Dental Care</h4>
              </div>
              <div className="content">
                <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-4">
              <div className="icon d-flex align-items-center">
                <i className="icofont-crutch text-lg" />
                <h4 className="mt-3 mb-3">Body Surgery</h4>
              </div>
              <div className="content">
                <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-4">
              <div className="icon d-flex align-items-center">
                <i className="icofont-brain-alt text-lg" />
                <h4 className="mt-3 mb-3">Neurology Sargery</h4>
              </div>
              <div className="content">
                <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-4">
              <div className="icon d-flex align-items-center">
                <i className="icofont-dna-alt-1 text-lg" />
                <h4 className="mt-3 mb-3">Gynecology</h4>
              </div>
              <div className="content">
                <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* department section end */}

      {/* customer Review Section start  */}
      <section className="container-fluid bg-light pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h2 className="fs-h2 letter-spacing">Reviews From Happy Clients</h2>
                <div className="divider mx-auto my-4" />
                <p className="">Hear what people have to say about our nanny and babysitting Dubai services.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-center">
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info ">
                      <h4>Amazing service!</h4>
                      <span>John Partho</span>
                      <p className="text-justify">
                        They provide great service facilty consectetur adipisicing elit. Itaque rem,
                        praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info ">
                      <h4>Amazing service!</h4>
                      <span>John Partho</span>
                      <p className="text-justify">
                        They provide great service facilty consectetur adipisicing elit. Itaque rem,
                        praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info ">
                      <h4>Amazing service!</h4>
                      <span>John Partho</span>
                      <p className="text-justify">
                        They provide great service facilty consectetur adipisicing elit. Itaque rem,
                        praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info ">
                      <h4>Amazing service!</h4>
                      <span>John Partho</span>
                      <p className="text-justify">
                        They provide great service facilty consectetur adipisicing elit. Itaque rem,
                        praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info ">
                      <h4>Amazing service!</h4>
                      <span>John Partho</span>
                      <p className="text-justify">
                        They provide great service facilty consectetur adipisicing elit. Itaque rem,
                        praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info ">
                      <h4>Amazing service!</h4>
                      <span>John Partho</span>
                      <p className="text-justify">
                        They provide great service facilty consectetur adipisicing elit. Itaque rem,
                        praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info ">
                      <h4>Amazing service!</h4>
                      <span>John Partho</span>
                      <p className="text-justify">
                        They provide great service facilty consectetur adipisicing elit. Itaque rem,
                        praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info ">
                      <h4>Amazing service!</h4>
                      <span>John Partho</span>
                      <p className="text-justify">
                        They provide great service facilty consectetur adipisicing elit. Itaque rem,
                        praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="review-info d-flex col">
                  <div className="testimonial-block style-2">
                    <div className="testimonial-thumb">
                      <img
                        src="/images/blog/blog2.jpg"
                        className="img-fluid"
                        alt="bannerimage"
                        width={"100%"}
                      />
                    </div>
                    <div className="client-info ">
                      <h4>Amazing service!</h4>
                      <span>John Partho</span>
                      <p className="text-justify">
                        They provide great service facilty consectetur adipisicing elit. Itaque rem,
                        praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* customer Review Section end */}
    </Layout >
  );
};

export default HomePage;
