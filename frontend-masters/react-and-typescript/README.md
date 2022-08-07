# React and TypeScript Projects

## Introduction

## Type declarations

```ts
type Name = {
  property: type;
};
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
15. & intercept

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

## CSS style type

React.CSSProperties => type of inline style object, catches misspell of css style properties
Props can have default values

## useState

two states => the one we know and the one from api

for the one we know, we don't need to add type declarations

for the one from api, we need to give type of api response data and default type (null)
useState<Type | Default>()

## useEffect

useEffect expects function signature that returns void or Destructor

setTimeout and setInterval return numbers

## Class-based components

class-based components two types in generic, props and state, <Props, State>

react provides relevant types for each DOM event, and tools provide information for that
eg. for input change event => React.ChangeEvent<HTMLInputElement>,
for form submit event => React.FormEvent<HTMLFormElement>

typescript can also catch type cohesion of html input elements

## events with hooks

if event handler is inline function, typescript can infer the type of the event, no need to declare

## useReducer

In typescript, types can intercept with each others, meaning new type can be created with the combination of two other types

eg. type c = type a & type b, & meanings intercept

useReducer is super helpful for more complicated state management

if we define a type in reducer, typescript automatically defines type in useReducer function state,
also in dispatch function, if we define a type in action, dispatch function automatically defines its type in useReducer function

typescript saves some kinda unit tests

snowballing means the consequences of changing, typescript helps for this

if there is an optional field in type, it might become some problem in reducer, so dividing two action for optional one is better

typescript helps the intent of code flow for future proof

## Context API
