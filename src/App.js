import React from 'react';
import "./App.css";
import SearchBar from "./a1-SearchBar/SearchBar";
import BookList from "./b1-BookList/BookList";

class App extends React.Component {  
  state = {
    bookData: {}
  }
  
  render() {
    const {
      bookData
    } = this.state;

    return (

      <main className="App">
        <header id="header">Google Book Search</header>
        <SearchBar bookData={bookData} />
        <BookList bookData={bookData} />
      </main>
    );
  }
}

export default App;