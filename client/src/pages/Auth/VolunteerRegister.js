import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "../../styles/AuthStyles.css";


const VolunteerRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [nid, setNid] = useState("");
  const [mobile, setMobile] = useState("");
  const [education, setEducation] = useState("");
  const [category, setCategory] = useState("");
  const [divsion, setDivsion] = useState("");
  const [district, setDistrict] = useState("");
  const [thana, setThana] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
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
        nid,
        mobile,
        education,
        category,
        divsion,
        district,
        thana,
        gender,
        address
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
    <Layout title="Register - Family Care">
      <div className='volSignUp container-fluid'>
        <div className='container mt-4'>
          {/* <div className='col-6  pb-5 center'> */}
          <div className="py-4 row" style={{ minHeight: "90vh" }}>
            <div className="form-container col-sm-12 col-lg-7">
              <form onSubmit={handleSubmit} className='m-auto my-2 pe-4 w-100'>
                <h4 className="title py-3">Volunteer Registation Form</h4>
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
                <div className="mb-3 relative">
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
                  <div className='col-6 pe-1 mb-3 relative'>
                    <input
                      type={visible ? "text" : "password"}
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
                  <div className='col-6 mb-3 ps-1 relative'>
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
                <div className='d-flex'>
                  <div className='col-6 pe-1 mb-3'>
                    <input
                      type="text"
                      value={nid}
                      name="inputnid"
                      onChange={(e) => setNid(e.target.value)}
                      className="form-control"
                      id="nid"
                      placeholder="Enter Nid Number"
                      required
                    />
                  </div>
                  <div className='col-6 ps-1 mb-3'>
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
                </div>
                <div className='mb-3'>
                  <input
                    type="education"
                    value={education}
                    name="Inputeducation"
                    onChange={(e) => setEducation(e.target.value)}
                    className="form-control"
                    id="education"
                    placeholder="Enter last Education"
                    required
                  />
                </div>
                <div className='mb-3'>
                  <select
                    className="form-control"
                    id="category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="medicine">Medicine</option>
                    <option value="nutritionest">Nutritionest</option>
                    <option value="general-surgery">General Surgery</option>
                  </select>
                </div>
                <div className='form-group d-flex'>
                  <div className='col-6 mb-3 pe-1'>
                    <select
                      className="form-control"
                      id="divsion"
                      name="divsion"
                      value={divsion}
                      onChange={(e) => setDivsion(e.target.value)}
                      required
                    >
                      <option value="">Select Divsion</option>
                      <option value="dhaka">Dhaka</option>
                      <option value="chattogram">Chattogram</option>
                      <option value="rajshahi">Rajshahi</option>
                      <option value="barishal">barishal</option>
                      <option value="khulna">Khulna</option>
                      <option value="rangpur">rangpur</option>
                      <option value="sylhet">Sylhet</option>
                      <option value="mymensingh ">Mymensingh </option>
                    </select>
                  </div>
                  <div className='col-6 ps-1 mb-3'>
                    <select
                      className="form-control"
                      id="district"
                      name="district"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      required
                    >
                      <option value="">Select District</option>
                      <option value="dhaka">Dhaka</option>
                      <option value="gazipur">Gazipur</option>
                      <option value="narayanganj">Narayanganj</option>
                    </select>
                  </div>
                </div>
                <div className='form-group d-flex'>
                  <div className='col-6'>
                    <div className='mb-3 pe-1'>
                      <select
                        className="form-control"
                        id="thana"
                        name="thana"
                        value={thana}
                        onChange={(e) => setThana(e.target.value)}
                        required
                      >
                        <option value="">Select thana</option>
                        <option value="dhanmondi">Dhanmondi</option>
                        <option value="gulshan">Gulshan</option>
                        <option value="mirpur">Mirpur</option>
                        <option value="mohammadpur">Mohammadpur</option>
                        <option value="jatrabari">Jatrabari</option>
                        <option value="uttara">Uttara</option>
                        <option value="ramna">Ramna</option>
                        <option value="rampura">Rampura</option>
                        <option value="sherBanglaNagar">Sher-e-Bangla Nagar</option>
                        <option value="motijheel">Motijheel</option>
                        <option value="badda">Badda</option>
                        <option value="pallabi">Pallabi</option>
                        <option value="paltan">Paltan</option>
                        <option value="darusSalam">Darus Salam</option>
                        <option value="tejgaon">Tejgaon</option>
                        <option value="newMarket">New Market</option>
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
                <div className='mb-3'>
                  <input
                    type="address"
                    value={address}
                    name="Inputaddress"
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    id="address"
                    placeholder="Enter Address"
                    required
                  />
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

export default VolunteerRegister;
