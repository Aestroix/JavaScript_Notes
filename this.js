// THIS keyword part 1
// 'this' is an empty context when we are running it in node environment in the local machine
console.log(this);
// it will output the empty scope parenthesis but in case when we run it in browser it will output the window object (global context) 
// and the 'window' has a plethora of available inbuilt functions
// following this much there won't be any consufion in usage of 'this'


/*
        ====>>> FOR ALL REGULAR FUNCTION CALLS THIS POINT TO WINDOW OBJECT      

*/
var user = {
    firstName: 'karmanya',
    courseCount : 5,
    getCourseCount : function(){
        console.log('line 12', this);

        function sayHello(){
            console.log('hello');
            console.log('line 21', this)
        }
        sayHello()
        /* 
        
            => A VERY INTERESTING THING HAPPENED HERE, the sayhello function is a regular function and is perfectly regular calling here. So the this method actually points to the global context.

            => only one thing to note is that the this will point to the parent only when the function is called through the object ( dictionary ) :) that's it man !
        
        */
    },
}
user.getCourseCount() 

// this is not a regular function call, as the function is called through the object


// => 'This' is replaced by the container in which that function is contained