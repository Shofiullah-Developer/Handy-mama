import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";

const FooterBottom = () => {
  return (
    <section className='footer-bottom'>
    <Container>
      <Row className="d-flex align-items-center">
        <Col md={6}>
          <Image src='/payment-icons/paypal.png' alt='Paypal' />
          <Image src='/payment-icons/visa.png' alt='Visa' />
          <Image src='/payment-icons/mastercard.png' alt='Mastercard' />
          <Image className='ml-3' src='/payment-icons/bkash.png' alt='Bkash' />
          <Image className='ml-3' src='/payment-icons/cash-on.png' alt='Cash on' />
        </Col>
        <Col md={6}>
          <p className="mb-0 text-right text-muted">Copyright © 2021 handymama.com.bd All rights reserved.</p>
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default FooterBottom;
