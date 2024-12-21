import { Equal, Expect } from "../helpers/type-utils";

const fruits = ["apple", "banana", "orange"] as const;

type Fruit = (typeof fruits)[number];
type AppleOrBanana = Extract<Fruit, "apple" | "banana">;

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>,
];
