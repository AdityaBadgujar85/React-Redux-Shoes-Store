import React from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import ShoesData from '../Data/ShoesData';
import { AddToCart } from '../shoesDisplay/ShoesAction';
import classes from '../css/ShoesDisplay.module.css';

function ShoesDisplay({ search }) {
  const dispatch = useDispatch();

  return (
    <Container fluid>
      <Row>
        {ShoesData.filter((shoe) =>
          shoe.shoesName.toLowerCase().includes(search.toLowerCase())).map((shoe, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className={classes.cardContainer} bg='dark'>
              <Card.Img variant="top" src={shoe.ShoesImg} className={classes.cardImg}/>
              <Card.Body>
                <Card.Title className={classes.cardText}>{shoe.shoesName}</Card.Title>
                <Card.Text className={classes.cardText}>Price: ₹{shoe.price}</Card.Text>
                <Button variant="primary" onClick={() => dispatch(AddToCart(shoe))}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ShoesDisplay;
