import React from "react";
import ReactDOM from "react-dom";
import SearchFilter from "./SearchBar";

describe("SearchFilter component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchFilter />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});