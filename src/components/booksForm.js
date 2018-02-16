import React from 'react';
import { Panel, FormControl, FormGroup, ControlLabel, Button, Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { bindActionCreators } from 'redux';
import { getBooks, postBook, deleteBook, resetForm } from '../actions/booksActions';

class BooksForm extends React.Component {
  componentDidMount() {
    this.props.getBooks();
  }

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

  resetForm() {
    this.props.resetForm();
    findDOMNode(this.refs.title).value = '';
    findDOMNode(this.refs.price).value = '';
  }

  render() {
    const booksList = this.props.books.map(book => (
      <option key={book._id}>{book._id}</option>
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
            onClick={(!this.props.msg) ? (this.handleSubmit.bind(this)) : (this.resetForm.bind(this))}
            bsStyle={(!this.props.style) ? ('success') : (this.props.style)}
          >{(!this.props.msg) ? ('Save book') : (this.props.msg)}
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
  msg: state.books.msg,
  style: state.books.style,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getBooks,
  postBook,
  deleteBook,
  resetForm,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
