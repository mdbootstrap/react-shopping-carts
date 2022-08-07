import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/basic">
        <MDBBtn className="m-3">
          Basic
        </MDBBtn>
      </Link>
      <Link to="/quantity">
        <MDBBtn className="m-3">
          Quantity edit
        </MDBBtn>
      </Link>
      <Link to="/payment">
        <MDBBtn className="m-3">
          Payment methods
        </MDBBtn>
      </Link>
      <Link to="/product-cards">
        <MDBBtn className="m-3">
          Product Cards
        </MDBBtn>
      </Link>
      <Link to="/cart-checkout">
        <MDBBtn className="m-3">
          Cart checkout
        </MDBBtn>
      </Link>
      <Link to="/review-page">
        <MDBBtn className="m-3">
          Review Page
        </MDBBtn>
      </Link>
      <Link to="/summary-page">
        <MDBBtn className="m-3">
          Summary Page
        </MDBBtn>
      </Link>
    </MDBContainer>
  );
}