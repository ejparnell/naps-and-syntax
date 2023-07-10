const exercise = require('./primitive-data-type-exercise.js')

function sanitizeString(answer) {
	if (typeof answer !== 'string') return -1

	return answer.toLowerCase().trim()
}

test('What is the primitive data type that is a sequence of characters?', () => {
	const sanitizedAnswer = sanitizeString(exercise.S1Q1)
	expect(sanitizedAnswer).toBe('string')
})

test('What is the primitive data type that represents a variable that has not been assigned a value?', () => {
	const sanitizedAnswer = sanitizeString(exercise.S1Q2)
	expect(sanitizedAnswer).toBe('undefined')
})

test('What is the only primitive data type can only be represented as two values?', () => {
	const sanitizedAnswer = sanitizeString(exercise.S1Q3)
	expect(sanitizedAnswer).toBe('boolean')
})

test('What is the primitive data type that represents the intentional absence of any object value?', () => {
	const sanitizedAnswer = sanitizeString(exercise.S1Q4)
	expect(sanitizedAnswer).toBe('null')
})

test('What is the primitive data type that is a numeric value?', () => {
	const sanitizedAnswer = sanitizeString(exercise.S1Q5)
	expect(sanitizedAnswer).toBe('number')
})
