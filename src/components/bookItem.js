import React from 'react';
import { Button, Well, Row, Col } from 'react-bootstrap';

class BookItem extends React.Component {
  render() {
    return(
      <Well>
        <Row>
          <Col xs={12}>
            <h5>{this.props.title}</h5>
            <h6>${this.props.price}</h6>
            <Button bsStyle="success">Buy</Button>
          </Col>
        </Row>
      </Well>
    )
  }
}

export default BookItem;
