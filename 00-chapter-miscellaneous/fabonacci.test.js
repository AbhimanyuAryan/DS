const fibonacci = require('./fibonacci')

let fibo = fibonacci(12)

test('check fibonacci series', () => {
	expect(fibo).toEqual(144)
})