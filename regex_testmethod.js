/* . The .test() method takes the regex, applies it to a string
(which is placed inside the parentheses), and returns true or false if 
your pattern finds something or not. */

let myString = "Hello, World!";
let myRegex = /Hello/;
myRegex.test(myString);