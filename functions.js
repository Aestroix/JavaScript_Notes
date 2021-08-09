// WHENEVER YOU CALL A FUNCTION THAT REQUIRES SOME PARAMETER BUT YOU PASSED NOTHING
// THE VARIALBE IS BY DEFAULT ASSIGNED THE VALUE 'undefined'

// JS HAS A FEATURE IN WHICH YOU CAN DIRECTLY DEFINE A FUNCTION AND ASSIGN IT TO A VARIABLE

var sum = function(a,b){
    return a+b
}
console.log(sum(5,6))


var s = 'abcde'
console.log(s[1])
console.log(s.charAt(1)) // to print the character at a particular index
console.log(s.includes('ab')) // includes keyword is used like 'in' in list or string
                            // in case of set we have set.has() method
console.log(s.indexOf('bc')) // index of particular substring of it



// USAGE OF ARROW FUNCTION: Makes the function defining shorter a lot !
var isEven = (num) => { 
    return num%2 === 0;
}
console.log(isEven(35));

var res = [2,4,6,8].every(isEven)
console.log(res); // check if every element of the array passes the condition in the specified function

// The CALLBACK function can also be written without specifying the function name by,
var res = [2,3,4,6].every((x) => { // () => {} this is the callback and arrow function short form
    return x%2 === 0;
})
console.log(res);

// and one more thing the arrow function return by default

var res = [2,4,6,8].every((x) => x%2 === 0) // or you can hold it up in paranthesis
console.log(res);

// Discussing two of the function fill and filter

var numbers = [1,4,5,766,8,82,28,56]
// console.log(numbers.fill('k', 2,7)); // fills 'k' from 2 to 6
// console.log(numbers.filter((x) => (x%2 != 0)))

// SLICE AND SPLICE FN

// console.log(numbers.slice(2, 6));
numbers.splice(2,4,'hi','karmanya','aestroix') // 2 = start 4 = count 4 steps and third argument is the replacement
console.log(numbers); // numbers is updated accordingly

