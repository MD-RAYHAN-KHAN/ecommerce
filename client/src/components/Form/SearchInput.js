import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="subscribe-form">
      <form
        className="search-form subscribe"
        role="search"
        onSubmit={handleSubmit}
      >
        <div className="d-flex">
          <input
            className="form-control w-100"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={values.keyword}
            onChange={(e) => setValues({ ...values, keyword: e.target.value })}
          />
          <button className="btn rounded-pill py-2 px-4" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
