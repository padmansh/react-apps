import React, { Component } from "react";
import Box from "./Box";
import Boxform from "./Boxform";

class Boxlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        {
          height: '10',
          width: '10',
          color: "red",
        },
      ],
    };
    this.create = this.create.bind(this);
  }
  create(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox],
    });
  }
  render() {
    let boxes = this.state.boxes.map((box) => (
      <Box height={box.height} width={box.width} color={box.color} />
    ));
    return (
      <div>
        <h1>Box-maker</h1>
        <Boxform boxcreate={this.create} />
        {boxes}
      </div>
    );
  }
}

export default Boxlist;
