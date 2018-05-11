const primeFactors = require('./PrimeFactor')


let primeOne = primeFactors(315)
let primeTwo = primeFactors(12)

test('Checking for factors', () => {
	expect(primeOne).toEqual([3,3,5,7])
	expect(primeTwo).toEqual([2,2,3])
})


// [ 2, 2, 3 ]
// [ 3, 3, 5, 7 ]