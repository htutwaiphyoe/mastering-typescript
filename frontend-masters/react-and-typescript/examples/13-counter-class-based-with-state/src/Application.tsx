import React, { ChangeEvent, Component } from 'react';

type CounterProps = {
  incident: string;
};

type CounterState = {
  count: number;
  input: number;
};

class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0,
    input: 0
  };

  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  decrement = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  changeCount = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: +event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState((prevState) => ({
      count: prevState.count + prevState.input
    }));
  };

  render() {
    const { incident } = this.props;
    const { count } = this.state;

    return (
      <main className="Counter">
        <h1>Days Since Last {incident}</h1>
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.decrement}>Decrement</button>
        </section>
        <section className="controls">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="set-to">Set Count</label>
            <input id="set-to" type="number" onChange={this.changeCount} />
          </form>
        </section>
      </main>
    );
  }
}

class Application extends Component {
  render() {
    return <Counter incident={'Coffee Spill'} />;
  }
}

export default Application;
