import React from "react";
import "./SearchBar.css";
import SearchBook from "../a2-SearchBook/SearchBook"
import SearchFilter from "../a2-SearchFilter/SearchFilter"

class SearchBar extends React.Component {  
  state = {
    filter: "",
    printType: ""
  };

  updatePrintType(value) {
    this.setState({
      printType: value
    })
  }

  updateBookType(value) {
    this.setState({
      filter: value
    })
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
          handlePrintTypeChange={value => this.updatePrintType(value)}
          handleBookTypeChange={value => this.updateBookType(value)} />
      </div>
    );
  }
}

export default SearchBar;