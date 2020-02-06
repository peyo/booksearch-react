import React from "react";
import "./SearchBook.css";

class SearchBook extends React.Component {
  render() {  
    const {
      q,
      handleSubmit,
      handleSearchTerm
    } = this.props;

    return (
      <div className="SearchBook-controls">
        <form className="SearchBook-form" onSubmit={event => handleSubmit(event)}>
          <label
            className="search-label"
            htmlFor="search-type">Search:
          </label>
          <input
            type="text"
            name="q"
            id="q"
            className="search-input"
            placeholder="Search anything..."
            value={q}
            onChange={event => handleSearchTerm(event.target.value)}/>
          <button
            className="search-button"
            onClick={event => handleSubmit(event)}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBook;