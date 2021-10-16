// primitives
let age: number = 21;
// age = "21"; // error
let firstName: string = "Maii";
let isMarried: boolean = false;
let bloodType: undefined = undefined;
let sibilings: null = null;

// built-in objects
const now: Date = new Date();

// arrays
const years: number[] = [2021, 2020, 2019];
const names: string[] = ["Maii", "Kham"];
const conditions: boolean[] = [true, true, false];

// classes
class Person {}
const mgmg: Person = new Person();

// object literal
const coordinate: { log: number; lat: number } = {
    log: 19.0,
    lat: 12.12,
};

// functions
const logNumber: (num: number) => void = (num: number) => {
    console.log(num);
};

// auto typing
let s = "haha";
// s = 12; // error

// when to use
// type annotations
// functions return 'any' type
const str = '{"x": 1, "y": 2}';
const point1 = JSON.parse(str);
point1.z; // no error
const point2: { x: number; y: number } = JSON.parse(str);
// point.z; // error

let ss: any = "Mg";
ss = 1;

// delayed initialization
let isFound: boolean;
let colors = ["red", "green", "blue"];

for (let el of colors) {
    if (el === "green") isFound = true;
}

// when inference doesn't work
let arr = [1, 2, -1];
let numBelowZero: boolean | number = false;

for (let el of arr) {
    if (el < 0) numBelowZero = el;
}
