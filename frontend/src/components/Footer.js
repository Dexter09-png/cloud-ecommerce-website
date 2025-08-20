import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="cloud-footer">
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Cloud Ecommerce</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
