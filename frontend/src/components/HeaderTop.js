import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <section className="header-top">
    <nav className="container">
      <Row>
        <Col md={4}>
          Trusted Online Shopping Site in Bangladesh
        </Col>
        <Col md={4}>
          <i className='fas fa-phone'></i> 01880331533 (9am to 11pm)
        </Col>
        <Col className="text-right" md={4}>
          <Link to='/buy'>How to buy</Link>
          <Link className="ml-3" to='/sell'>How to sell</Link>
        </Col>
      </Row>
    </nav>
    </section>
  );
};

export default HeaderTop;
