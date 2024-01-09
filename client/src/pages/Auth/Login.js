import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Login - Family Care">
      <div id="form-login " className="form-container docSignUp" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit} className="container">
          <h4 className="title py-4">Family Care</h4>

          <div className="mb-4">
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="relative mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
            {visible ? (
              <AiOutlineEye
                className="absolute cursor-pointer"
                size={25}
                onClick={() => setVisible(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute cursor-pointer"
                size={25}
                onClick={() => setVisible(true)}
              />
            )}
          </div>
          {/* <div className="mb-3">
            <button
              type="button"
              className="btn forgot-btn"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div> */}

          <div className="text-center">
            <button type="submit" className="btn btn-outline-dark px-4 my-2">
              LOGIN
            </button>
          </div>
          <div className="forgatepass">
            <p onClick={() => {
              navigate("/forgot-password");
            }}>
              Forgot Password?
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
