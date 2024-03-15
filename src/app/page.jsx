import React from "react";
import "./page.scss";
const page = () => {
  return (
    <main className="container">
      <div className="text-container">
        <h3>
          <span>Time</span> management
        </h3>

        <div className="btn-wrapper">
          <button>get start</button>
        </div>
      </div>
      <div className="img-container">
        <img src="/time1.svg" alt="" className="img1" />
        <img src="/time2.svg" alt="" className="img2" />
      </div>
    </main>
  );
};

export default page;
