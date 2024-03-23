# Day 5

java static can be accessed with object level

static methods can only use static fields/methods
instance methods can use both static and instance fields/methods

name => conflicts with function name, dividing anonymous function and regular function

static blocks

constructor => invoke when object is created

static blocks => invoke when class is loaded

generic => side effect of supporting static type, need due to static type system to get dynamic type + type safety

any => cannot get type safety

ts generic => any at runtime time (erase), just checking at compile time => no truly generic

no truly generic => one class with type object
truly generic => one class for one type

Type Erasure => erase at runtime

this is Type for this base type guard

parameter properties => constructor parameters with class fields

js, ts class are first class because they are functions in the js level since functions are first classes

abstract => use to enforce children in order to get polymorphism, same taxonomy

abstract methods must be in abstract class

cannot create instance from abstract class

must override abstract methods in children
