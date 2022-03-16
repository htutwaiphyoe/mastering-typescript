import * as React from 'react';
import { fetchDogFacts, DogFactType } from './dog-facts';

type FormProps = {
  onSubmitHandler: (n: number) => void;
};

const Form = ({ onSubmitHandler }: FormProps) => {
  const [number, setNumber] = React.useState(1);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitHandler(number);
      }}
    >
      <div className="fact-input">
        <label htmlFor="number-of-facts">Number of Dog Facts</label>
        <input
          type="number"
          value={number}
          min="1"
          max="10"
          id="number-of-facts"
          onChange={(e) => setNumber(+e.target.value)}
        />
      </div>
      <input type="submit" value="Fetch Dog Facts" />
    </form>
  );
};

const Fact = ({ fact }: { fact: string }) => {
  return (
    <article className="dog-fact">
      <h3>Dog Fact</h3>
      <p>{fact}</p>
    </article>
  );
};

const Application = () => {
  const [facts, setFacts] = React.useState<DogFactType[]>([]);

  const onSubmitHandler = (n: number) => {
    fetchDogFacts(n).then((facts) => setFacts(facts));
  };

  return (
    <main>
      <Form onSubmitHandler={onSubmitHandler} />
      <section>
        {facts.map((fact) => (
          <Fact fact={fact.fact} key={fact.id} />
        ))}
      </section>
    </main>
  );
};

export default Application;
