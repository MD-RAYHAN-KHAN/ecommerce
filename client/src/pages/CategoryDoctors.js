/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import "../styles/CategoryProductStyles.css";
import axios from "axios";
import toast from "react-hot-toast";

const CategoryDoctor = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [doctorcategory, setDoctorCategory] = useState([]);
  const [cart, setCart] = useCart();
  // eslint-disable-next-line no-unused-vars
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-Doctorcategory/${params.slug}`
      );
      setDoctors(data?.Doctors);
      setDoctorCategory(data?.doctorcategory);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Product details - Family Care"}>
      <div className="container mt-3 Doctorcategory">
        <h4 className="text-center">DoctorCategory - {doctorcategory?.name}</h4>
        <h6 className="text-center">{doctors?.length} result found </h6>
        <div className="row">
          <div className="col-md-9 offset-1">
            <div className="d-flex flex-wrap">
              {doctors?.map((p) => (
                <div className="card m-2" key={p._id}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <div className="card-name-price">
                      <h5 className="card-title">{p.name}</h5>
                      <h5 className="card-title card-price">
                        {p.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "BDT",
                        })}
                      </h5>
                    </div>
                    <p className="card-text ">
                      {p.description.substring(0, 60)}...
                    </p>
                    <div className="card-name-price">
                      <button
                        className="btn btn-info ms-1"
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
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryDoctor;
