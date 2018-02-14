import React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, Label, Well, Row, Col, Panel } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { deleteFromCart, updateCart } from '../actions/cartActions';

class Cart extends React.Component {
  renderEmpty() {
    return (<div></div>);
  }
  renderShoppingCart() {
    const shoppingCartList = this.props.cart.map(item => {
      return (
        <Panel key={item.id}>
          <Row>
            <Col xs={12} sm={4}>
              <h6>{item.title}</h6><span>    </span>
            </Col>
            <Col xs={12} sm={2}>
              <h6>${item.price}</h6>
            </Col>
            <Col xs={12} sm={2}>
              <h6>Qty <Label bsStyle="primary">{item.quantity}</Label></h6>
            </Col>
            <Col xs={6} sm={4}>
              <ButtonGroup style={{minWidth: '300px'}}>
                <Button
                  onClick={this.onDecrement.bind(this, item.id)}
                  bsStyle="default"
                  bsSize="small">-
                </Button>
                <Button
                  onClick={this.onIncrement.bind(this, item.id)}
                  bsStyle="default"
                  bsSize="small">+
                </Button>
                <span>     </span>
                <Button
                  onClick={this.onDelete.bind(this, item.id)}
                  bsStyle="danger"
                  bsSize="small">Delete
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Panel>
      )
    });
    return (
      <Panel bsStyle="success">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Cart</Panel.Title>
        </Panel.Heading>
        {shoppingCartList}
      </Panel>
    );
  }

  onDelete(id) {
    // const cartAfterDelete = this.props.cart;
    this.props.deleteFromCart(id);
  }

  onIncrement(id) {
    this.props.updateCart(id, 1);
  }

  onDecrement(id) {
    this.props.updateCart(id, -1);
  }

  render() {
    if (this.props.cart[0]) {
      return this.renderShoppingCart();
    }
    return this.renderEmpty();
  }
}

const mapStateToProps = state => ({ cart: state.cart.cart });

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteFromCart,
  updateCart,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
