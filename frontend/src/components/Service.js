import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'

const Service = ({ service }) => {
  return (
    <Card className='my-4 p-3 rounded animate'>
      <Link to={`/service/${service._id}`}>
        <Card.Img src={service.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/service/${service._id}`}>
          <Card.Title as='div'>
            <strong>{service.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={service.rating}
            text={`${service.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text style={{color: '#00A1B1'}} as='h3'>৳{service.price}</Card.Text>
      </Card.Body>
      <Link className='text-center see-details' to={`/service/${service._id}`}>
        <Button size='sm' variant='outline-primary' className="btn-block">See Details...</Button>
      </Link>
    </Card>
  )
}

export default Service
