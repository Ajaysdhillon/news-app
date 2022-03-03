import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsHub - Top Headlines</h2>
        <div className="row ">
          <div className="col-md-3 mx-3">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
          <div className="col-md-3 mx-3">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
          <div className="col-md-3 mx-3">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
