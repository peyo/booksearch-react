import React from "react";
import "./SearchFilter.css";

class SearchFilter extends React.Component {
  render() {
    const {
      handlePrintFilterChange,
      handleBookFilterChange
    } = this.props;

    return (
      <div className="SearchFilter-controls">
        <form>
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
              onChange={e => handlePrintFilterChange(e.target.value)}>
                None</option>
            <option
              value="all"
              onChange={e => handlePrintFilterChange(e.target.value)}>
                All</option>
            <option
              value="books"
              onChange={e => handlePrintFilterChange(e.target.value)}>
                Books</option>
            <option
              value="magazines"
              onChange={e => handlePrintFilterChange(e.target.value)}>
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
              onChange={e => handleBookFilterChange(e.target.value)}>
                None</option>
            <option
              value="ebooks"
              onChange={e => handleBookFilterChange(e.target.value)}>
                e-Books</option>
            <option
              value="free-ebooks"
              onChange={e => handleBookFilterChange(e.target.value)}>
                Free e-Books</option>
            <option
              value="full"
              onChange={e => handleBookFilterChange(e.target.value)}>
                Full book</option>
            <option
              value="paid-ebooks"
              onChange={e => handleBookFilterChange(e.target.value)}>
                Paid version</option>
            <option
              value="partial"
              onChange={e => handleBookFilterChange(e.target.value)}>
                Partial version</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SearchFilter;