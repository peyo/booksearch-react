import React from "react";
import "./BookItem.css";

class BookItem extends React.Component {
  static defaultProps = {
    volumeInfo: {},
    saleInfo: {}
  }

  render() {
    const thumbnail = this.props.volumeInfo.imageLinks
      ? < img src={this.props.volumeInfo.imageLinks.thumbnail} alt = "book cover." />
      : "No bookcover..."

    const author = this.props.volumeInfo.authors
      ? this.props.volumeInfo.authors
      : "No author listed..."
    
    const buylink = this.props.saleInfo.buyLink
      ? <a href={this.props.saleInfo.buyLink} alt="link to buy book." target="_blank" rel="noopener noreferrer">Buy Now</a>
      : "No buy link..."
    
    const description = this.props.volumeInfo.description
      ? this.props.volumeInfo.description
      : "No description..."

    return (
      <div className="BookItem">
        <div className="BookItem-wrapper">
          <div className="BookItem-image">
            <div className="bookcover">{thumbnail}</div>
          </div>
          <div className="BookItem-text">
            <div className="title"><b>Title:</b> {this.props.volumeInfo.title}</div>
            <div className="authors"><b>Author(s):</b> {author}</div>
            <div className="buyLink">
              {buylink}
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