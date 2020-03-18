// 1 - Write functions larger and smaller that each accept two strings as arguments, and return the larger and smaller strings, respectively
function larger(string1, string2){
	if (string1.length> string2.length){
		return string1;
	}
	return string2;
}
function smaller(string1, string2){
	if (string1.length< string2.length){
		return string2;
	}
	return string1;
}
// 2 - Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation. For instance:
<<<<<<< HEAD
// function counting(n) {
// TODO: your code here
// }
// counting(5); // => '1, 2, 3, 4, 5'
// counting(1); // => '1'
// counting(3); // => '1, 2, 3'
=======
// function counting(n) { 
    TODO: your code here 
// } 
var i= 0;
var total=0
var total= total+i;

function counter(){
	i= i+1;
	return total + i;

}


// counting(5); // => '1, 2, 3, 4, 5' 
// counting(1); // => '1' 
// counting(3); // => '1, 2, 3'
function counting(n){
	var i= 2;
	var total= '1';
	while (i<= n){
		total= total + ',' + i;
		i= i+1;
	}
	return total;
}
>>>>>>> b49e287c68151eed1397ef771ac2b7a769e8a6b9

// 3 -  Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5
// welcome 1
//  welcome 2, meet 1
//  welcome 3, meet 1 and 2
//  welcome 4, meet 1, 2 and 3
//  welcome 5, meet 1, 2, 3 and 4
//

// 4- Write a function shortestWord that works like longestWord, but returns the shortest word instead.
<<<<<<< HEAD
=======
function shortestWord(array){
	
}
>>>>>>> b49e287c68151eed1397ef771ac2b7a769e8a6b9
