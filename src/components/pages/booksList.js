import React from 'react';
import { connect } from 'react-redux';

class BooksList extends React.Component {
  render() {
    // console.log(this.props);
    const list = this.props.books.map(book => (
      <div key={book.id}>
        <h2>{book.title}</h2>
        <h2>{book.price}</h2>
      </div>
    ));
    return (
      <div>
        <h1>Lamazon</h1>
        {list}
      </div>
    );
  }
}

const mapStateToProps = state => ({ books: state.books.books });

export default connect(mapStateToProps)(BooksList);
