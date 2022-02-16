import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = { counter: 0 };

  onIncClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecClick = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncClick}>inc</button>
        <p>{this.state.counter}</p>
        <button onClick={this.onDecClick}>dec</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
