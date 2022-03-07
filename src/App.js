import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Spinner from "./components/Spinner";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News pageSize={5} />
        <Spinner />
      </div>
    );
  }
}
