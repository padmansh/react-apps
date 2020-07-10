import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
  render() {
    let boxStyle = {
      height: `${this.props.height}em`,
      width: `${this.props.width}em`,
      backgroundColor: this.props.color,
    };
    return (
      <div>
        <div style={boxStyle}>Hello</div>
        <div>
          <button>Click to remove</button>
        </div>
      </div>
    );
  }
}

export default Box;
