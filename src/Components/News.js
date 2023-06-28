import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>Top headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItems title="myTitle" description="hehe" />
          </div>
          <div className="col-md-4">
            <NewsItems />
          </div>
          <div className="col-md-4">
            <NewsItems />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
