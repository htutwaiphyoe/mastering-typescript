import { Equal, Expect } from "../helpers/type-utils";

const returnWhatIPassIn = <T>(param: T) => {
  return param;
};

const one = returnWhatIPassIn(1);
const matt = returnWhatIPassIn("matt");

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof matt, "matt">>];
