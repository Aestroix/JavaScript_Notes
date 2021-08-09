/*
    -> BASICALLY JS HAS A VERY INTERESTING CONCEPT OF GLOBAL CONTEXT WHICH STATES THAT eveything defined resides in the global context which facilitates the usage of function before defining and also the comparison of the values from local scope to the global one.

    -> In node environment the global context is something different than the global context when the 
    JS is running in the browser. 
    
    -> In browser the global context is the "window ˚object˚ ".

    Consider the example
*/

var myName = 'karmanya'

// if (myName === window.myName){
//     console.log("This is indeed a true statement.")
// }

// THIS STATEMENT THROWS OUT AN ERROR BECAUSE WINDOW IS NOT DEFINED IN NODE ENVIRONMENT

/*
    -> Whenever a function is called or a statement is executed, an 'execution context' gets stacked above the global context. It is like a memory heap is alloted for the next execution to be done.

    -> Execution context gives us 3 major features:
        ≥ VARIABLE OBJECT
        ≥ SCOPE CHAIN
        ≥ THIS KEYWORD 


    -> JS has two main steps:
        ≥ function declarations are scanned and made available
        ≥ variable declarations are scanned and made undefined

*/

// tipper('5')
// var tipper = function(a){
//     console.log(parseInt(a) + 10)

// }
/*
    => the parseInt converts the first instance to the base given 
    => e..g.–> ' 23 45 67 ' return 23 and if some base is given like parseInt(x, 8) then convert to base8

*/
// this wont run becoz variable function is undefined in global context. If I use the calling statement after declaration then it will work.

console.log(name)
var name = 'karmanya' // outputs undefined because global context has the value of name but is undefined at the time it is used
// if I comment out the declaration part then it gives error


/*
    -> Another concept is of the SCOPE CHAINING i.e..-> if some execution block doesn't have a variable locally defined in its scope then, it would look for it, in the bigger ( previous ) block from which it was been called.
*/