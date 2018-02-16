import React from 'react';
import { Button, Well, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, updateCart } from '../actions/cartActions';

class BookItem extends React.Component {
  handleCart() {
    const book = [
      ...this.props.cart,
      {
        _id: this.props._id,
        title: this.props.title,
        price: this.props.price,
        quantity: 1,
      },
    ];
    if (this.props.cart.length > 0) {
      const _id = this.props._id;
      const idxCartItem = this.props.cart.findIndex(item => _id === item._id);
      if (idxCartItem === -1) { // add to cart
        this.props.addToCart(book);
      } else { // update quantity
        this.props.updateCart(_id, 1, this.props.cart);
      }
    } else { // empty cart
      this.props.addToCart(book);
    }
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

const mapDispatchToProps = dispatch => bindActionCreators({
  addToCart,
  updateCart,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
