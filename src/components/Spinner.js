import React from "react";
import { useSelector } from "react-redux/es/exports";

const Spinner = () => {
  const condition = useSelector((state) => state.loading);
  // the spinner border are actually rotating
  return (
    condition && (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          position: "absolute",
          left: "0",
          top: "0",
          backgroundColor: "gray",
          opacity: ".7",
        }}
      >
        <div
          className="spinner-border text-success"
          role="status"
          style={{}}
        ></div>
      </div>
    )
  );
};

export default Spinner;
