import React from "react";
import "./BookItem.css";

class BookItem extends React.Component {  
  render() {
    return (
      <div className="BookItem">
        <div className="BookItem-image">
          <div className="bookcover">Cover{/*{this.props.volumeInfo.imageLinks.thumbnail} */}</div>
        </div>
        <div className="BookItem-text">
          <div className="title">Title: {/*{this.props.volumeInfo.title} */}</div>
          <div className="authors">Author(s): {/*{this.props.volumeInfo.authors}*/}</div>
          <div className="averageRating">Average Rating: {/*{this.props.volumeInfo.averageRating}*/}</div>
          <div className="ratingsCount">Ratings Count: {/*{this.props.volumeInfo.ratingsCount}*/}</div>
          <div className="buyLink">
            <a href="{/*{this.props.salesInfo.buyLink}*/}">Buy Now</a>
          </div>
          <div className="amount">Amount: {/* {this.props.salesInfo.amount}*/}</div>
          <div className="description">Description: {/* {this.props.salesInfo.description}*/}</div>
          <hr />
        </div>
      </div>
    );
  }
}

export default BookItem;