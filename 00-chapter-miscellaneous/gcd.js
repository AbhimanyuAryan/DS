// Greatest Common Divisor


// should find what are the divisors of some number
// jab tak 2 se bada hai
// a % divisor == 0 && b % divisor == 0
// 

function greatestCommonDivisorOldMethod(a, b){
	
	var divisor = 2,
		greatestDivisor = 1

	// if you get -ve number this will not work. fix this dude
	if(a < 2 || b < 2)
		return 1

	while(a >= divisor && b >= divisor){
		if(a % divisor == 0 && b % divisor == 0){
			greatestDivisor = divisor
		}
		divisor++
	}
	return greatestDivisor
}

function greatestCommonDivisorNewMethod(a, b){
	if(b == 0)
		return a
	else
		return greatestCommonDivisorNewMethod(b, a%b)
}

module.exports = {greatestCommonDivisorOldMethod, greatestCommonDivisorNewMethod}
