// Each of these has a relatively predictable output,
// but it's not as predictable as just using
// ES features directly.
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

namespace MathUtils {
  export const PI = 3.14;
  export const E = 2.71;
}

class MyClass {
  constructor(private myPrivateProp: number) {}
}

// Open enum bugs:

// https://github.com/Microsoft/TypeScript/issues?q=is%3Aissue+is%3Aopen+enum+label%3Abug
