import React from "react";
import "./BookList.css";
import BookItem from "../b2-BookItem/BookItem";

class BookList extends React.Component {
  render() {
    // const bookItem = this.props.items.map(item => <BookItem {...item}/>)

    return (
      <div className="BookList">
        {/*{bookItem}*/}
        <BookItem />
      </div>
    );
  }
}

BookItem.defaultProps = {
  items: []
}

export default BookList;