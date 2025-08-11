import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { IncrementQty, DecrementQty } from '../shoesDisplay/ShoesAction';
import classes from '../css/Cart.module.css';
import { useNavigate } from 'react-router-dom';

function Cart({ cartItems, increment, decrement }) {
    const navigate = useNavigate();
    const totalPrice = cartItems.reduce((acc, item) => acc + parseInt(item.price.replace('₹', '')) * item.qty, 0);

  return (
    <Container fluid>
      <Row className='text-center'>
        <h1 style={{color:'white'}}>Cart</h1>
        {cartItems.length === 0 ? (
          <p style={{color:'white'}}>Cart is Empty</p>
        ) : (
          cartItems.map((item, index) => (
            <Col md={6} key={index}>
              <Card className={classes.cardContainer} style={{marginTop:'1rem'}}>
                <Card.Img src={item.ShoesImg} className={classes.cardImg} />
                <Container className={classes.titleAndPriceButton}>
                  <Card.Title style={{color:'white'}}>{item.shoesName}</Card.Title>
                  <Container className={classes.priceandbutton}>
                    <Card.Text style={{color:'white'}}>₹ {item.price}</Card.Text>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Button onClick={() => decrement(item.id)}>-</Button>
                      <span style={{color:'white'}}>{item.qty}</span>
                      <Button onClick={() => increment(item.id)}>+</Button>
                    </div>
                  </Container>
                </Container>
              </Card>
            </Col>
          ))
        )}
      </Row>
 
        <Row className="mt-5 justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <div className=" p-3 ">
              <h5 style={{color:'white'}}>Total Price: ₹ {totalPrice}</h5>
              <Button variant="primary" className="mt-3 px-4" onClick={() => navigate('/payment')}>
                Proceed to Payment
                </Button>

            </div>
          </Col>
        </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  increment: (id) => dispatch(IncrementQty(id)),
  decrement: (id) => dispatch(DecrementQty(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
