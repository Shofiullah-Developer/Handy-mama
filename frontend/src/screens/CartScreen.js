import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = ({ match, location, history }) => {
  const serviceId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (serviceId) {
      dispatch(addToCart(serviceId, qty));
    }
  }, [dispatch, serviceId, qty]);

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map(item => (
              <ListGroup.Item className="shadow" key={item.service}>
                <Row>
                  <Col md={3}>
                    <Image
                      style={{ border: "2px solid #00A1B1" }}
                      src={item.image}
                      alt={item.name}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={3}>
                    <Link to={`/service/${item.service}`}>{item.name}</Link>
                  </Col>
                  <Col md={3}>
                    {" "}
                    <span style={{ color: "#00A1B1" }}>৳{item.price}</span>
                  </Col>
                  {/* <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={e =>
                        dispatch(
                          addToCart(item.service, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map(x => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col> */}
                  <Col md={3}>
                    <Button
                      size='sm'
                      type='button'
                      variant='danger'
                      onClick={() => removeFromCartHandler(item.service)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              <span style={{ color: "#00A1B1" }}>
                ৳
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                style={{ background: "#00A1B1" }}
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
