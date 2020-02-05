import React from "react";
import "./SearchBook.css";

class SearchBook extends React.Component {
  static defaultProps = {
    filter: "",
    printType: "",
  };

  state = {
    q: "",
    bookData: {}
  };

  updateSearchTerm(term) {
    this.setState({
      q: term
    })
  }

  formatQueryParams(params) {
    const queryItems = Object.keys(params)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);

    return queryItems.join('&');
  }

  handleSubmit(event) {
    event.preventDefault();

    const endPoint = "https://www.googleapis.com/books/v1/volumes";
    const bookParams = {
      q: this.state.q,
      filter: this.props.filter,
      printType: this.props.printType,
      key: "AIzaSyBiEL2F_VV6f1BRNPNkjsC0kIUvjCvWuAA",
    };

    const bookAPIKeyString = this.formatQueryParams(bookParams);
    const bookURL = endPoint + "?" + bookAPIKeyString;

    fetch(bookURL)
      console.log(bookURL)
      .then(response => {
        console.log("Checking for errors.")
        if (!response.ok) {
          throw new Error("Something went wrong.");
        }
        return response;
      })
      .then(response => response.json())
      .then(bookData => {
        console.log(bookData)
        this.setState({
          bookData
        })
      })
  }
  
  render() {  
    const {
      q
    } = this.state;

    return (
      <div className="SearchBook-controls">
        <form onSubmit={event => this.handleSubmit(event)}>
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
            onChange={event => this.updateSearchTerm(event.target.value)}/>
          <button
            className="search-button"
            onClick={event => this.handleSubmit(event)}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBook;