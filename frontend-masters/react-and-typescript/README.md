# React and TypeScript Projects

## 01. Introduction

TypeScript with React components
TypeScript details
Patterns in React

TypeScript sales pitch

Type checking in compile time
Autocomplete
More maintainable for larger code base
Contribute the quality of code base overtime

[Course URL](https://fem-react-typescript.vercel.app/)

## 02. React Component with TypeScript

file extension => .tsx

TypeScript tries its hardest to stay out of your way. If you find yourself out of the box, doing a ton of typing, that's probably an anti pattern. because of type inference

any => any type

can use PropTypes for JavaScript

if typescript can figure out, can leave it. But if typescript cannot figure out, need to specify types

typescript can check all files related with changes and also provide related methods for each data type. eg string for string methods

typescript can save the number of unit tests.

ts.configs allowJS for migrating JS to TS

JavaScript and TypeScript can live together pretty nicely.

```ts
type Props = {
  property: type;
};
```

## 03. Typing Components Exercise

It's convention to just take the name of components and tack on -Props on to the end.

avoid any => Any is infectious, anything that any touches basically becomes any

learning through doing

events are not equal, hover the elements to get the props type

typescript provides implicit documentation for pubic api

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

## 04. Typing Component Children Exercise

React.PropsWithChildren type from react which accepts generic for other props

React.ComponentPropsWithoutRef

React.ComponentPropsWithRef

[https://solverfox.dev/writing/no-implicit-children/](https://solverfox.dev/writing/no-implicit-children/)

![Type Vs Interface](./typevsinterface.jpeg)

```ts
function add(a: number, ...otherProps: number[]) {}
```

## 05. Typing Component State

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

useState is really a wrapper around useReducer

use function setter for race condition of setState

create new function outside of component for function setter to get easily tested

## 06. Typing Component State Exercise

event.target.valueAsNumber

useEffect function return a clean up function or undefined

React.CSSProperties => type of inline style object, catches misspell of css style properties
Props can have default values

## 07. Fetching API Data

[https://miragejs.com/](https://miragejs.com/)

default data or generic type in useState for api data

typescript also analyzes the code base and code path

two states => the one we know and the one from api

for the one we know, we don't need to add type declarations

for the one from api, we need to give type of api response data and default type (null)
useState<Type | Default>()

## 08. Fetching API Data Exercise

useEffect expects function signature that returns void or Destructor

setTimeout and setInterval return numbers

## 09. Passing State Methods to Components

class-based components two types in generic, props and state, <Props, State>

react provides relevant types for each DOM event, and tools provide information for that
eg. for input change event => React.ChangeEvent<HTMLInputElement>,
for form submit event => React.FormEvent<HTMLFormElement>

typescript can also catch type cohesion of html input elements

## 10. Typing Reducers

if event handler is inline function, typescript can infer the type of the event, no need to declare

## 11. Reducers with Explicit any

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
