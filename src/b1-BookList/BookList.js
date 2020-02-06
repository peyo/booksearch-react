import React from "react";
import "./BookList.css";
import BookItem from "../b2-BookItem/BookItem";

class BookList extends React.Component {
  static defaultProps = {
    bookData: {
      items: []
    }
  };
  
  render() {
    const {
      bookData,
      updateStartIndexForward,
      updateStartIndexBackward,
      startIndex
    } = this.props;

    if (!bookData) {
      return (
        <div className="book-search-something">Try searching for something.</div>
      )
    }

    const backward = startIndex
      ? <button className="BookList-button" onClick={updateStartIndexBackward}>Prev</button>
      : null
    
    const items = bookData.items
    const bookItem = items.map((item, index) => <BookItem {...item} key={index} />)

    return (
      <div className="BookList">
        {bookItem}
        <div className="BookList-button-div">
          {backward}
          <button
          className="BookList-button"
            onClick={updateStartIndexForward}>Next</button>
        </div>
      </div>
    );
  }
}

export default BookList;