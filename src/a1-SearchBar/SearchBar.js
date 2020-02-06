import React from "react";
import "./SearchBar.css";
import SearchBook from "../a2-SearchBook/SearchBook"
import SearchFilter from "../a2-SearchFilter/SearchFilter"

class SearchBar extends React.Component {  
  render() {
    const {
      handleSubmit,
      handleSearchTerm,
      handlePrintTypeChange,
      handleBookTypeChange
    } = this.props;

    return (
      <div className="SearchBar__controls">
        <SearchBook
          handleSubmit={handleSubmit}
          handleSearchTerm={handleSearchTerm} />
        <SearchFilter
          handlePrintTypeChange={handlePrintTypeChange}
          handleBookTypeChange={handleBookTypeChange} />
      </div>
    );
  }
}

export default SearchBar;