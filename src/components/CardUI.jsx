import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardUI.css";

const qoutes = [
  "Nostalgia is a file that removes the rough edges from the good old days.",
  "The energy behind Mr. Trump is just off the charts.",
  "I assemble my ideas in pieces on a computer file, then gradually find a place for them on a piece of scaffolding I erect.",
];
const author = ["Doug Larson", "Chris Collins", "Stephen Colletti"];
const bgColors = ["blue", "red", "green"];

export class CardUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: qoutes[0],
      author: author[0],
      bgColor: bgColors[0],
    };
  }

  handleButton = () => {
    const rand = Math.floor(Math.random() * 3);
    this.setState({
      msg: qoutes[rand],
      author: author[rand],
      bgColor: bgColors[rand],
    });
  };

  render() {
    return (
      <div
        className="container-fluid d-flex align-items-center justify-content-center bg"
        style={{ height: "100vh", backgroundColor: this.state.bgColor }}
      >
        <div className="card" style={{ width: "30rem" }}>
          <div className="card-body">
            <figure class="text-center">
              <blockquote class="blockquote">
                <p>{this.state.msg}</p>
              </blockquote>
              <figcaption class="blockquote-footer text-end">
                {this.state.author}
              </figcaption>
            </figure>
            <div className="row">
              <div className="col">
                <a
                  className="btn mx-3 text-white"
                  href="#"
                  style={{ backgroundColor: this.state.bgColor }}
                >
                  <i class="bi bi-twitter"></i>
                </a>
                <a
                  className="btn text-white"
                  href="#"
                  style={{ backgroundColor: this.state.bgColor }}
                >
                  d
                </a>
              </div>
              <div className="col text-end">
                <button
                  type="button"
                  onClick={this.handleButton}
                  className="btn text-white"
                  style={{ backgroundColor: this.state.bgColor }}
                  href="#"
                >
                  New Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardUI;
