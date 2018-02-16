import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, Navbar, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getCart from '../actions/cartActions';

class Menu extends React.Component {
  render() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Lamazon</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="#">
              <NavItem eventKey={1}>About</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={2}>Contact Us</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to="/admin">
              <NavItem eventKey={1}>Admin</NavItem>
            </LinkContainer>
            <LinkContainer to="/cart">
              <NavItem eventKey={2}>Your Cart
                {(this.props.totalQty > 0) ?
                  (<Badge className="badge">{this.props.totalQty}</Badge>) :
                  ('')
                }
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({ totalQty: state.cart.totalQty });

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getCart,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
