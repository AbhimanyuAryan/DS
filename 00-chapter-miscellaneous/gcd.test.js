let {greatestCommonDivisorOldMethod, greatestCommonDivisorNewMethod} = 
				require('./gcd.js')


let gcdOld = greatestCommonDivisorOldMethod(14, 21)
let gcdNew = greatestCommonDivisorNewMethod(69, 169)

test('Check of gcd old', () => {
	expect(gcdOld).toEqual(7)
})

test('Check of gcd new', () => {
	expect(gcdNew).toEqual(1)
})