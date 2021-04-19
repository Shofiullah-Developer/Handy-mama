import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'

const HomeService = () => {
  return (
    <>
    <h1 className='text-center my-5'>How HomeService Works</h1>
    <Row className='text-center mb-5'>
      <Col md={4}>
        <Image style={{width: '120px'}} src='/images/book2.png' />
        <h3>Book</h3>
        <p>Easiest way to book a service is online! Provide necessary details while we take you through a quick booking journey. If you find it difficult, call +88 0967 8772929. Our team should guide you through.</p>
      </Col>
      <Col md={4}>
        <Image style={{width: '120px'}}  src='/images/confirm2.png' />
        <h3>Confirm</h3>
        <p>Get a call from our customer manager, confirm your schedule right away!</p>
      </Col>
      <Col md={4}>
        <Image style={{width: '120px'}}  src='/images/relax2.png' />
        <h3>Relax</h3>
        <p>Sit back & relax while a verified service professional do your job and help you become more productive in life!</p>
      </Col>
    </Row>
    </>
  )
}

export default HomeService
