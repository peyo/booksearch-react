import React from "react";
import "./SearchFilter.css";

class SearchFilter extends React.Component {  
  render() {
    const {
      handlePrintTypeChange,
      handleBookTypeChange } = this.props
    
    return (
      <div className="SearchFilter-controls">
        <label
          className="print-label"
          htmlFor="print-type">Print Type:
        </label>
        <select className="print-select">
          <option
            value="none">
              Select One</option>
          <option
            value="none"
            onChange={e => handlePrintTypeChange(e.target.value)}>
              None</option>
          <option
            value="all"
            onChange={e => handlePrintTypeChange(e.target.value)}>
              All</option>
          <option
            value="books"
            onChange={e => handlePrintTypeChange(e.target.value)}>
              Books</option>
          <option
            value="magazines"
            onChange={e => handlePrintTypeChange(e.target.value)}>
              Magazines</option>
        </select>
        
        <label
          className="book-label"
          htmlFor="book-type">Book Type:
        </label>
        <select className="book-select">
          <option
            value="none">
              Select One</option>
          <option
            value="none"
            onChange={e => handleBookTypeChange(e.target.value)}>
              None</option>
          <option
            value="ebooks"
            onChange={e => handleBookTypeChange(e.target.value)}>
              e-Books</option>
          <option
            value="free-ebooks"
            onChange={e => handleBookTypeChange(e.target.value)}>
              Free e-Books</option>
          <option
            value="full"
            onChange={e => handleBookTypeChange(e.target.value)}>
              Full book</option>
          <option
            value="paid-ebooks"
            onChange={e => handleBookTypeChange(e.target.value)}>
              Paid version</option>
          <option
            value="partial"
            onChange={e => handleBookTypeChange(e.target.value)}>
              Partial version</option>
        </select>
      </div>
    );
  }
}

export default SearchFilter;