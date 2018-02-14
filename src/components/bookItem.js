import React from 'react';
import { Button, Well, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart } from '../actions/cartActions';

class BookItem extends React.Component {
  handleCart() {
    const book = [
      ...this.props.cart,
      {
        id: this.props.id,
        title: this.props.title,
        price: this.props.price,
      },
    ];
    this.props.addToCart(book);
  }
  render() {
    return(
      <Well>
        <Row>
          <Col xs={12}>
            <h5>{this.props.title}</h5>
            <h6>${this.props.price}</h6>
            <Button
              onClick={this.handleCart.bind(this)}
              bsStyle="success">Buy
            </Button>
          </Col>
        </Row>
      </Well>
    )
  }
}

const mapStateToProps = state => ({ cart: state.cart.cart });

const mapDispatchToProps = dispatch => bindActionCreators({ addToCart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
