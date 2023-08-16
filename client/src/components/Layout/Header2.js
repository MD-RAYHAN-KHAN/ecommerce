import React from "react";
import { NavLink, Link } from "react-router-dom";
import SearchInput from "../Form/SearchInput";
import { useCart } from "../../context/cart";
import { Badge } from "antd";

const Header = () => {
    const [cart] = useCart();
    return (
        <>
            <div className="container-fluid mt-md-5">
                <div className="container d-flex">
                    <div className="me-auto">
                        <Link to="/">
                            <img
                                src="/logo.png"
                                className="logo-img pt-3"
                                alt="logo"
                                width={"8%"}
                            />
                        </Link>
                    </div>
                    <div className="col-4 me-auto">
                        <SearchInput />
                    </div>
                    <div>
                        <div className="col-5 me-auto">
                            <NavLink to="/cart" className="nav-link">
                                <Badge count={cart?.length} showZero offset={[10, -5]}>
                                    Cart
                                </Badge>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
