import React from 'react';
import "./App.css";
import SearchBar from "./a1-SearchBar/SearchBar";
import BookList from "./b1-BookList/BookList";

class App extends React.Component {  
  state = {
    q: "",
    printType: null,
    filter: null,
    bookData: null
  };

  // (START) UPDATING PARAMETERS
  // from searchbook.js
  updateSearchTerm(q) {
    this.setState({
      q: q
    })
  }

  // from searchfilter.js
  updatePrintType(value) {
    this.setState({
      printType: value
    })
  }

  // from searchfilter.js
  updateBookType(value) {
    this.setState({
      filter: value
    })
  }
  // (END) UPDATING PARAMETERS

  // (START) FETCHING BOOK DATA FROM API USING q, printType, filter states.
  formatQueryParams(params) {
    const queryItems = Object.keys(params)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
    return queryItems.join('&');
  }

  updateSubmit(event) {
    event.preventDefault();

    const endPoint = "https://www.googleapis.com/books/v1/volumes";

    const printTypeParam = this.state.printType
      ? printType: this.state.printType
      : null

    const filterParam = this.state.filter
      ? filter: this.state.filter
      : null
    
    const bookParams = {
      q: this.state.q,
      printTypeParam,
      filterParam,
      key: "AIzaSyBiEL2F_VV6f1BRNPNkjsC0kIUvjCvWuAA",
    };

    const bookAPIKeyString = this.formatQueryParams(bookParams);
    const bookURL = endPoint + "?" + bookAPIKeyString;
    console.log(bookURL)

    fetch(bookURL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Something went wrong.");
        }
        return response;
      })
      .then(response => response.json())
      .then(bookData => {
        console.log(bookData);
        this.setState({
          bookData
        })
      })
  }
  // (END) FETCHING BOOK DATA FROM API USING q, printType, filter states.
  
  render() {
    const {
      bookData
    } = this.state;

    const books = bookData
      ? <BookList bookData={bookData} />
      : <div className="book-search-something">Try searching for something.</div>

    return (
      <main className="App">
        <header id="header">Google Book Search</header>
        <SearchBar
          handleSubmit={event => this.updateSubmit(event)}
          handleSearchTerm={q => this.updateSearchTerm(q)}
          handlePrintTypeChange={value => this.updatePrintType(value)}
          handleBookTypeChange={value => this.updateBookType(value)} />
        {books}
      </main>
    );
  }
}

export default App;