// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

function gcd(x, y){
	x= Math.abs(x);
	y= Math.abs(y);
var m = x%y ;
if (y=== 0){
	return x;
}	return gcd(y, m);
}

// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

function sum(x, y){
	function inc(x) {
    return x + 1;
     }
    function dec(x) {
    return x - 1;
    }
	if (y === 0){
		return x;
	}
	return sum(inc(x), dec(y);
}