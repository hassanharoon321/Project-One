//Ask User to enter name, then display the same name with welcome message on browser
// window

var userName = prompt("Enter your Name");
alert("Welcome to Page "+userName);


//Ask User to enter number, store that in a variable then perform different 
//arithmetic operations on that.

var userNumOne = prompt("Enter any Number");
var userNumTwo = prompt("Enter any Number");
var one = parseInt(userNumOne);
var two = parseInt(userNumTwo);

var add = one+two;
var sub = one-two;
var mult = one*two;
var div = one/two;
var mod = one%two;

alert("Addation of "+userNumOne+" + "+userNumTwo+ " = "+add)
alert("Subraction of "+userNumOne+" - "+userNumTwo+ " = "+sub)
alert("Multipliaction of "+userNumOne+" * "+userNumTwo+ " = "+mult)
alert("Division of "+userNumOne+" / "+userNumTwo+ " = "+div)
alert("Modulus of "+userNumOne+" % "+userNumTwo+ " = "+mod)


//Ask User to enter number, then print table of the provided user number on browser window.
// Hint: “\n”

// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// .
// .
// .
// .
// .
// 2 x 10 = 20

var userInput = prompt("Enter the table");
var table = parseInt(userInput);

console.log(table + " " + " * " + "1" + " = " + table*1 + 
"\n" + table + " " + " * " + "2" + " = " + table*2 +
"\n" + table + " " + " * " + "3" + " = " + table*3 +
"\n" + table + " " + " * " + "4" + " = " + table*4 +
"\n" + table + " " + " * " + "5" + " = " + table*5 +
"\n" + table + " " + " * " + "6" + " = " + table*6 +
"\n" + table + " " + " * " + "7" + " = " + table*7 +
"\n" + table + " " + " * " + "8" + " = " + table*8 +
"\n" + table + " " + " * " + "9" + " = " + table*9 +
"\n" + table + " " + " * " + "10" + " = " + table*10
)

