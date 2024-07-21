# Intermediate v2

## 01. Introduction

Mike North

typescript is best for describing shapes of things, API semantics

focus on utility types

[intermediate-v2](https://www.typescript-training.com/course/intermediate-v2)

## 02. Course Overview

1. Declaration Merging
2. Top and bottom types
3. Nullish values
4. Modules & CJS interop
5. Generics Scopes and Constraints
6. Conditional Types
7. Inference with conditional types
8. Mapped Types
9. Type registry: revisited
10. Variance over type params

## 03. Identifiers

1. Declaration Merging

In order to truly understand how types and values "stack" on each other, we'll first tackle the concept of declaration merging. Often when people grasp how TypeScript handles this, they never look at the language the same way again

`Declaration Merging => Single Identifier with stack of different types`

## 04. Namespaces

namespaces for type of JQuery, can export function type => namespace.function

namespaces has Declaration Merging

## 05. Classes

class also has Declaration Merging like namespace

classes are both value and type

Object.freeze => readonly object in both compile time and runtime
readonly type => readonly in TS, can write in runtime
