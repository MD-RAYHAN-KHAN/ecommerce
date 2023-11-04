import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import { AiOutlineReload } from "react-icons/ai";
import Layout from "../components/Layout/Layout";
import "../styles/Homepage.css";

const DoctorCategories = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [doctors, setDoctors] = useState([]);
  const [doctorCategories, setDoctorCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setDoctorCategories(data?.doctorCategory);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllDoctors = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setDoctors(data.doctors);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [page]);

  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setDoctors([...doctors, ...data?.doctors]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleFilter = (value, id) => {
    const updatedChecked = value
      ? [...checked, id]
      : checked.filter((c) => c !== id);
    setChecked(updatedChecked);
  };

  const filterDoctors = useCallback(async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setDoctors(data?.doctors);
    } catch (error) {
      console.log(error);
    }
  }, [checked, radio]);

  useEffect(() => {
    getAllCategory();
    getTotal();
    getAllDoctors();
  }, [getAllDoctors]);

  useEffect(() => {
    if ((!checked.length || !radio.length) && !loading) {
      getAllDoctors();
    }
  }, [checked.length, radio.length, loading, getAllDoctors]);

  useEffect(() => {
    if (checked.length || radio.length) {
      filterDoctors();
    }
  }, [checked, radio, filterDoctors]);

  return (
    <Layout title={"All Categories"}>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row container">
          {doctorCategories.map((c) => (
            <div className="col-md-4 col-lg-3 mt-3 mb-3 gx-3 gy-3" key={c._id}>
              <div className="card">
                <Link
                  to={`/category/${c.slug}`}
                  className="btn btn-outline-secondary px-0"
                >
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="catagory d-flex justify-content-around mb-5">
        {/* <div className="d-flex justify-content-between">
          <div className="divider" />
          <div className="divider" />
          <div className="divider" />
        </div>
        <div className="d-flex justify-content-between mt-5 container-fluid">
          <div className="divider" />
          <div className="divider" />
        </div> */}
        <div className=" container ms-lg-5 catagory mt-3 home-page d-flex row">
          <div className="col-3">
            <div className="shadow">
              <h4 className="">Filter By Category</h4>
              <div className="d-flex flex-column">
                {doctorCategories?.map((c) => (
                  <Checkbox
                    key={c._id}
                    onChange={(e) => handleFilter(e.target.checked, c._id)}
                  >
                    {c.name}
                  </Checkbox>
                ))}
              </div>
            </div>
            <div className="shadow mt-4">
              <h4 className="mt-4">Filter By Price</h4>
              <div className="d-flex flex-column">
                <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                  {Prices?.map((p) => (
                    <div key={p._id}>
                      <Radio value={p.array}>{p.name}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </div>
            </div>
            <div className="shadow mt-4">
              <div className="d-flex flex-column">
                <button
                  className="btn btn-danger"
                  onClick={() => window.location.reload()}
                >
                  RESET FILTERS
                </button>
              </div>
            </div>
          </div>
          <div className="col-9 d-flex">
            <div className="d-flex flex-wrap">
              {doctors?.map((p) => (
                <div className="card m-2" key={p._id}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top bg-none"
                    alt={p.name}
                  />
                  <div className="card-body shadow-3">
                    <div className="card-name-price">
                      <h5 className="card-title">{p.name}</h5>
                      <h5 className="card-title card-price text-dark">
                        {p.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "BDT",
                        })}
                      </h5>
                    </div>
                    <p className="card-text">
                      {p.description.substring(0, 60)}...
                    </p>
                    <div className="card-name-price">
                      <button
                        className="btn btn-main-2 text-white ms-1"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button>
                      <button
                        className="btn btn-dark ms-1"
                        onClick={() => {
                          setCart([...cart, p]);
                          localStorage.setItem(
                            "cart",
                            JSON.stringify([...cart, p])
                          );
                          toast.success("Item Added to cart");
                        }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="m-2 p-3">
              {doctors && doctors.length < total && (
                <button
                  className="btn loadmore"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {loading ? (
                    "Loading ..."
                  ) : (
                    <>
                      Loadmore <AiOutlineReload />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DoctorCategories;
