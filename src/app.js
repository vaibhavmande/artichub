import React from "react";
import { render } from "react-dom";

import Header from "./Header";
import Contents from "./Contents";
import Footer from "./Footer";

import "./styles.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Contents />
      <Footer />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
