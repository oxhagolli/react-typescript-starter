import React from "react";

interface IProps {
  name: string;
  start?: number;
}

interface IState {
  counter: number;
}

export default class Example extends React.Component<IProps, IState> {
  state = {
    counter: this.props.start ? this.props.start : 0,
  };

  private _increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render = () => {
    return (
      <div>
        <h2>Hello, {this.props.name}</h2>
        <h3>Current count: {this.state.counter}</h3>
        <button onClick={this._increment}>Increment (+1)</button>
      </div>
    );
  };
}
