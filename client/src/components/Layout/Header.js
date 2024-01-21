import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import { FaOpencart } from 'react-icons/fa';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <div className="container-fluid light-bg d-flex align-items-center">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container ms-sm-2 mt-sm-2 ms-lg-0 ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse ms-5" id="navbarTogglerDemo01">
              <Link to="/" className="navbar-brand">
                <div className="logo">
                  <img
                    src="logo-22.png"
                    className="logo"
                    alt=" Family Care"
                    width={"70%"}
                  />
                </div>
              </Link>
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link mt-sm-4 mt-lg-0">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/nurse" className="nav-link">
                    Nurse
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/nanny" className="nav-link">
                    Nanny
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/volunteer" className="nav-link">
                    Volunteer
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/doctor" className="nav-link">
                    Doctor
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to={"/categories"}
                    data-bs-toggle="dropdown"
                  >
                    Medicine
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/categories"}>
                        All Categories
                      </Link>
                    </li>
                    {categories?.map((c) => (
                      <li>
                        <Link
                          className="dropdown-item"
                          to={`/category/${c.slug}`}
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to="/blog" className="nav-link">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>

                {!auth?.user ? (
                  <>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={"/register"}
                        data-bs-toggle="dropdown"
                      >
                        Registation
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to={"/register"}>
                            User Registation
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={"/docregister"}>
                            Doctor Registation
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={"/nurseregister"}>
                            Nuser Registation
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={"/volregister"}>
                            Volunteer Registation
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={"/diagnosticregister"}>
                            Diagnostic Center Registation
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/login" className="nav-link">
                        Login
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{ border: "none" }}
                      >
                        {auth?.user?.name}
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"
                              }`}
                            className="dropdown-item"
                          >
                            Dashboard
                          </NavLink>
                          {/* <NavLink
                            to={`/dashboard/${auth?.user?.role === 0 ? "admin" : auth?.user?.role === 2 ? "doctor" : auth?.user?.role === 3 ? "nurse" : auth?.user?.role === 4 ? "volunteer" : "user"}`}
                            className="dropdown-item"
                          >
                            Dashboard
                          </NavLink> */}
                        </li>
                        <li>
                          <NavLink
                            onClick={handleLogout}
                            to="/login"
                            className="dropdown-item"
                          >
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
                {/* <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  <Badge count={cart?.length} showZero offset={[10, -5]}>
                    Cart
                  </Badge>
                </NavLink>
              </li> */}
              </ul>
            </div>
          </div>
          <div className="d-flex ms-sm-4 mt-sm-2 col-sm-12 col-lg-3 mt-minus-10 mb-2 ms-auto">
            <div className="col-10 ms-auto">
              <SearchInput />
            </div>
            <div className="col-4 ms-auto mt-3 ">
              <NavLink to="/cart" className="nav-link">
                <Badge count={cart?.length} showZero offset={[10, -5]}>
                  {/* <p className="Bolder">Cart</p> */}
                  <FaOpencart className="cart-icon" />
                </Badge>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
