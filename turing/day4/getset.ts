class Circle {
  private _radius!: number;

  get area() {
    return Math.PI * this._radius * this._radius;
  }

  set area(value: number) {
    this._radius = value;
  }
}

const circle = new Circle();
circle.area = 10;
console.log(circle.area);
