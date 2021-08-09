// dom is DATA OBJECT MODEL. Every tag is visualised as trees of tags

// implementing finding elements in a document

var hello = document.getElementsByTagName('h1')
console.log(hello);

/*

    => this is not possible to do. Interesting fact is that:
        > Node is a server side language and so it has nothing to do with the DOM manipulation or implementation of anythingy 
        > so the query selectors / hunting for elements doesn't work on the server side hence node does not support document. < anything >

*/

/*

    var elem = window.getComputedStyle()

    => You can use window.getComputedStyle() of any thing. It returns the object of all the applied styles and everything about the object which is applying on that element.
    => So, we will easily be able to change anything or find the details of anything with precision.

    => Similarly, there is another function called elem.getPropertyValue() to access the specific property

*/