import React from "react";
import "./BookList.css";
import BookItem from "../b2-BookItem/BookItem";

class BookList extends React.Component {
  render() {
    const { bookData } = this.props;
    const items = bookData.items
    const bookItem = items.map((item, index) => <BookItem {...item} key={index} />)

    return (
      <div className="BookList">
        {bookItem}
      </div>
    );
  }
}

export default BookList;