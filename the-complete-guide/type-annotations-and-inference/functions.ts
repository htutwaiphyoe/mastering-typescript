// type annotations
const add = (a: number, b: number): number => a + b;

// type inference (don't use)
const substract = (a: number, b: number) => a - b;

// regular function
function multiply(a: number, b: number): number {
    return a * b;
}

// anoynous function
const divide = function (a: number, b: number): number {
    return a / b;
};

// void
const showMessage = (message: string): void => {
    console.log(message);
    // return message; // error
};

const showMessage2 = (message: string): void => {
    console.log(message);
    return null;
};

const showMessage3 = (message: string): void => {
    console.log(message);
    return undefined;
};

// never
const throwError = (error: string): never => {
    throw new Error(error);
};

// destructuring
const person = {
    name: "Maii",
    age: 18,
};

const logPersonDetail = (person: { name: string; age: number }): void => {
    console.log(person.name, person.age);
};

const logPersonDetail2 = ({ name, age }: { name: string; age: number }): void => {
    console.log(name, age);
};
