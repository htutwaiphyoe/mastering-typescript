class Animal {
    constructor(public food: string) {}

    protected eat(): void {
        console.log(`I eat ${this.food}`);
    }
}

class Cow extends Animal {
    constructor(public leg: number, food: string) {
        super(food);
    }

    private walk(): void {
        console.log(`I walk with ${this.leg} legs`);
    }

    public eat(): void {
        console.log(`I eat ${this.food}`);
    }

    public showActions(): void {
        this.walk();
    }
}

const animal = new Animal("food");
console.log(animal.food);

const cow = new Cow(4, "crop");
console.log(cow);
console.log(cow.food);
// cow.walk(); // error
cow.eat();
cow.showActions();
