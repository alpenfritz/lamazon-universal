import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Button, Row, Col } from 'react-bootstrap';
import { getBooks } from '../actions/booksActions';

import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart';

class BooksList extends React.Component {
  componentDidMount() {
    this.props.getBooks(); // from dispatch
  }
  render() {
    // console.log(this.props);
    const list = this.props.books.map(book => (
      <Col xs={12} sm={6} md={4} key={book._id}>
        <BookItem
          _id={book._id}
          title={book.title}
          price={book.price}
        />
      </Col>
    ));
    return (
      <Grid>
        <Row>
          <Cart />
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <BooksForm />
          </Col>
          {list}
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ books: state.books.books });

const mapDispatchToProps = dispatch => bindActionCreators({ getBooks }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
