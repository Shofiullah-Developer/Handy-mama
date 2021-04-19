import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={3}>
            <h5>Information</h5>
            <ListGroup variant='flush'>
              <ListGroup.Item id="list-item">
                <Link id="list-item-link" to='/about'>About Us</Link>
              </ListGroup.Item>
              <ListGroup.Item id="list-item">
                <Link id="list-item-link" to='/contact'>Contact Us</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <h5>Customer Service</h5>
            <ListGroup variant='flush'>
              <ListGroup.Item id="list-item">
                <Link id="list-item-link" to='/security'>Security Policy</Link>
              </ListGroup.Item>
              <ListGroup.Item id="list-item">
                <Link id="list-item-link" to='/shipping-replacement'>Shipping & Replacement</Link>
              </ListGroup.Item>
              <ListGroup.Item id="list-item">
                <Link id="list-item-link" to='/privacy'>Privacy Policy</Link>
              </ListGroup.Item>
              <ListGroup.Item id="list-item">
                <Link id="list-item-link" to='/terms'>Terms of Use</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <h5>My Account</h5>
            <ListGroup variant='flush'>
              <ListGroup.Item id="list-item">
                <Link id="list-item-link" to='/customer'>Customer Info</Link>
              </ListGroup.Item>
              <ListGroup.Item id="list-item">
                <Link id="list-item-link" to='/addresses'>Addresses</Link>
              </ListGroup.Item>
              <ListGroup.Item id="list-item">
                <Link id="list-item-link" to='/orders'>Orders</Link>
              </ListGroup.Item>
              <ListGroup.Item id="list-item">
                <Link id="list-item-link" to='/shopping'>Shopping Cart</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <ListGroup variant='flush'>
              <ListGroup.Item id="list-item">
              <i className="fas fa-map-marker-alt"></i> Ashulia, Nolam, Savar , Dhaka 1344
              </ListGroup.Item>
              <ListGroup.Item id="list-item">
              <i className="fas fa-envelope"></i> support@handymama.com.bd
              </ListGroup.Item>
              <ListGroup.Item id="list-item">
              <i className="fas fa-mobile"></i> 0123456789
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
