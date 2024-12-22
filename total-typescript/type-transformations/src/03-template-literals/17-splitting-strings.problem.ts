import { Equal, Expect } from "../helpers/type-utils";

type Path = "Users/John/Documents/notes.txt";

type SplitPath<T extends string = Path> =
  T extends `${infer Head}/${infer Tail}` ? [Head, ...SplitPath<Tail>] : [T];

type tests = [
  Expect<Equal<SplitPath, ["Users", "John", "Documents", "notes.txt"]>>,
];
