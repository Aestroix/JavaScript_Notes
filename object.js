
var user = {   // this is called object in JS   
    name: 'karmanya',
    id: 82,
    male: true,
    interest: [],
    addInterest: function (myInterest){
        this.interest.push(myInterest)
    },
    numberOfInterests: function(){
        return `${this.name} has ${this.interest.length} interests.`
    }
}

// TWO WAYS OF ACCESING THE KEY VALUE PAIRS
console.log(user.id)
console.log(user['id'])
console.table(user) // nice tabular repersentation
user.addInterest('riding')
user.addInterest('exploring')
console.table(user)

// STARTING WITH FOREACH LOOP
    // => we don't require the arr[i] every time to access the elements
user.interest.forEach((x) => ( console.log(x)))

// for of loop used with arrays generally
for(const x of user.interest){
    console.log(x);
}

// for in loop used with objects
// => return the keys
for(const x in user){
    console.log(x)
}


// functional way of making an object
var me = function(name, age){
    this.name = name;
    this.age = age;
    
}
console.log(typeof me);  // me is of the type 'function'

var me2 = me('karmanya', 82);
console.log(me2); 
// without the 'new' keyword the 'this' is bydefault pointing to the global object / empty object in case of nodejs since it is a regular function call

var me2 = new me('karmanya', 82);
console.log(me2);
// the importance of new keyword is that it takes care of the 'this' keyword

/*

    SUPPOSE: we have to create a function like getCourseCount in any framework used e..g. getName that logs my name onto the console
    --> we can do that by simply using the "prototype" object which is bydefault associated with every function and object initialised
    --> What new keyword does is that it injects all the prototypes defined in to the object

*/

me.prototype.getName = function(){  // to inject some property explicitly
    console.log(`Your  name is: ${this.name}`);
}
console.log(me)
if(me.hasOwnProperty('getName')){  // the object defined has a whole lot of properties and one of which is "hasOwnProperty" which checks for the available property the object has
    me2.getName()
}


/*
    --> Remember if there is an error we can debug it but if some variable is undefined then it can be due to a lot of different scenarios maybe the variable is not declared, not set properly, not injected properly etc.

*/