import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/AuthStyles.css"
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import TextArea from "antd/es/input/TextArea";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth", {
        name,
        email,
        phone,
        address,
        message,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        // navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      
    }
  };
  return (
    <Layout title={"Contact Us - Family Care"}>
      <div className="container-fluid mt-120">
        <div className=" containe row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center">
              <h2 className="fs-h2 letter-spacing">Get in touch with us</h2>
              <div className="divider mx-auto my-4" />
              <p className=""> We're here to help. Send your query or question below and provide us with as much details as possible. We will answer your query as soon as
                possible. We aim to reply to your query within 24 hours.</p>
            </div>
          </div>
          <hr className="shadow-2" />
        </div>
        <div className="form-container  contact-from">
          <form onSubmit={handleSubmit}>
            <h4 className="title py-3">CONTACT FORM</h4>
            <div className="mb-3">
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="inputName"
                placeholder="Enter Your Name"
                required
                autoFocus
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="inputEmail"
                placeholder="Enter Your Email "
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                id="inputPhone"
                placeholder="Enter Your Mobile"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                id="InputAddress"
                placeholder="Enter Your Address"
                required
              />
            </div>
            <div className="mb-3">
                <TextArea
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control"
                  id="InnputMessage"
                  placeholder="Enter Your Qurey"
                  required
                />
              </div>
            <div className="text-center">
              <button type="submit" className='btn btn-main-2 rounded w-100'>
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
