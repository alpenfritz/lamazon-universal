import React from 'react';
import { Panel, FormControl, FormGroup, ControlLabel, Button, Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { bindActionCreators } from 'redux';
import { postBook, deleteBook } from '../actions/booksActions';

class BooksForm extends React.Component {
  handleSubmit() {
    const book = [{
      title: findDOMNode(this.refs.title).value,
      price: findDOMNode(this.refs.price).value,
    }];
    this.props.postBook(book);
  }

  onDelete() {
    let bookId = findDOMNode(this.refs.bookForDelete).value;
    this.props.deleteBook(bookId);
  }

  render() {
    const booksList = this.props.books.map(book => (
      <option key={book.id}>{book.id}</option>
    ));

    return (
      <Well>
        <Panel>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Title"
              ref="title"
            />
          </FormGroup>
          <FormGroup controlId="price">
            <ControlLabel>Price</ControlLabel>
            <FormControl
              type="text"
              placeholder="Price"
              ref="price"
            />
          </FormGroup>
          <Button
            onClick={this.handleSubmit.bind(this)}
            bsStyle="success"
          >Save book
          </Button>
        </Panel>
        <Panel style={{ marginTop: '25px' }}>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select a book id to delete</ControlLabel>
            <FormControl ref="bookForDelete" componentClass="select" placeholder="select">
              <option value="select">select</option>
              {booksList}
            </FormControl>
          </FormGroup>
          <Button
            onClick={this.onDelete.bind(this)} bsStyle="danger">Delete Book
          </Button>
        </Panel>
      </Well>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.books,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  postBook,
  deleteBook,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
