import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'

const Accordion = () => {
  return (
    <Row className='my-5'>
      <Col md={6}>
      <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        How does HomeService work?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>HomeService is an online platform for cleaning and handyman services. We connect our users with verified freelance cleaners and handymen. You can make a booking for a one-off cleaning or other job or schedule a regular cleaning in three easy steps: Fillup requirement and make a booking, Confirm an appointment, Pay once the job is done</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        How can I Register?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>You can sign up from our website www.handymama.co/singup . Or you can register at the time of your first booking. During booking, you can set your password for further access to your account.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        How does pricing work?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>Our customers pay for each job completed based on hours, one-off jobs or contracts. Our service partners keep 80% of the amount and 20% is our flat cut on each transaction.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        Do I have to provide the cleaning material? 
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>That’s recommended. If you don’t have proper equipment or supplies, you can add as ad-ons while booking a session for an extra charge. You can ask our customer support if you need any further help or recommendation.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
      </Col>
      <Col md={6}>
      <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        How do I make payment?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Once your job is done, you can pay using bKash. Or can pay us cash. Our billing team will reach you out and arrange the payment collection.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        How can I cancel a booking?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>If you have to cancel a booking, we recommend you to do it as early as possible; at least 6 hours before your scheduled appointment.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        How are the cleaner?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>The cleaners are all verified and trained by HandyMama. They are either freelancers or employees of our service partners.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        Do you charge cancellation fee? 
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>Currently we are not charging cancellation fee.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
      </Col>
    </Row>
  )
}

export default Accordion
