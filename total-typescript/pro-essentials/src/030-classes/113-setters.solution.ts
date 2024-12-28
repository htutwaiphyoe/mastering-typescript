import { expect, it } from "vitest";

class CanvasNode {
  #x: number;
  #y: number;

  constructor(position?: { x: number; y: number }) {
    this.#x = position?.x ?? 0;
    this.#y = position?.y ?? 0;
  }

  get position() {
    return {
      x: this.#x,
      y: this.#y,
    };
  }

  set position(pos) {
    this.#x = pos.x;
    this.#y = pos.y;
  }

  move(x: number, y: number) {
    this.#x = x;
    this.#y = y;
  }
}

it("Should be able to move", () => {
  const canvasNode = new CanvasNode();

  expect(canvasNode.position).toEqual({ x: 0, y: 0 });

  canvasNode.move(10, 20);

  expect(canvasNode.position).toEqual({ x: 10, y: 20 });
});

it("Should be able to receive an initial position", () => {
  const canvasNode = new CanvasNode({
    x: 10,
    y: 20,
  });

  expect(canvasNode.position).toEqual({ x: 10, y: 20 });
});

it("Should not be able to access x and y from the outside", () => {
  const canvasNode = new CanvasNode();

  expect(
    // @ts-expect-error
    canvasNode.x,
  ).toEqual(undefined);
  expect(
    // @ts-expect-error
    canvasNode.y,
  ).toEqual(undefined);
});

it("Should let you set the position", () => {
  const canvasNode = new CanvasNode();

  expect(canvasNode.position).toEqual({ x: 0, y: 0 });

  canvasNode.position = { x: 10, y: 20 };

  expect(canvasNode.position).toEqual({ x: 10, y: 20 });
});
