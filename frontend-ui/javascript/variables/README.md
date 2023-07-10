## Declaring Variables

A [`variable`](https://developer.mozilla.org/en-US/docs/Glossary/Variable) is a container for a value. We can hold any of the primitive data types in a variable as well as other JavaScript items that we will talk about in later lessons. For now just think of a variable as a box that you can throw things into.

There are three main ways we interact with variables.

- Declaration - Create a variable and give it a name to refer to it by.
- Assignment - Give a variable a value.
- Retrieval - Retrieve the value of a variable.

### Declaration

To declare a variable we use the `var`, `let`, or `const` keywords. The following are all valid variable declarations:

```js
// var
var myVarVariable = 'This is a variable declared with var and holds the value of this string'

// let
let myLetVariable = 'This is a variable declared with let and holds the value of this string'

// const
const myConstVariable = 'This is a variable declared with const and holds the value of this string'
```

#### var

The `var` keyword is the oldest way to declare a variable. It is also the most flexible. Variables declared with `var` can be reassigned and re-declared. The following is an example of reassigning a variable declared with `var`:

```js
// declared with a string value
var myVarVariable = 'This is a variable declared with var and holds the value of this string'

// reassigned with a null value
myVarVariable = null

// reassigned with a number value
myVarVariable = 1

// reassigned with a boolean value
myVarVariable = true

// reassigned with a undefined value
myVarVariable = undefined

// re-declared 
var myVarVariable
```

The variable that was declared with `var` can be reassigned and re-declared as many times as we want. However the last value that we assigned to the variable is the value that will be returned when we retrieve the value of the variable. Since the value of `undefined` was the last value reassigned to the variable, that is the value that will be returned when we retrieve the value of the variable.

#### let

The `let` keyword was introduced in ES6. Variables declared with `let` can be reassigned but cannot be re-declared. The following is an example of reassigning a variable declared with `let`:

```js
// declared with a string value
let myLetVariable = 'This is a variable declared with let and holds the value of this string'

// reassigned with a null value
myLetVariable = null

// reassigned with a number value
myLetVariable = 3

// reassigned with a boolean value
myLetVariable = false

// reassigned with a undefined value
myLetVariable = undefined
```

### Demo

### Exercise

## Talking Points

### Demo

### Exercise

## Wrap Up

## Additional Resources

## Contact Me

See something that could be improved? Have a question? Open an issue [here](https://github.com/ejparnell/naps-and-syntax/issues/new)
