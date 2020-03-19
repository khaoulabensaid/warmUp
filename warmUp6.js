// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// 1-Define a function called myTrueFun that returns true whenever its called.
  // the function should return true whenever it is invoked.. 
  function myTrueFun(){
  	return true;
  }
// 2- Define a function called color in which returns true if type of the input is string and returns false otherwise.
// whenever the input is string  the function should return true .... 
function color(str){
	if (typeof str === 'string'){
		return true;
	}
	return false;
}

// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.
// i learned "let" in FCC so it would be nice if i use it hh ... so i declared a global variable j equal to zero then whenever my if condition is true
 // one will be added to j. so after looping if j is zero then n is prime otherwise return not prime......
 function isPrime(n){
 	let j= 0;
 	for (let i = 2; i < n; i++ ){
 		if (n%i === 0){
 			j++;
 		}
  	}
if (j !== 0){
return "not prime";
} else { return "is prime"}
 }

// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not

function isEqual(x, y){
	if (x === y){
		return true;
	}
	return false;
}