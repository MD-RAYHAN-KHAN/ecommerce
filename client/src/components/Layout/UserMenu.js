import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
const UserMenu = () => {
  const [auth] = useAuth();
  return (
    <div>
      <div className="text-center dashboard-menu">
        <div className="list-group">
          {/* <h4>Dashboard</h4> */}
          <NavLink
            to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
            className="list-group-item-action"
          >
            <h4>Dashboard</h4>
          </NavLink>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
