import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
const AdminDashboard = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  return (
    <Layout title="SuperAdmin - Family Care">
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3 shadow-2">
              <h5> Admin Name : {auth?.user?.name}</h5>
              <p> Admin Email : {auth?.user?.email}</p>
              <p> Admin Contact : {auth?.user?.mobile}</p>
              <p> Admin Contact : {auth?.user?.address}</p>
              <button
                className="btn btn-outline-dark shadow-2 w-25"
                onClick={() => navigate("/dashboard/user/profile")}
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;

