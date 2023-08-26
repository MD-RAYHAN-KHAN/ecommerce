import React from "react";
// import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  return (
    <Layout title={"go back- page not found"}>
      <div className="pnf mt-5">
        <h1 className="pnf-title mt-5">404</h1>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <div className="con">
          <div className="btn-1">
            {/* <Link to="/" className="pnf-btn px-5"> */}
             <a className="aa" href="/config"> Go Back</a>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
