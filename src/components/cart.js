import React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, Label, Well, Row, Col, Panel, Modal } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { getCart, deleteFromCart, updateCart } from '../actions/cartActions';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }

  componentDidMount() {
    this.props.getCart();
  }

  onDelete(_id) {
    this.props.deleteFromCart(_id, this.props.cart);
  }

  onIncrement(_id) {
    this.props.updateCart(_id, 1, this.props.cart);
  }

  onDecrement(_id, quantity) {
    if (quantity > 1) {
      this.props.updateCart(_id, -1, this.props.cart);
    }
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  renderEmpty() {
    return (<div></div>);
  }

  renderShoppingCart() {
    const shoppingCartList = this.props.cart.map(item => {
      return (
        <Panel key={item._id}>
          <Panel.Body>
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
                    onClick={this.onDecrement.bind(this, item._id, item.quantity)}
                    bsStyle="default"
                    bsSize="small">-
                  </Button>
                  <Button
                    onClick={this.onIncrement.bind(this, item._id)}
                    bsStyle="default"
                    bsSize="small">+
                  </Button>
                  <span>     </span>
                  <Button
                    onClick={this.onDelete.bind(this, item._id)}
                    bsStyle="danger"
                    bsSize="small">Delete
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Panel.Body>
        </Panel>
      )
    });
    return (
      <Panel bsStyle="success">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Cart</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          {shoppingCartList}
          <Row>
            <Col xs={12}>
              <h6>Total amount: {this.props.totalAmount}</h6>
              <Button onClick={this.open.bind(this)} bsStyle="success" bsSize="small">
                Send order
              </Button>
            </Col>
          </Row>
          <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>Order sent</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h6>Thank you for your purchase</h6>
            </Modal.Body>
            <Modal.Footer>
              <Col xs={6}>
                <h6>Total $: {this.props.totalAmount}</h6>
              </Col>
              <Button onClick={this.close.bind(this)}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Panel.Body>
      </Panel>
    );
  }

  render() {
    if (this.props.cart[0]) {
      return this.renderShoppingCart();
    }
    return this.renderEmpty();
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
  totalAmount: state.cart.totalAmount,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCart,
  deleteFromCart,
  updateCart,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
