import React from "react";
import ReactDOM from "react-dom";
import BookItem from "../b1-BookList/BookList";

describe("BookItem component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BookItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});