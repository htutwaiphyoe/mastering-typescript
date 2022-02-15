import React from "react";
import ReactDOM from "react-dom";

interface IAppProps {
  text: string;
  color?: string;
}
class App extends React.Component<IAppProps> {
  render() {
    return <div style={{ color: this.props.color }}>{this.props.text}</div>;
  }
}

ReactDOM.render(<App text="Hello, world!" />, document.getElementById("root"));
