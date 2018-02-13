import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/booksActions';

class BooksList extends React.Component {
  componentDidMount() {
    this.props.getBooks(); // from dispatch
  }
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

const mapDispatchToProps = dispatch => bindActionCreators({ getBooks }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
