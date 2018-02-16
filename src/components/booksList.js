import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Button, Row, Col, Carousel } from 'react-bootstrap';
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
    const booksList = this.props.books.map(book => (
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
          <Carousel>
            <Carousel.Item>
              <img width={900} height={300} alt="900x300" src="/images/slider1.jpg" />
              <Carousel.Caption>
                <h1 className='slider-header'>Phasellus congue elementum libero a auctor.</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={300} alt="900x300" src="/images/slider2.jpg" />
              <Carousel.Caption>
                <h1 className='slider-header'>Morbi ex magna, tincidunt fringilla fringilla at, hendrerit id nisl.</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={300} alt="900x300" src="/images/slider3.jpg" />
              <Carousel.Caption>
                <h1 className='slider-header'>Vivamus urna massa, tempus quis consequat efficitur, facilisis sed metus.</h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row style={{ marginTop: '15px' }}>
          <Cart />
        </Row>
        <Row>
          {booksList}
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ books: state.books.books });

const mapDispatchToProps = dispatch => bindActionCreators({ getBooks }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
