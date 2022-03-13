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

## Type for React children

- JSX.Element
- JSX.Element | JSX.Element[]
- React.ReactNode
- React.ReactChildren
- React.ReactChild[]
- React.ReactChild

JSX.Element => single child
JSX.Element[] => does not accept text as child elements, Text in JSX has the type 'string', but the expected type of 'children' is 'Element[], requires multiple children
JSX.Element | JSX.Element[] => does not accept text as child elements, Text in JSX has the type 'string'
React.ReactChild => single child of type 'ReactChild', subset of React.ReactNode, does not include Portal
React.ReactChild[] => requires multiple children of type 'ReactChild'
React.Children => is not a type
React.ReactNode => best solution for React children type, it supports all things
