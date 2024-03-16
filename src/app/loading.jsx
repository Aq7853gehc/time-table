import React from "react";
import "./loading.scss";

const loading = () => {
  return (
    <div className={"loading-page"}>
      <div className={"loading-spinner"}></div>
      <div className={"loading-text"}>Loading...</div>
    </div>
  );
};

export default loading;
