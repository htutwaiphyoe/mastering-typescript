interface Car {
    company: string;
    year: Date;
    color: string;
    getLifeSpan(): number;
}

interface Report {
    getLifeSpan(): number;
}

const car = {
    company: "Lambogani",
    year: new Date(2016),
    color: "black",
    getLifeSpan(): number {
        return new Date().getFullYear() - this.year.getFullYear();
    },
};

const drink = {
    name: "Coca Cola",
    color: "brown",
    carbonated: true,
    sugar: 40,
    getLifeSpan(): number {
        return this.sugar;
    },
};

// long annotations
const printCar = (car: { company: string; year: number; color: string }): void => {
    console.log(car.company);
    console.log(car.color);
    console.log(car.year);
};

// interface
const printCarWithInterface = (car: Car): void => {
    console.log(car.getLifeSpan());
};

// refactor
const printLifeSpan = (data: Report): void => {
    console.log(data.getLifeSpan());
};

printLifeSpan(car);
printLifeSpan(drink);
