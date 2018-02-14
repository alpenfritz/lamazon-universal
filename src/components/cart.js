import React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, Label, Well, Row, Col, Panel } from 'react-bootstrap';

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
              <h6>Qty <Label bsStyle="primary"></Label></h6>
            </Col>
            <Col xs={6} sm={4}>
              <ButtonGroup style={{minWidth: '300px'}}>
                <Button bsStyle="default" bsSize="small">-</Button>
                <Button bsStyle="default" bsSize="small">+</Button>
                <span>     </span>
                <Button bsStyle="danger" bsSize="small">Delete</Button>
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
  render() {
    if (this.props.cart[0]) {
      return this.renderShoppingCart();
    }
    return this.renderEmpty();
  }
}

const mapStateToProps = state => ({ cart: state.cart.cart });

export default connect(mapStateToProps)(Cart);
