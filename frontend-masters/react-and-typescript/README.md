# React and TypeScript Projects

## Introduction

## Type declarations

```ts
type Name{
    property: type;
}
```

## Common Types

1. string,
2. number,
3. boolean,
4. string[],
5. string | number,
6. object (placeholder)
7. {} (can have any properties or values)
8. { id: string, title: string }
9. { id: string, title: string }[]
10. type
11. { key: string}: string
12. onChange(id: number): void
13. add(a: number, b: number): number
14. optional?: number

Typescript uses **Structural Typing**, as long as the object that conforms to the shape, it is good to go,
Typescript only looks the structural of object

React comes with the whole bunch of type definitions for common things
Tell typescript about the types if it cannot figure it out itself

## Type vs Interface

![Type Vs Interface](./typevsinterface.jpeg)

```ts
function add(a: number, ...otherProps: number[]) {}
```
