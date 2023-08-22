import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "../../styles/AuthStyles.css";


const NurseRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [bmdcNo, setBmdcNo] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        mobile,
        bmdcNo,
        department,
        gender,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Ecommer App">
      <div className='nurseSignUp container-fluid'>
        <div className='container mt-4'>
          {/* <div className='col-6  pb-5 center'> */}
          <div className="py-4 row" style={{ minHeight: "90vh" }}>
            <div className="form-container col-sm-12 col-lg-6">
              <form onSubmit={handleSubmit} className='m-auto my-2 pe-4 w-100'>
                <h4 className="title py-3">Nurse Registation Form</h4>
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
                <div className='d-flex'>
                  <div className='relative col-6 pe-2 mb-3'>
                    <input
                      type="password"
                      value={password}
                      name="InputPassword"
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      id="password"
                      placeholder="Enter Password"
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
                  <div className='relative col-6 mb-3'>
                    <input
                      type="password"
                      value={repassword}
                      name="InputPassword"
                      onChange={(e) => setRePassword(e.target.value)}
                      className="form-control"
                      id="password"
                      placeholder="Enter Re-Password"
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
                </div>
                <div className='mb-3'>
                  <input
                    type="text"
                    value={mobile}
                    name="inputMobile"
                    onChange={(e) => setMobile(e.target.value)}
                    className="form-control"
                    id="mobile"
                    placeholder="Enter Mobile Number"
                    required
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type="text"
                    value={bmdcNo}
                    name="inputBMDCNo"
                    onChange={(e) => setBmdcNo(e.target.value)}
                    className="form-control"
                    id="bmdcNo"
                    placeholder="Enter BMDC Number"
                    required
                  />
                </div>
                <div className='form-group d-flex'>
                  <div className='col-6'>
                    <div className='mb-3'>
                      <select
                        className="form-control"
                        id="department"
                        name="department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        required
                      >
                        <option value="">Select Department</option>
                        <option value="medicine">Medicine</option>
                        <option value="nutritionest">Nutritionest</option>
                        <option value="general-surgery">General Surgery</option>
                      </select>
                    </div>
                  </div>
                  <div className='d-flex col-6 ms-3 mt-2'>
                    <label className='col-3'>Gender:</label>
                    <div className='justify-content-around d-flex col-9'>
                      <div className="de-flex align-items-center">
                        <label className="me-2" htmlFor="male">Male</label>
                        <input
                          className=""
                          type="radio"
                          name="gender"
                          value="male"
                          checked={gender === 'male'}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="me-2" htmlFor="female">Female</label>
                        <input
                          className="me-2"
                          type="radio"
                          name="gender"
                          value="female"
                          checked={gender === 'female'}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" className='btn btn-main-2 btn-radius w-100 mt-lg-2'>
                  Sign Up
                </button>
              </form>
            </div>
            {/* <div className='signup-img col-sm-12 col-lg-6 image-fluid '>
              <img className='' src='/Images/blog/blog12.jpg' alt="sideImage" />
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NurseRegister;
