import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import {
  listServiceDetails,
  createServiceReview,
} from '../actions/serviceActions'
import { SERVICE_CREATE_REVIEW_RESET } from '../constants/serviceConstants'

const ServiceScreen = ({ history, match }) => {
  // const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

  const serviceDetails = useSelector((state) => state.serviceDetails)
  const { loading, error, service } = serviceDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const serviceReviewCreate = useSelector((state) => state.serviceReviewCreate)
  const {
    success: successServiceReview,
    loading: loadingServiceReview,
    error: errorServiceReview,
  } = serviceReviewCreate

  useEffect(() => {
    if (successServiceReview) {
      setRating(0)
      setComment('')
    }
    if (!service._id || service._id !== match.params.id) {
      dispatch(listServiceDetails(match.params.id))
      dispatch({ type: SERVICE_CREATE_REVIEW_RESET })
    }
  }, [dispatch, match, successServiceReview, service._id])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}`)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createServiceReview(match.params.id, {
        rating,
        comment,
      })
    )
  }

  return (
    <>
      <Link className='btn btn-outline-primary btn-sm my-3' to='/'>
      <i className="fas fa-backward"></i> Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Meta title={service.name} />
          <Row>
            <Col md={6}>
              <Image src={service.image} alt={service.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{service.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={service.rating}
                    text={`${service.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: <span style={{color: '#00A1B1'}}>৳{service.price}</span></ListGroup.Item>
                <ListGroup.Item>
                  Description: {service.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong style={{color: '#00A1B1'}}>৳{service.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {/* <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {service.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item> */}

                  {/* {service.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(service.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )} */}

                  <ListGroup.Item>
                    <Button
                      style={{background: '#00A1B1'}}
                      onClick={addToCartHandler}
                      className='btn-block'
                      type='button'
                      disabled={service.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {service.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant='flush'>
                {service.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>
                  {successServiceReview && (
                    <Message variant='success'>
                      Review submitted successfully
                    </Message>
                  )}
                  {loadingServiceReview && <Loader />}
                  {errorServiceReview && (
                    <Message variant='danger'>{errorServiceReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId='rating'>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as='select'
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value=''>Select...</option>
                          <option value='1'>1 - Poor</option>
                          <option value='2'>2 - Fair</option>
                          <option value='3'>3 - Good</option>
                          <option value='4'>4 - Very Good</option>
                          <option value='5'>5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId='comment'>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as='textarea'
                          row='3'
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        style={{background: '#00A1B1'}}
                        disabled={loadingServiceReview}
                        type='submit'
                        variant='primary'
                      >
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to='/login'>sign in</Link> to write a review{' '}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default ServiceScreen
