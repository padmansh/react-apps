import React, { Component } from "react";

class Boxform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      width: '',
      color: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.boxcreate(this.state);
    this.setState({
      height: "",
      width: "",
      color: "",
    });
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="height">height</label>
          <input
            type="text"
            name="height"
            value={this.state.height}
            id="height"
            onChange={this.handleChange}
          ></input>
        </form>
        <form>
          <label htmlFor="width">width</label>
          <input
            type="text"
            name="width"
            value={this.state.width}
            id="width"
            onChange={this.handleChange}
          ></input>
        </form>
        <form>
          <label htmlFor="color">color</label>
          <input
            type="text"
            name="color"
            value={this.state.color}
            id="color"
            onChange={this.handleChange}
          ></input>
        </form>
        <button onSubmit={this.handleSubmit}>Add a Box</button>
      </div>
    );
  }
}

export default Boxform;
