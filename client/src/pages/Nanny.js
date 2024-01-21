/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
// import "../styles/Homepage.css";
import "../styles/Nannypage.css";

const NannyPage = () => {
    const navigate = useNavigate();
    return (
        <Layout title={"Nanny Service - Family Care"}>
            {/* banner image */}
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
                                src="/images/bg/slider-bg-4.jpg"
                                className="banner-img"
                                alt="bannerimage"
                                width={"100%"}
                            />
                            <div className="carousel-caption mb-lg-200 d-none d-md-block">
                                <div className="row">
                                    <div className="col-lg-10 col-md-12 col-xl-7">
                                        <div className=" m-auto">
                                            <div className="divider mb-3 pb-2" />
                                            <span className="text-uppercase letter-spacing fw-bold">Total Health & Family Care solution</span>
                                            <h1 className="fs-h1 letter-spacing pt-2 slider-content-2">Find available nannies and maids in the BD</h1>
                                            <p class="mb-4 pr-5 fs-5 pe-5">
                                                A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam
                                                aperiam maiores sunt fugit, deserunt rem suscipit placeat.
                                            </p>

                                            <div className="btn-container ">
                                                <NavLink to="/doctor" className="nav-link">
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
                        {/* <div className="carousel-item">
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
                                            <h1 className="fs-h1 letter-spacing pt-2 content-2">Your most trusted health partner</h1>
                                            <p class="mb-4 pr-5 fs-5">
                                                A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam
                                                aperiam maiores sunt fugit, deserunt rem suscipit placeat.
                                            </p>

                                            <div className="btn-container ">
                                                <NavLink to="/doctor" className="nav-link">
                                                    <button className="btn-1 btn-main-2 btn-icon btn-round-full">
                                                        NannyConsultation
                                                    </button>
                                                </NavLink>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="carousel-item">
                            <img
                                src="/images/bg/slider-bg-5.jpg"
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
                                                    <button className="btn-1 btn-main-2 btn-icon btn-round-full">Nanny Service</button>
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
            {/* subcription section start */}
            <section className="container-fluid bg-light pt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title text-center">
                                <h2 className="fw-bold">3 simple & easy steps to find your nanny</h2>
                                <div className="divider mx-auto my-4" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row container m-auto mt-4">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="service-item mb-4">
                            <div>
                                <h4 className="fw-bold">1. Explore</h4>
                            </div>
                            <div className="content">
                                <p className="mb-4">Explore hundreds of profiles ready to start in the Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="service-item details mb-4">
                            <div>
                                <h4 className="fw-bold">2. Subscribe</h4>
                            </div>
                            <div className="content">
                                <p className="mb-4">Subscribe cost Free and get access to nurse contact details</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="service-item mb-4">
                            <div>
                                <h4 className="fw-bold">3. Contact</h4>
                            </div>
                            <div className="content">
                                <p className="mb-4">Contact nannies directly – saving thousands on agency fees</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* subcription section end  */}
            {/* Our plans secion start */}
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title text-center">
                                <p className="pt-5">
                                    PRICING
                                </p>
                                <h2 className="fs-h2 letter-spacing">Our Plans</h2>
                                <div className="divider mx-auto my-3" />
                                <p className="">One time fee - No automatic renewal & No additional agency fee</p>
                            </div>
                        </div>
                    </div>
                    <div className="row container m-auto mt-4">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="mb-4 box-shadow-item round-full text-center ">
                                <div className="text-center bg-info w-100 round-top py-3">
                                    <h4 className="fw-bold text-white">Basic Plan</h4>
                                    <h6 className="fw-bold text-white">One Week</h6>
                                </div>
                                <div className="content bg-white round-bottom p-4">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <h2 className="text-info">Taka</h2>
                                        <h4 className="text-info ps-2">3000</h4>
                                    </div>
                                    <div className="item-info px-3">
                                        <p>New profiles every 24h</p>
                                        <p>Personal space to manage your shortlist</p>
                                        <p>100% refund if you are not satisfied</p>
                                        <p>500 taka discount on our partner visa services</p>
                                    </div>
                                    <Link to="/Contact" className="btn item_button btn-outline-dark">Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="mb-4 box-shadow-item round-full text-center item-border">
                                <div className="text-center bg-white w-100 round-top py-3">
                                    <h4 className="fw-bold text-info">Best Offer</h4>
                                    <h6 className="fw-bold text-info">One Month</h6>
                                </div>
                                <div className="content bg-white round-bottom p-4">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <h2 className="text-info">Taka</h2>
                                        <h4 className="text-info ps-2">18000</h4>
                                    </div>
                                    <div className="item-info px-3">
                                        <p>New profiles every 24h</p>
                                        <p>Personal space to manage your shortlist</p>
                                        <p>100% refund if you are not satisfied</p>
                                        <p>500 taka discount on our partner visa services</p>
                                    </div>
                                    <Link to="/Contact" className="btn item_button_two btn-outline-dark">Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="mb-4 box-shadow-item round-full text-center ">
                                <div className="text-center bg-info w-100 round-top py-3">
                                    <h4 className="fw-bold text-white">Basic Plan</h4>
                                    <h6 className="fw-bold text-white">One Week</h6>
                                </div>
                                <div className="content bg-white round-bottom p-4">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <h2 className="text-info">Taka</h2>
                                        <h4 className="text-info ps-2">10000</h4>
                                    </div>
                                    <div className="item-info px-3">
                                        <p>New profiles every 24h</p>
                                        <p>Personal space to manage your shortlist</p>
                                        <p>100% refund if you are not satisfied</p>
                                        <p>500 taka discount on our partner visa services</p>
                                    </div>
                                    <Link to="/Contact" className="btn item_button btn-outline-dark">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title text-center">
                                <h5>*Dedicated consultant :</h5>
                                <p>
                                    Share all your requirements with our consultant and get minimum 3 shortlisted and pre-interviewed candidates per week.Offered free suggested replacement after one month of trial with the nanny / maid
                                </p>
                                <h5>You have already found your nanny / maid ?</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* our plans section end  */}

            {/* nurse section start */}
            <section className="nurse px-3 mt-5">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="section-title text-center">
                                    <h2 className="fs-h2 letter-spacing">View available Nanny</h2>
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
            {/* nurse section end  */}

            {/* your nanny section start */}
            <section className="container-fluid bg-light bg-nanny py-5">
                <div className="py-5 text-center">
                    <h2 className="fw-bold">Your nanny is waiting for you !</h2>
                    <p>
                        Benefit from full access to our database of nannies and get in touch with them directly
                    </p>
                    <button className="item_button_two my-3">
                        Get Started
                    </button>
                </div>
            </section>
            {/* your nanny section end */}

            {/* about seciton start */}
            <section className="section about bg-light py-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 ps-lg-4">
                            <div className="about-content pl-4 mt-4 mt-lg-0">
                                <h2 className="title-color fs-h2">Personal care <br />&amp; healthy living</h2>
                                <p className="mt-4 mb-5">
                                    We provide best leading medicle service Nulla perferendis veniam deleniti
                                    ipsum officia dolores repellat laudantium obcaecati neque.
                                </p>
                                <NavLink to="/Service" className="btn btn-main-2 rounded-pill py-2 px-5 btn-icon">Services..</NavLink>
                            </div>
                        </div>
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
                    </div>
                </div>
            </section>
            {/* about seciton end */}
        </Layout >
    );
};

export default NannyPage;
