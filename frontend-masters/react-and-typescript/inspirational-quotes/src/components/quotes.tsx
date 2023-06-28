import { PropsWithChildren } from 'react';
import { Quote, fetchQuotes } from './application';

type QuotesProps = {
  setQuotes: React.Dispatch<React.SetStateAction<Quote[]>>;
};

const Quotes = ({ children, setQuotes }: PropsWithChildren<QuotesProps>) => {
  return (
    <section className="flex flex-col gap-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const noOfQuoteInput = e.currentTarget;
          fetchQuotes(+noOfQuoteInput.noOfQuote.value).then(setQuotes);
        }}
      >
        <label htmlFor="noOfQuote" className="block">
          Number of Quotes to Load
        </label>
        <div className="flex">
          <input
            id="noOfQuote"
            className="w-full"
            type="number"
            min="0"
            max="25"
          />
          <button type="submit">Load Quotes</button>
        </div>
      </form>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </section>
  );
};

export default Quotes;
