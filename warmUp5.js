// 1) Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// ex greaterNum(5, 10) => "The greater number of 5 and 10 is 10."
function greaterNum(x, y){
	if (x > y){
		return "the greater number of "+ x + " "+ "and" + " " + y + " is "+ x;
			}
		else if (x < y){
			return "the greater number of "+ x + " "+ "and" + " " + y + " is "+ y;
		}	
		return "they are equal";
}


// 2) Write a function named isEven using  for loop that
// -  iterate from x to y.
// -  return array contain the even values,
//  ex:  isEven(1,10) => [2,4,6,8,10]

<<<<<<< HEAD
// function isEven(x, y) {

// }
function isEven(x, y) {
   var arr = [] ;
	for (var i = 0 ; x <= y ; x++) {
       if (x % 2 === 0) {
        arr[i] = x ;
        i++;
       }
	}
	return arr ;
}
=======
>>>>>>> 61b0662bb14ae4fe1668c5e0f12461a2bba0362d
//3) write a function named sum that
// - Use a while loop to add up the numbers from x to y.
// ex sum(1,5) => 15
function sum(x, y){
	var i = 0;
	var total = 0;
	while (i === x || i <= y){
		total = total + i;
		i++;
	}
	return total ;
}

function sum(x, y) { 
 if(x > y){ 
 return sum(y, x); 
 } 
 if(x === y){ 
 return x; 
 } 
 return x + sum(x+1, y); 
 }


//4) Write a function named factorial that
// -  Use Recursion to calculate the factorial of a number
// -  the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n
// - 5! = 5*4*3*2*1 = 120
// ex : factorial(5) => 120

function factorial(n){
	var i = 1;
	var total= 1;
	while (i <= n){
		total= total * i;
	     i++ ; 
	}
    return total;
}

//5) write a function named decimals
//- the function will format a number up to specified decimal places
//- the function will return a string
//- if the parameters not a number return false
// ex :
//      decimals(2100, 'a') ==> false
//      decimals('a', 5) ==> false
//      decimals(2.100212, 2) ==> '2.10'
//      decimals(2.100212, 3) ==> '2.100'
//      decimals(2100, 2) ==> '2100.00'
//
