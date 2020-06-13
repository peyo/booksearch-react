## BookSearch App

Search for books by title, author, subject, etc. using Google's Book API.

## Objective and General Info

- Challenge: Build a book search app using Google's Book API.
- Some features using API parameters: pagination (startIndex), filtering (filter, printType), and search (q).
- Component tree:

<pre>
App---(a1) SearchBar---(a2) SearchBook
  \                 \
   \                 \---(a2) SearchFilter
    \
     \---(b1) BookList---(b2) BookItem
</pre>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
