// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']
function objKey(obj){
	return Object.keys(obj);
}
	

// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2
function objLength(object1){
	return Object.keys(object1).length;

}

function objLength(object1){
var count = 0;
for (var key in object1) {
    if (object1.hasOwnProperty(key)) {
       ++count;
    }
}
return count;
}
    

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]

function objSort(array){

}
