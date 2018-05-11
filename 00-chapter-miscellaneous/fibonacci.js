/*
1
1 
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
3 + 5 = 8
5 + 8 = 13
8 + 13 = 21

(n-1) (n-2)
*/


function fibonacci(n){
	var fibo = [0, 1]

	if(n <= 2) return 1

	for(var i = 2; i <= n; i++)
		fibo[i] = fibo[i-1] + fibo[i-2]
		
	return fibo[n]
}

module.exports = fibonacci