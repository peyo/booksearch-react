import React from "react";
import "./SearchBar.css";
import SearchBook from "../a2-SearchBook/SearchBook"
import SearchFilter from "../a2-SearchFilter/SearchFilter"

class SearchBar extends React.Component {  
  render() {
    const {
      bookData,
      filter,
      printType
    } = this.props;

    return (
      <div className="SearchBar__controls">
        <SearchBook
          bookData={bookData}
          filter={filter}
          printType={printType} />
        <SearchFilter
          filter={filter}
          printType={printType} />
      </div>
    );
  }
}

export default SearchBar;