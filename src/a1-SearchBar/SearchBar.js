import React from "react";
import "./SearchBar.css";
import SearchBook from "../a2-SearchBook/SearchBook"
import SearchFilter from "../a2-SearchFilter/SearchFilter"

class SearchBar extends React.Component {
  state = {
    filter: "",
    printType: ""
  };

    updateBookType(filter) {
    if (filter !== undefined) {
      return (
        this.setState({
          filter: filter
        })
      );
    } return (null);
  }

  updatePrintType(printType) {
    if (printType !== undefined) {
      return (
        this.setState({
          printType: printType
        })
      );
    } return (null);
  }

  render() {
    const {
      bookData,
      filter,
      printType
    } = this.state;

    return (
      <div className="SearchBar__controls">
        <SearchBook
          bookData={bookData}
          filter={filter}
          printType={printType} />
        <SearchFilter
          handlePrintFilterChange={filter => this.updateBookType(filter)}
          handleBookFilterChange={printType => this.updateBookType(printType)} />
      </div>
    );
  }
}

export default SearchBar;