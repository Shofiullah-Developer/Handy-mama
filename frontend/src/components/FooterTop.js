import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const FooterTop = () => {
  return (
    <section className='text-right footer-top'>
      <Container>
        <Row>
          <Col>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-instagram'></i>
            <i className='fab fa-youtube'></i>
            <i className='fab fa-linkedin-in'></i>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FooterTop;
