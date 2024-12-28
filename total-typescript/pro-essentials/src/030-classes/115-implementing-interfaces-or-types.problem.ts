interface ShapeOptions {
  x: number;
  y: number;
}

type IShape = {
  position: { x: number; y: number };
  move: (deltaX: number, deltaY: number) => void;
};

// How do we ensure our Shape class matches IShape?
class Shape {
  #x: number;
  #y: number;

  constructor(initial?: ShapeOptions) {
    this.#x = initial?.x ?? 0;
    this.#y = initial?.y ?? 0;
  }

  get position() {
    return {
      x: this.#x,
      y: this.#y,
    };
  }

  move(x: number, y: number) {
    this.#x = x;
    this.#y = y;
  }
}
