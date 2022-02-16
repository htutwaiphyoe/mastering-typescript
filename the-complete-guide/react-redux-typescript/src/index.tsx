import React from "react";
import ReactDOM from "react-dom";

interface IAppProps {
  color?: string;
}

interface IAppState {
  counter: number;
}
class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { counter: 0 };
  }

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
