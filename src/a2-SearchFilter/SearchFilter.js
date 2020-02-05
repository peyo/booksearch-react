import React from "react";
import "./SearchFilter.css";

class SearchFilter extends React.Component {  
  render() {
    const {
      handlePrintTypeChange,
      handleBookTypeChange,
      printType,
      filter
    } = this.props;
    
    return (
      <div className="SearchFilter-controls">
        <form>
          <label
            className="print-label"
            htmlFor="print-type">Print Type:
          </label>
          <select
            className="print-select"
            value={printType}
            onChange={e => handlePrintTypeChange(e.target.value)}>
            <option value="none">Select One</option>
            <option value="none">None</option>
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
          <label
            className="book-label"
            htmlFor="book-type">Book Type:
          </label>
          <select className="book-select"
            value={filter}
            onChange={e => handleBookTypeChange (e.target.value)}>
            <option value="none">Select One</option>
            <option value="none">None</option>
            <option value="ebooks">e-Books</option>
            <option value="free-ebooks">Free e-Books</option>
            <option value="full">Full book</option>
            <option value="paid-ebooks">Paid version</option>
            <option value="partial">Partial version</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SearchFilter;