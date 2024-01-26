# TypeScript Fundamentals, v4

## 01. Introduction

Mike North

[Course website](https://www.typescript-training.com/)

## 02. Project Setup

[Github Repository](https://github.com/mike-north/typescript-courses)

## 03. Compiling TypeScript with TSC

index.js + index.d.ts = index.ts

## 04. Variable Declaration & Inferences

type casting => `as Type` => eg. `as const`

## 05. Any & Type Casting

any => top-level type => `as any as Date`

## 06. Functions & Return Types

eslint => best practice and code style
typescript => type checking

always add explicit return type of the function for boundary

## 07. Objects & Property Types

optional => field?: number

## 08. Index Signatures

```bash
{[key: string]: string}
```

. for known property, [] for index

## 09. Array Types, Tuples & ReadOnly

array type => type[]

readonly => immutable array

multiple dimension => type[][]

## 10. Nominal vs Structural Type System

nominal => all about names
structural => all about structure

## 11. Conceptualizing Union & Intersection Types

Union type => OR => type1 | type2

Intersection type => AND => type1 & type2 => common shared types of both types

## 12. Union Types

type Name = type1 | type2

## 13. Union Type Control Flow

type guard

discriminated unions

## 14. Intersection Types

anything in both sets

## 15. Type Alias

type Name = value

type alias can hold any types in typescript

type inheritance => type & type

## 16. Interface extends & implements

extends => class extends class, interface extends interfaces

implements => interface acts as contract

## 17. Open Interfaces

interfaces can be redeclare

can add property in global interface
