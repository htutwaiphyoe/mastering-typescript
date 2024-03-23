class Generic<Type> {
  items: Type[] = [];

  push(item: Type) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }
}

let numberStack = new Generic<number>();
numberStack.push(1);

let stringStack = new Generic<string>();
stringStack.push("12");

console.log(numberStack.pop());
console.log(stringStack.pop());
