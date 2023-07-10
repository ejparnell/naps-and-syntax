# JavaScript Primitive Data Types

## Lesson Objectives

By the end of this talk a developer should be able to:

- Identify and describe 5 or the 7 primitive data types in JavaScript. Explain their characteristics, syntax, and use cases.
- Understand how JavaScript preform automatic type conversion.
- Manipulate Strings using built in JavaScript Methods.
- Work with Numbers using JavaScripts built in Math Methods.
- Understand the difference between a `null` and `undefined` value.
- Apply best practices and avoid common pitfalls when working with primitive data types.

## Intro to the Primitive Data Types

JavaScript has 7 primitive data types. [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)TODO: glossary data types are data that is not an [object](TODO: glossary) and has no [methods](TODO: glossary). The 7 primitive data types are:

- `string` TODO: these should jump link to their sections
- `number`
- `boolean`
- `null`
- `undefined`
- `symbol`
- `bigint`

While I will provide an example of each data type, I will not be providing demos or exercises for `symbol` and `bigint`. This is because they are not commonly used and are outside the scope of this lesson.

## `string`

A [`string`](https://developer.mozilla.org/en-US/docs/Glossary/String)TODO: glossary is a sequence of characters. A `string` can be defined using single quotes, double quotes, or backticks. The following are all valid `string` declarations:

```js
// single quotes
'This is a string with single quotes'

// double quotes
"This is a string with double quotes"

// backticks
`This is a string with backticks`
```

TODO: exercise on quotes
TODO: Talk about string methods

### `string` methods and properties

JavaScript provides a number of built in methods that can be used to manipulate `string`s and only one property. But why would we need to manipulate a string? Or access it's property? Well my artichokie, being able to change a `string` is super handy in a number of situations. For example, let's say you have a `string` that is all lowercase and you want to capitalize the first letter. Or you would like to know how many characters are in a `string`. Or you want to know if a `string` contains a certain character. All of these things can be done using built in `string` methods and properties. We will take a look at some real world applications later in the Frontend UI course. Right now let's get use to using them. For help reading MDN documentation use [this](TODO: create guide with screenshots on how to read mdn docs) guide.

The biggest difference we are going to see between properties and methods at the start is that one (properties) will not have parenthesis and the other (methods) will. We will dive into why that is the case in the JavaScript classes. For now just know that if you see parenthesis after a `string` it is a method and if you don't it is a property.

#### `string`.length property

[`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) is a property of the data type `string` and returns the length of a `string` as a number.

```js
'Hello World'.length // Will return 11

'Cats'.length // Will return 4

`Naps and Syntax`.length // Will return 15
```

> *Note*: What is this `return` you are talking about? We will go over that in detail in the JavaScript Functions lessons. For now just know that `return` is a keyword that will give you a value back.

TODO: exercise on length

#### `string`.toUpperCase() method

[`toUpperCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) is a method of the data type `string` and returns a new `string` with all the characters in uppercase.

```js
'Hello World'.toUpperCase() // Will return 'HELLO WORLD'

'Cats'.toUpperCase() // Will return 'CATS'

`Naps and Syntax`.toUpperCase() // Will return 'NAPS AND SYNTAX'
```

TODO: exercise on toUpperCase

#### `string`.toLowerCase() method

[`toLowerCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) is a method of the data type `string` and returns a new `string` with all the characters in lowercase.

```js
'Hello World'.toLowerCase() // Will return 'hello world'

'Cats'.toLowerCase() // Will return 'cats'

`Naps and Syntax`.toLowerCase() // Will return 'naps and syntax'
```

TODO: exercise on toLowerCase

#### `string`.charAt() method

[`charAt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) is a method of the data type `string` and returns the character at the specified index.

```js
'Hello World'.charAt(0) // Will return 'H'

'Cats'.charAt(1) // Will return 'a'

`Naps and Syntax`.charAt(5) // Will return ' '
```

> *Note*: The index of a `string` starts at 0. So the first character in a `string` is at index 0, the second character is at index 1, and so on. What is this index you are talking about? We will go over that in detail in the JavaScript Arrays lessons. For now just know that an index is a number that represents the position of an item in a list.

TODO: exercise on charAt

#### `string`.replace() method

[`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) is a method of the data type `string` and returns a new `string` with some or all matches of a pattern replaced by a replacement.

```js
'Hello World'.replace('Hello', 'Goodbye') // Will return 'Goodbye World'

'Cats'.replace('Cats', 'Dogs') // Will return 'Dogs'

`Naps and Syntax`.replace('Naps', 'Cats') // Will return 'Cats and Syntax'
```

TODO: exercise on replace

#### `string`.trim() method

[`trim()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim) is a method of the data type `string` and returns a new `string` with the whitespace from both ends of the `string` removed.

```js
'      Hello World      '.trim() // Will return 'Hello World'

'Cats     '.trim() // Will return 'Cats'

`     Naps and Syntax`.trim() // Will return 'Naps and Syntax'
```

> *Note*: What is whitespace? Whitespace is any character that represents a space in a `string`. For example, a space, tab, or newline character.

TODO: exercise on trim

### `number`

A [`number`](https://developer.mozilla.org/en-US/docs/Glossary/Number) is a numeric data type. A `number` can be an integer or a floating point number. The following are all valid `number` declarations:

```js
// integer
1

// floating point number
1.5
```

### `number` methods and properties

Just like with `string`s `number`s have methods and properties. Let us take a look at some of them. But unlike `string`s `number`s also have a built in `Math` object that has a bunch of methods and properties. We will take a look at some of those as well.

> *Note*: What is an object? We will go over that in detail in the JavaScript Objects lessons. For now just know that an object is a collection of related data and/or functionality.

#### `number`.toString() method

[`toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) is a method of the data type `number` and returns a `string` representing the specified `number` object.

```js
```

#### `number`.toFixed() method

[`toFixed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) is a method of the data type `number` and returns a `string` representing the specified `number` object.

```js
```

#### `number`.isNaN() method

[`isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) is a method of the data type `number` and returns a `string` representing the specified `number` object.

```js
```

#### `number`.parseInt() method

[`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) is a method of the data type `number` and returns a `string` representing the specified `number` object.

```js
```

#### `number`.parseFloat() method

[`parseFloat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat) is a method of the data type `number` and returns a `string` representing the specified `number` object.

```js
```

#### Math.abs()

[`Math.abs()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) is a method of the `Math` object and returns a `string` representing the specified `number` object.

```js
```

#### Math.round()

[`Math.round()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round) is a method of the `Math` object and returns a `string` representing the specified `number` object.

```js
```

#### Math.floor()

[`Math.floor()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) is a method of the `Math` object and returns a `string` representing the specified `number` object.

```js
```

#### Math.ceil()

[`Math.ceil()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) is a method of the `Math` object and returns a `string` representing the specified `number` object.

```js
```

#### Math.random()

[`Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) is a method of the `Math` object and returns a `string` representing the specified `number` object.

```js
```

### `boolean`

A [`boolean`](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) is a logical data type that can have one of two values: `true` or `false`. The following are all valid `boolean` declarations:

```js
// true
true    

// false
false
```

### `null`

A [`null`](https://developer.mozilla.org/en-US/docs/Glossary/Null) is a special data type that represents the intentional absence of any object value. The following is a valid `null` declaration:

```js
// null
null
```

### `undefined`

An [`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/Undefined) is a special data type that represents a variable that has not been assigned a value. The following is a valid `undefined` declaration:

```js
// undefined
undefined
```

### `symbol`

A [`symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) is a unique and immutable data type that is often used to identify object properties. The following is a valid `symbol` declaration:

```js
// symbol
Symbol()
```

### `bigint`

A [`bigint`](https://developer.mozilla.org/en-US/docs/Glossary/BigInt) is a numeric data type that can represent integers with arbitrary precision. The following is a valid `bigint` declaration:

```js
// bigint
1n
```

### Primitive Data Type Exercise

Let us venture forth to [primitive-data-types-exercise.js](./primitive-data-types-execise.js) and see some of these primitive data types in action.

We will be running our tests with Jest, no need to know anything about jest for this lesson. To run the tests, run the following command in your terminal at the root of this project:

```bash
npm install
```

Once the dependencies are installed, run the following command in your terminal at the root of this project:

```bash
npm test -- primitive-data-types-exercise.js
```

### Literals

So far, for the exception of `symbol` and `bigint` we have seen our primitive data types being declared as literals. A [`literal`](https://developer.mozilla.org/en-US/docs/Glossary/Literal) is a notation for representing a fixed value in source code. These values are not saved to variables.
