import React from "react";

const BusinessSummary = () => {
  return (
    <div
      data-aos-delay="200"
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="my-12"
    >
      <h1 className="text-center text-secondary text-3xl mt-12 font-bold">
        Business Summary
      </h1>
      <h2 className="text-center font-mono ... text-3xl mb-12 mt-2">
        Try Our Best To Understand Users Expectation
      </h2>
      <div className="stats stats-vertical w-full text-center lg:stats-horizontal text-primary shadow">
        <div className="stat">
          <div className="stat-title  text-5xl font-bold">
            <i className="fa-solid fa-people-line"></i>
          </div>
          <div className="stat-value  py-4">300+ </div>
          <div className="stat-desc text-3xl font-bold">customers</div>
        </div>
        <div className="stat">
          <div className="stat-title  text-5xl font-bold">
            <i className="fa-solid fa-sack-dollar"></i>
          </div>
          <div className="stat-value  py-4">31K+</div>
          <div className="stat-desc text-3xl  font-bold">Annual Revenue</div>
        </div>
        <div className="stat">
          <div className="stat-title  text-5xl font-bold">
            <i className="fa-regular fa-comments"></i>
          </div>
          <div className="stat-value  py-4">31M+</div>
          <div className="stat-desc text-3xl  font-bold">Reviews</div>
        </div>
        <div className="stat">
          <div className="stat-title text-5xl font-bold">
            <i className="fa-solid fa-screwdriver-wrench"></i>
          </div>
          <div className="stat-value  py-4">10,000+</div>
          <div className="stat-desc text-3xl font-bold">Parts</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
