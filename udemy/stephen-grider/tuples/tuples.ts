// object representation
const cola = {
    color: "brown",
    carbonated: true,
    sugar: 40,
};

// array representation
const pessi = ["brown", true, 40];
pessi[0] = 40; // order can change

// tuple representation
const tea: [string, boolean, number] = ["brown", false, 5];
// tea[0] = 5; // error

// type alias
type Drink = [string, boolean, number];

const coffee: Drink = ["brown", false, 10];
const sprite: Drink = ["clear", true, 30];
