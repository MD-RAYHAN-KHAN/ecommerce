/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import "../styles/Nannypage.css";

const VolunteerPage = () => {
    const navigate = useNavigate();
    return (
        <Layout title={"Volunteer Service - Family Care"}>
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
                                src="/images/bg/medicine-bg-3.jpg"
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
                                            <h1 className="fs-h1 letter-spacing pt-2 slider-content-2">Volunteer Service</h1>
                                            <p class="mb-4 pr-5 fs-5 pe-5">
                                                The Volunteer will see the doctor from the patient's home, after Consulting the doctor will drop them back at home.
                                            </p>

                                            <div className="btn-container ">
                                                <NavLink to="/doctor" className="nav-link">
                                                    <button className="btn-1 btn-main-2 btn-icon btn-round-full">
                                                        Volunteer Service
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
                                            <h1 className="fs-h1 letter-spacing pt-2 slider-content-2">Volunteer Service</h1>
                                            <p class="mb-4 pr-5 fs-5 pe-5">
                                                The Volunteer will see the doctor from the patient's home, after Consulting the doctor will drop them back at home.
                                            </p>

                                            <div className="btn-container ">
                                                <NavLink to="/doctor" className="nav-link">
                                                    <button className="btn-1 btn-main-2 btn-icon btn-round-full">
                                                        Volunteer Service
                                                    </button>
                                                </NavLink>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div> */}
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
                                <h2 className="fw-bold">3 simple & easy steps to find your Volunteer</h2>
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
                                <p className="mb-4">Explore more than hundreds of profiles ready to start in the Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="service-item details mb-4">
                            <div>
                                <h4 className="fw-bold">2. Subscribe</h4>
                            </div>
                            <div className="content">
                                <p className="mb-4">Subscribe cost Free and get access to Volunteer contact details</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="service-item mb-4">
                            <div>
                                <h4 className="fw-bold">3. Contact</h4>
                            </div>
                            <div className="content">
                                <p className="mb-4">Contact Volunteer directly – saving money time and easy to contact more than Volunteer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* subcription section end  */}
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
                                                src="/images/blog/blog15.jpg"
                                                className="img-fluid"
                                                alt="bannerimage"
                                                width={"100%"}
                                            />
                                        </div>
                                        <div className="client-info">
                                            <h4>Golam Haidar</h4>
                                            <span>Delivery Boy</span>
                                            <div className="mt-5">
                                                <p className="info-employee">Experience : More than 5 years</p>
                                                <p className="info-employee">Address : Dhaka</p>
                                                <p className="info-employee">Desired job : Live-out</p>
                                                <p className="info-employee">Timing schedule : 6 AM To 10 PM</p>
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
                                                <p className="info-employee">Timing schedule : 10 AM To 11 PM </p>
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
                                            <h4>Foysal Mahabub</h4>
                                            <span>Delivery Boy</span>
                                            <div className="mt-5">
                                                <p className="info-employee">Experience : More than 5 years</p>
                                                <p className="info-employee">Address : Dhaka</p>
                                                <p className="info-employee">Desired job : Live-out</p>
                                                <p className="info-employee">Timing schedule : 9 AM To 9 PM </p>
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
                                            <h4>Golam Haidar</h4>
                                            <span>Delivery Boy</span>
                                            <div className="mt-5">
                                                <p className="info-employee">Experience : More than 5 years</p>
                                                <p className="info-employee">Address : Dhaka</p>
                                                <p className="info-employee">Desired job : Live-out</p>
                                                <p className="info-employee">Timing schedule : 5 AM To 8 PM </p>
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
                                                <p className="info-employee">Timing schedule : 6 AM To 10 PM </p>
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
                                            <h4>Shuvro Dawan</h4>
                                            <span>Delivery Boy</span>
                                            <div className="mt-5">
                                                <p className="info-employee">Experience : More than 5 years</p>
                                                <p className="info-employee">Address : Dhaka</p>
                                                <p className="info-employee">Desired job : Live-out</p>
                                                <p className="info-employee">Timing schedule : 6 AM To 10 PM </p>
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
                                            <h4>Rayhan Haidar</h4>
                                            <span>Delivery Boy</span>
                                            <div className="mt-5">
                                                <p className="info-employee">Experience : More than 5 years</p>
                                                <p className="info-employee">Address : Dhaka</p>
                                                <p className="info-employee">Desired job : Live-out</p>
                                                <p className="info-employee">Timing schedule : 6 AM To 10 PM </p>
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
                                            <h4>Rohan sha</h4>
                                            <span>Delivery Boy</span>
                                            <div className="mt-5">
                                                <p className="info-employee">Experience : More than 5 years</p>
                                                <p className="info-employee">Address : Dhaka</p>
                                                <p className="info-employee">Desired job : Live-out</p>
                                                <p className="info-employee">Timing schedule : 6 AM To 10 PM </p>
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
                                            <h4>Rakib Hassan</h4>
                                            <span>Delivery Boy</span>
                                            <div className="mt-5">
                                                <p className="info-employee">Experience : More than 5 years</p>
                                                <p className="info-employee">Address : Dhaka</p>
                                                <p className="info-employee">Desired job : Live-out</p>
                                                <p className="info-employee">Timing schedule : 6 AM To 10 PM </p>
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
                                            <h4>Rohim Balal</h4>
                                            <span>Delivery Boy</span>
                                            <div className="mt-5">
                                                <p className="info-employee">Experience : More than 5 years</p>
                                                <p className="info-employee">Address : Dhaka</p>
                                                <p className="info-employee">Desired job : Live-out</p>
                                                <p className="info-employee">Timing schedule : 6 AM To 10 PM </p>
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
                                                <p className="info-employee">Timing schedule : 6 AM To 10 PM </p>
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
                                                <p className="info-employee">Timing schedule : 6 AM To 10 PM </p>
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
            {/* volunteer location section start */}
            
            {/* volunteer location section end */}

            {/* about seciton start */}
            <section className="section about bg-light py-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="about-img">
                                <img
                                    src="/images/blog/blog14.jpg"
                                    className="img-fluid"
                                    alt="bannerimage"
                                    width={"100%"}
                                />
                                <img
                                    src="/images/blog/vol-1.jpg"
                                    className="img-fluid mt-4"
                                    alt="bannerimage"
                                    width={"100%"}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="about-img mt-4 mt-lg-0">
                                <img
                                    src="/images/blog/vol-2.jpg"
                                    className="img-fluid me-3"
                                    alt="bannerimage"
                                    width={"100%"}
                                />
                            </div>
                        </div>
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
                    </div>
                </div>
            </section>
            {/* about seciton end */}
        </Layout >
    );
};

export default VolunteerPage;
