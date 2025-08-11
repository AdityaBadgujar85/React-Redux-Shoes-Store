import React from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
  const cartItems = useSelector(state => state.cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => acc + parseInt(item.price.replace('₹', '')) * item.qty, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    alert('Payment Successful!');
    dispatch({ type: 'CLEAR_CART' });     
    navigate('/');
  };

  return (
    <Container fluid  style={{marginTop:'6rem'}}>
      <Row className="mt-5 d-flex flex-row justify-content-around">
        <Col md={5}>
          <h2>Credit Card Details</h2>
          <Form onSubmit={handlePayment}>
            <Form.Group className="mb-3">
              <Form.Label>Cardholder Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" maxLength="16" required />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control type="text" placeholder="MM/YY" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control type="password" maxLength="3" required />
                </Form.Group>
              </Col>
            </Row>

            <Button type="submit" variant="success">Pay ₹{totalPrice}</Button>
            <Button variant="primary" className="ms-2" onClick={() => navigate('/')}>
              Back to Cart
            </Button>
          </Form>
        </Col>

        <Col md={5}>
          <h2>Order Summary</h2>
          {cartItems.map((item, idx) => (
            <Card className="mb-2" key={idx} bg='dark'>
              <Card.Body className='d-flex flex-row justify-content-center'>
                <Container className='d-flex flex-column justify-content-center'>
                <Card.Title style={{color:'white'}}>{item.shoesName}</Card.Title>
                <Card.Text style={{color:'white'}}>Qty: {item.qty}</Card.Text>
                <Card.Text style={{color:'white'}}>Price: ₹{item.price}</Card.Text>
                </Container>
                <Container>
               <Card.Img src={item.ShoesImg}/>
                </Container>
              </Card.Body>
            </Card>
          ))}
          <h5>Total: ₹{totalPrice}</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default PaymentPage;
