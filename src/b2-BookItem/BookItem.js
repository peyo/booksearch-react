import React from "react";
import "./BookItem.css";

class BookItem extends React.Component {    
  render() {
    const author = this.props.volumeInfo.authors
      ? this.props.volumeInfo.authors
      : "There's no author for this book. 🤷‍♂"
    
    const description = this.props.volumeInfo.description
      ? this.props.volumeInfo.description
      : "There's no description for this book. 🤷‍♂"

    return (
      <div className="BookItem">
        <div className="BookItem-wrapper">
          <div className="BookItem-image">
            <div className="bookcover"><img src={this.props.volumeInfo.imageLinks.thumbnail} alt="book cover."/></div>
          </div>
          <div className="BookItem-text">
            <div className="title"><b>Title:</b> {this.props.volumeInfo.title}</div>
            <div className="authors"><b>Author(s):</b> {author}</div>
            <div className="buyLink">
              <a href={this.props.saleInfo.buyLink} alt="link to buy book." target="_blank" rel="noopener noreferrer">Buy Now</a>
            </div>
            <div className="description"><b>Description:</b> {description}</div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default BookItem;