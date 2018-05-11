const isPrime = require('./prime')


test('check for prime number', () => {
	expect(isPrime(5)).toEqual(true)
	expect(isPrime(97)).toEqual(true)
	expect(isPrime(100)).toEqual(false)
})

