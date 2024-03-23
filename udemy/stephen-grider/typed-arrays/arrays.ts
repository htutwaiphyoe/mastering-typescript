// type inference
const favHeros = ["Morphling", "Magnus", "Invoker"];
const amounts = []; // any type
const dates = [new Date(), new Date()]; // Date type

// type annotations
const ages: number[] = [32, 10, 19];
const amounts2: number[] = [];
const twoD: number[][] = [[1], [2]];

// help with inference  when extracting values from typed arrays
const favHero = favHeros[0]; // string
const date = dates.pop(); // string

// prevents from adding incompatible values
// favHeros.push(100); // error

// helps with built-in methods
favHeros.forEach((hero: string): void => console.log(hero.length));

// multiple different types
const types: (number | boolean | string)[] = [];
types.push(1);
types.push("1");
types.push(true);
