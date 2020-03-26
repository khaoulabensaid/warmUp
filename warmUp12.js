// 1-Write a function that takes a string as an input and returns the reverse of each letter
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o0l1l2e3h4"

function reverseStr(string){
	var i=string.length-1;
	var j=1;
	var string[j]= 1;
	var newString= '';
	while (i>= 0){
		newString+= string[i] + string[j+1];
		i--;
		j++

	}
	return newString;
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function sameLength(array){
	for (var i=0; i<array.length; i++){
		if (array[])
	}
}