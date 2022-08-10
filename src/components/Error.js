import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const history = useNavigate();

  return (
    <>
      <div className="container mt-3">
        <div className="error d-flex flex-column justify-content-lg-center align-items-center">
          <h4 className="text-center">
            <h1>404</h1>Page Not Found
          </h4>
          <button
            className="btn btn-secondary mt-3"
            onClick={() => history("/")}
          >
            돌아가기
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
