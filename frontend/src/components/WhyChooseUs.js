import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

const WhyChooseUs = () => {
  return (
    <>
    <h1 className='text-center my-5'>Why Choose Us</h1>
    <Row className='text-center mb-5'>
      <Col md={6}>
        <Image src='/images/on-time.png' />
        <h3>On Time</h3>
        <p>We strictly adhere to the timings assigned to us. You set the time and we'll stay committed to it!</p>
      </Col>
      <Col md={6}>
        <Image src='/images/pricing.png' />
        <h3>Standard Pricing</h3>
        <p>You don't have to break the bank to get your problem fixed. Our services are aptly priced without hidden costs!</p>
      </Col>
      <Col md={6}>
        <Image src='/images/certified.png' />
        <h3>Efficient Ergonomics</h3>
        <p>We have accredited equipment and committed experts to see the work through with ease</p>
      </Col>
      <Col md={6}>
        <Image src='/images/professional.png' />
        <h3>Certified Professionals</h3>
        <p>All our professionals are certified and excel in their respective fields. They are dedicated and know their jobs well</p>
      </Col>
    </Row>
    </>
  )
}

export default WhyChooseUs
