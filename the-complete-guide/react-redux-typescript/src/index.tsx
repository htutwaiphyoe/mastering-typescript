import React, { useState } from "react";
import ReactDOM from "react-dom";

interface IAppProps {
  color?: string;
}

const App = (props: IAppProps): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    setCounter((state) => state + 1);
  };

  const handleDecrement = () => {
    setCounter((state) => state - 1);
  };

  return (
    <div>
      <button onClick={handleIncrement}>inc</button>
      <div>{counter}</div>
      <button onClick={handleDecrement}>dec</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
