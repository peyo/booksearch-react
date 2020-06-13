import React from "react";
import ReactDOM from "react-dom";
import SearchBook from "./SearchBar";

describe("SearchBook component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchBook />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});