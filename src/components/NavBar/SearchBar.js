import React from 'react';
import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import classes from '../css/SearchBar.module.css'
function SearchBar({ search, setSearch }) {
  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form>
            <FormControl
              type="text"
              placeholder="Search for shoes"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={classes.SearchBar}
              style={{background:'#212529', color:'white'}}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;
