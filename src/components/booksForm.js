import React from 'react';
import { Panel, FormControl, FormGroup, ControlLabel, Button, Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { bindActionCreators } from 'redux';
import { postBook } from '../actions/booksActions';

class BooksForm extends React.Component {
  handleSubmit() {
    const book = [{
      title: findDOMNode(this.refs.title).value,
      price: findDOMNode(this.refs.price).value,
    }];
    this.props.postBook(book);
  }

  render() {
    return (
      <Well>
        <Panel>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Title"
              ref="title" />
          </FormGroup>
          <FormGroup controlId="price">
            <ControlLabel>Price</ControlLabel>
            <FormControl
              type="text"
              placeholder="Price"
              ref="price" />
          </FormGroup>
          <Button
            onClick={this.handleSubmit.bind(this)}
            bsStyle="success"
          >Save book</Button>
        </Panel>
      </Well>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ postBook }, dispatch);

export default connect(null, mapDispatchToProps)(BooksForm);
