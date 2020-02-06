import React from 'react';
import "./App.css";
import SearchBar from "./a1-SearchBar/SearchBar";
import BookList from "./b1-BookList/BookList";

class App extends React.Component {  
  state = {
    q: null,
    printType: null,
    filter: null,
    bookData: null,
    startIndex: 0
  };

  updateStartIndexForward() {
    const newStart = this.state.startIndex + 10
    this.setState({
      startIndex: newStart
    })
    this.updateSubmit(null, newStart)
  }

  updateStartIndexBackward() {
    const newStart = this.state.startIndex - 10
    this.setState({
      startIndex: newStart
    })
    this.updateSubmit(null, newStart)
  }

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

  updateSubmit(event, startIndex = 0) {
    if (event) {
      event.preventDefault();
    }

    const endPoint = "https://www.googleapis.com/books/v1/volumes";

    const bookParams = {
      q: this.state.q,
      startIndex: startIndex,
      key: "AIzaSyBiEL2F_VV6f1BRNPNkjsC0kIUvjCvWuAA"
    };

    // only add these properties if they exist in state
    if (this.state.printType) {
      bookParams.printType = this.state.printType;
    }
    
    if (this.state.filter) {
      bookParams.filter = this.state.filter;
    }

    const bookAPIKeyString = this.formatQueryParams(bookParams);
    const bookURL = endPoint + "?" + bookAPIKeyString;

    fetch(bookURL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Something went wrong.");
        }
        return response;
      })
      .then(response => response.json())
      .then(bookData => {
        this.setState({
          bookData
        })
      })
  }
  // (END) FETCHING BOOK DATA FROM API USING q, printType, filter states.
  
  render() {
    const {
      bookData,
      startIndex
    } = this.state;

    return (
      <main className="App">
        <header id="header">Google Book Search</header>
        <SearchBar
          handleSubmit={event => this.updateSubmit(event)}
          handleSearchTerm={q => this.updateSearchTerm(q)}
          handlePrintTypeChange={value => this.updatePrintType(value)}
          handleBookTypeChange={value => this.updateBookType(value)} />
        <BookList
          startIndex={startIndex}
          bookData={bookData}
          updateStartIndexForward={() => this.updateStartIndexForward()}
          updateStartIndexBackward={() => this.updateStartIndexBackward()} />
      </main>
    );
  }
}

export default App;