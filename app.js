
// chapter 1 (alert)

/*alert("Hello, welcome to my website")
alert("Error! Please enter a valid password")
alert("Welcome to JS Land... \n Happy Coding!" )
alert("Welcome to JS Land... ")
alert("Happy Coding!") 
console.log(alert("Hello...I can run my JS through web browser console "))*/

// chapter 2 (Variables for Strings)

/*var userName;
var myName = " Syed Hammad Ul Nain Fakhar"
var message = "Hello World"
alert(message)

var name = " John Doe"
var age =      15
var courseName = "Mobile Certification Course"

alert( name)
alert ( age)
alert( courseName)

var pizza = " Pizza \n Pizz \n piz \n pi \n p"
alert(pizza)


var email = " hammadfakhar51@gmail.com"
alert("My email address is" + email)



var book = "I am trying to learn form the Book A smarter  \n way to learn Javascript"
alert(book)


var text = " yah! I can write my HTML content through Javascript"
document.write(text);

var image = " ------------$$&&**&&$$--------------"
alert(image)*/



// CHAPTER 3 ( VARIABLES FOR NUMBERS)

/*var myAge = 25;
alert( " I " +  " " + "Am" +  " " + " " +  myAge +  " " + "Year  Old ");

var numOfVisit = prompt("Enter how many times you visited the page")
alert(" You have visited this site" + " " + numOfVisit + " " + "time") 

var birthYear = 1997;
document.write("My birth year is" + " " + birthYear + "\n" + "Data type of my declared variable is number")

var visitorName = prompt("Enter your name", "john doe")
var product = prompt("Enter Product Title", "shirt/pant/trouser etc")
var quantity = prompt( "Enter how many things you purchased", " 2 pants" )

document.write( "Mr" + " " +  visitorName + " ordered " +  product + " " + quantity + " on XYZ clothing" )*/



// CHAPTER 4 (LEGAL VS ILLEGAL)

// var var1 , var2 , var3 ;

// var myName, NAME , My_Name , _mY$123Name, myName$_123; // legal variable

// var 123name , !name , %name, name-g23, name&%%--; // illelegal varaible


// CHAPTER 5 (MATH EXPRESSIONS)

/*var firstNum = +prompt("Enter first number");
var secondNum = +prompt("Enter second number");

var total = firstNum + secondNum;
document.write("The sum of two numbers is " ,total)


var firstNum1 = +prompt("Enter first number");
var secondNum1 = +prompt("Enter second number");

var total1 = firstNum1 - secondNum1;
document.write("The difference of two numbers is " ,total1)



var firstNum2 = +prompt("Enter first number");
var secondNum2 = +prompt("Enter second number");

var total2 = firstNum2 * secondNum2;
document.write("The product of two numbers is " ,total2)


var firstNum3 = +prompt("Enter first number");
var secondNum3 = +prompt("Enter second number");

var total3 = firstNum3 + secondNum3;
document.write("The divison of two numbers is " ,total3)


var firstNum4 = +prompt("Enter first number");
var secondNum4 = +prompt("Enter second number");

var total4 = firstNum4 % secondNum4;
document.write("The modulus of two numbers is " ,total4)*/



/*var mathEx ;
document.write("value after  declaration is " ,mathEx) // undefined
document.write("<br>")

mathEx = 20;
document.write("initial value is ", mathEx)

document.write("<br>")
var updatedVlaue = ++mathEx;
document.write("value after increment is " , updatedVlaue)

var addSeven = updatedVlaue + 7;
document.write("<br>")
document.write("value after adding 7 is ", + " " + addSeven)
document.write("<br>")

var decrease = --addSeven;
document.write("value after decrement is ", decrease)

document.write("<br>")

var remainder = decrease % 9;
document.write("reamider is " , remainder)

document.write("<br>")


var ticketCost = 600;
var ticketPurchased = 5;
var totalCost = ticketCost * ticketPurchased;
document.write("The cost to buy " + ticketPurchased + " tickets to a movie is " + totalCost )


document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")*/



/*var number = prompt(" Enter any number")
document.write( number + " " + "x" + " " + "1" + " " + "=" + " " + number * 1 + "<br>" + number + " " + "x" + " " + "2" + " " + "=" + " " + number * 2 + "<br>" + number + " " 
+ "x" + " " + "3" + " " + "=" + " " + number * 3 + "<br>" + number + " " + "x" + " " + "3" + " " + "=" + " " + number * 3 + "<br>" + number + " " + "x" + " " + "4" + " "
 + "=" + " " + number * 4 + "<br>" + number + " " + "x" + " " + "5" + " " + "=" + " " + number * 5 + "<br>" + number + " " + "x" + " " + "5" + " " + "=" + " " + number * 
5 + "<br>" + number + " " + "x" + " " + "6" + " " + "=" + " " + number * 6 + "<br>" + number + " " + "x" + " " + "7" + " " + "=" + " " + number * 7 + "<br>" + number + " " 
+ "x" + " " + "8" + " " + "=" + " " + number * 8 + "<br>" + number + " " + "x" + " " + "9" + " " + "=" + " " + number * 9 + "<br>" + number + " " + "x" + " " + "10" + " "
 + "=" + " " + number * 10)

document.write("<br>")
document.write("<br>")*/


 /*var selection = prompt(" welcome to converter of temperature, fahrenheit/clesius \n please write your selection", "F/C");

if ( selection == "F"){
var ftemp = prompt("please enter temperature in farenheit to get in celsius");

var fconvert = (( ftemp-32) * 5/9);
alert("temperature in celsius is : "+ fconvert);
}
else if(selection=="c"){
var cTemp=prompt("please enter temperature into celsius to get in fahrenheit");
var cConvert=parseInt((cTemp * 5/9) +32);
alert("temperature in fahrenheit is : "+ cConvert);
}
else { 
alert("you have entered a wrong selection")};*/


/*var priceOf1 = 650;
var priceOf2 = 100;
var quantityOfPrice1 = 3;
var quantityOfPrice2 = 7;
var shippingCharges = 100;

var amount =  (priceOf1 * quantityOfPrice1) + (priceOf2 * quantityOfPrice2) + shippingCharges

document.write("price Of 1 = 650")  
document.write("<br>")
document.write("price Of 2 = 100")
document.write("<br>")
document.write("quantity Of Price1 = 3")
document.write("<br>")
document.write("quantity Of Price2 = 7")
document.write("<br>")
document.write("Shipping charges = 100")
document.write("<br>")


document.write("Total cost of your order is " , amount)

document.write("<br>")
document.write("<br>")
document.write("<br>")


var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks/totalMarks) * 100;


document.write("Total marks is ", totalMarks)
document.write("<br>")
document.write("Obtained marks is ", obtainedMarks)
document.write("<br>")
document.write("Your percentage is ", percentage + "%")

document.write("<br>")

var dollar = 104.80;
var saudiRiyal = 28;

var convertedAmount = (10 * dollar) + (25 * saudiRiyal)

document.write("<br>")

document.write("Total currency in PKR is " + convertedAmount)

document.write("<br>")

var myNum = 10;
myNum = myNum + 5 * 10 /2; // multiple operations in single line
document.write(myNum) 


document.write("<br>")
document.write("<br>")

var currentYear = 2021;
var birthYear = 1997;
 var difference = currentYear - birthYear;

 document.write("Your age is " + difference) // age calculator

 document.write("<br>")
 document.write("<br>")

 var radius = 20;
 var circum = 2 * 3.14 * radius;
 var area = 3.142 * radius * 2

 document.write("Radius of a circle is  = " + radius)
 document.write("<br>")
 document.write("Circumference of a circle is =  " + circum)
 document.write("<br>")
 document.write("area of a circle is = " + area )

 document.write("<br>")
 document.write("<br>")
 document.write("<br>")

 var fvrtSnack = "biryani";
 var currentAge = 24;
 var maximunAge = 60;
 var perDay = 2;
 var lifetime = 2 * 36;
 document.write("Favourite snack is "+ fvrtSnack)
 document.write("<br>")
 document.write("Current Age is " + currentAge)
 document.write("<br>")
 document.write("Maximum age is " + maximunAge)
 document.write("<br>")
 document.write( "You will need " + lifetime + " Biryani to last you till the age of " + maximunAge)*/



 // CHAPTER 6 - 9 ( MATHS EXPRESSIONS)

 /*var a = 10;


  document.write("Value of a is " + a)
  document.write("<br>")
  document.write("<br>")

  document.write("value of ++a is ",  ++a)
  document.write("<br>")
  document.write("<br>")

document.write("now the value of a " + a)
document.write("<br>")
document.write("<br>")

document.write("The value of a++ is " + a++)
document.write("<br>")
document.write("<br>")

document.write("Now the value of a++ " + a)
document.write("<br>")
document.write("<br>")

document.write("Now the value of --a", --a)
document.write("<br>")
document.write("<br>")

document.write("Now the value of a is " +  a)


document.write("<br>")
document.write("<br>")

document.write("Now the value of a-- " + a--)
document.write("<br>")
document.write("<br>")

document.write("Now the value of a--" + a )

document.write("<br>")
document.write("<br>")



// --a; would be 1
// --a - --b would be ; 1 - 0 ; // 1
// --a - --b + ++b would be // 1 + 1 = 2
// --a - --b + ++b + b++  would be // 2 + 1 = 3.


document.write("value of a is 2" )
document.write("<br>")
document.write("<br>")
document.write("value of b is 1")
document.write("<br>")
document.write("<br>")
document.write( " result is 3")

document.write("<br>")
document.write("<br>")




var greet = prompt("Enter your name  ") // greeting message
alert("Welcome Mr " + greet)

document.write("<br>")


var number = +prompt("enter any number" , "nummber * 5")
if( number == 0){
    document.write(5 + " " + "x" + " " + "1" + " " + "=" + " " + 5 * 1 + "<br>" + 5 + " " + "x" + " " + "2" + " " + "=" + " " + 5 * 2 + "<br>" + 5 + " " 
    + "x" + " " + "3" + " " + "=" + " " + 5 * 3 + "<br>" + 5 + " " + "x" + " " + "3" + " " + "=" + " " + 5 * 3 + "<br>" + 5 + " " + "x" + " " + "4" + " "
     + "=" + " " + 5 * 4 + "<br>" + 5 + " " + "x" + " " + "5" + " " + "=" + " " + 5 * 5 + "<br>" + 5 + " " + "x" + " " + "5" + " " + "=" + " " + 5 * 
    5 + "<br>" + 5 + " " + "x" + " " + "6" + " " + "=" + " " + 5 * 6 + "<br>" + 5 + " " + "x" + " " + "7" + " " + "=" + " " + 5 * 7 + "<br>" + 5 + " " 
    + "x" + " " + "8" + " " + "=" + " " + 5 * 8 + "<br>" + 5 + " " + "x" + " " + "9" + " " + "=" + " " + 5 * 9 + "<br>" + 5 + " " + "x" + " " + "10" + " "
     + "=" + " " + 5 * 10)
}
else{
document.write( number + " " + "x" + " " + "1" + " " + "=" + " " + number * 1 + "<br>" + number + " " + "x" + " " + "2" + " " + "=" + " " + number * 2 + "<br>" + number + " " 
+ "x" + " " + "3" + " " + "=" + " " + number * 3 + "<br>" + number + " " + "x" + " " + "3" + " " + "=" + " " + number * 3 + "<br>" + number + " " + "x" + " " + "4" + " "
 + "=" + " " + number * 4 + "<br>" + number + " " + "x" + " " + "5" + " " + "=" + " " + number * 5 + "<br>" + number + " " + "x" + " " + "5" + " " + "=" + " " + number * 
5 + "<br>" + number + " " + "x" + " " + "6" + " " + "=" + " " + number * 6 + "<br>" + number + " " + "x" + " " + "7" + " " + "=" + " " + number * 7 + "<br>" + number + " " 
+ "x" + " " + "8" + " " + "=" + " " + number * 8 + "<br>" + number + " " + "x" + " " + "9" + " " + "=" + " " + number * 9 + "<br>" + number + " " + "x" + " " + "10" + " "
 + "=" + " " + number * 10) }

document.write("<br>")
document.write("<br>")
document.write("<br>")

 var totalNumber = 300;

 var obtainedOfEng = +prompt("Enter Obtained marks of English")
 var obtainedOfScience = +prompt("Enter Obtained marks of Science")
 var obtainedOfPhysics = +prompt("Enter Obtained marks of Physics")

var PercentageOfStudent = (obtainedOfEng / 100)* 100;
var PercentageOfStudent1 = (obtainedOfScience / 100)* 100;
var PercentageOfStudent2 = (obtainedOfPhysics / 100)* 100;

document.write("<br>")
document.write("<br>")


 document.write("Subjects " + " Total Marks" + "Obtained Marks" + "Percentage")
 document.write("<br>")
 document.write( "English " + "100 " + " "  + obtainedOfEng +  "   "  + PercentageOfStudent + "%")
 document.write("<br>")
 document.write( "Science " + "100 " +  " " + obtainedOfScience + "    "  + PercentageOfStudent1  + "%")
 document.write("<br>")
 document.write( "Physics " + "100 " + " "+ obtainedOfPhysics + " " +  PercentageOfStudent2 + "%")*/







 //            CHAPTER 9-11 ( IF - ELSE)








//  var city = prompt("Enter city")
//  if ( city === "karachi"){
//      alert("welcome to city of lights")
//  }
//  else {
//      alert ( " It's not the city of light")
//  }


//  var nameOfPerson = prompt("Enter your name")
//  var gender = prompt("Enter your Gender")

//  if( gender === "male" ){
//      alert( "Good Morning Sir" ,nameOfPerson)
//      }  
//      else if (gender === "female") {
//         alert("Good Morning Maa'm", nameOfPerson)
    
//  }
//  else{
//      alert( "enter your gender properly")
//  }


// var trafficSignal = prompt("Enter color signal")

// if(trafficSignal === "red"){
//     document.write("Must stop")
// }
//     else if (trafficSignal === "yellow") {
//     document.write("Ready to move")
//     }
//     else if(trafficSignal === "green"){
//     document.write("Move now")
//     }

     
// var fuel = prompt("Enter remaining fuel in tank")
// if(fuel <= 0.25 ){
//     document.write("Please refuel the fuel in your car")
// }
// else if (fuel > 0.25){
//     document.write("Dont need to refill, It,s more than 0.25")
// }


//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// } 

// // given condition for a variable is true.

//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// } 


// // undefined 


//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// // condition 2 and 4 is true.


//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// // the cost is equal

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

//     // True

//     if("car" < "cat"){
//         alert("car is smaller than cat");
//         }
// car is smaller than cat.. because condition is true.


// var biology = +prompt("Enter marks of bio")
// var zoology = +prompt("Enter marks of zoology")
// var botany =  +prompt("Enter marks of botany")

// totalMarks = 300;

// obtainNumber = biology + zoology + botany;

// percentageInChart = (obtainNumber/totalMarks)*100;

// var gradeAPlus = "A-one" ; 
// var gradeA =  "A"; 
// var gradeB = "B"; 
// var lessThansixty = "Fail";



// var remarksAplus = "Excellent"
// var remarksA = "Good"
// var remarksB = "You need to improve"
// var remarksFail = "Sorry"


// if( percentageInChart >= 80){
    
//     document.write( "Total Marks is : " + totalMarks + "<br>" +  " Marks obtained is " + obtainNumber + "<br>" +  " percenatage is : " + percentageInChart + "%" + "<br>" + "Grade :" + gradeAPlus + "<br>" + "Remarks" + " " + remarksAplus)                                               
// }
// else if (percentageInChart >= 70){
//     document.write( "Total Marks is : " + totalMarks + "<br>" +  " Marks obtained is " + obtainNumber + "<br>" +  " percenatage is : " + percentageInChart + "%" + "<br>" + "Grade :" + gradeA + "<br>" + "Remarks"   + " "  + remarksA)
// }

// else if (percentageInChart >= 60){
//     document.write( "Total Marks is : " + totalMarks + "<br>" +  " Marks obtained is " + obtainNumber + "<br>" +  " percenatage is : " + percentageInChart + "%" + "<br>" + "Grade :" + gradeB + "<br>" + "Remarks"  + " "  + remarksB)
// }

// else if (percentageInChart < 60){
//     document.write( "Total Marks is : " + totalMarks + "<br>" +  " Marks obtained is " + obtainNumber + "<br>" +  " percenatage is : " + percentageInChart + "%" + "<br>" + "Grade :" + lessThansixty + "<br>" + "Remarks" + " " + remarksFail)
// }


// var number = 8;
// var guessNumber = +prompt("Guess number form 1-10")

// if(guessNumber == number){
//     document.write("Bingo Correct answer")
// }

// else if (guessNumber === ++number){
//     document.write("Close Enough to the correct answer")

// }



// var anyNumber = prompt("Enter any number")

// if(anyNumber % 3 == 0){
//     document.write("Number is divisble by three")
// }
// else{
//     document.write("Number cannot be divided by 3")
// }



// var evenOdd = prompt("Enter any number")

// if(evenOdd % 2 == 0){
//     document.write("Number is even")
// }
// else{
//     document.write("Number is Odd")
// }


// var temperature = prompt("Enter temperature of your city")

// if(temperature >= 40){
//     document.write("It's too Hot outside")
// }

// else if (temperature > 30){
//     document.write("The Weather today is normal")
// }

// else if (temperature > 20){
//     document.write("Today's weather is cool!!!")
// }

// else if (temperature > 10){
//     document.write("OMG!!! Today's weather is so cool!!")
// }


// var firstNumber = +prompt();
// var SecondNumber = +prompt();

// if(firstNumber <= 10 && SecondNumber <= 10){
//     document.write(firstNumber + SecondNumber)
// }
// else if (firstNumber <= 20 && SecondNumber <= 20){
//     document.write(firstNumber - SecondNumber)
// }
// else if (firstNumber <= 30 && SecondNumber <= 30){
//     document.write(firstNumber * SecondNumber)
// }
// else if (firstNumber <= 40 && SecondNumber <= 40){
//     document.write(firstNumber / SecondNumber)
// }
// else if (firstNumber <= 50 && SecondNumber <= 50){
//     document.write(firstNumber % SecondNumber)
// }


// var vowel = prompt("Enter any character") 
// var lowerVowel = vowel.toLocaleLowerCase()

// if(lowerVowel === "a" || lowerVowel === "e" || lowerVowel === "i" || lowerVowel === "o" || lowerVowel === "u"){
//     document.write("It's a Vowel")
// }
// else{
//     document.write("Its's a consonant")
// }


// var checkType = +prompt("Enter a number to check")

// if (checkType === 0 ){
//     document.write("number is zero")
// }
// else if ( checkType < 0){
//     document.write("It's a negative number")
// }
// else if ( checkType > 0){
//     document.write("Its a positive")
// }


// var password = "syedhammad123"

// var userPassword = prompt("Enter your password")

// var one = ""
// var two = null;

//  if(userPassword === one) {
//      document.write("Please enter your password")
//  }
//  else if (userPassword === password){
//      document.write("Correct")
//  }
// else if (userPassword !== password){
//     document.write("Incorrect Password")
// }


// var greeting;
// var hour = 13;
// if (hour > 18) {
// document.write(greeting = "Good day")
// }
// else{
// document.write (greeting = "Good evening")
// }


// var date = new Date();
// var hours = date.getHours()
// var minutes = date.getMinutes()
// // document.write(minutes)
// // document.write(hours)


// hoursInString = hours.toString()
// minutesInString = minutes.toString()
// var time = hoursInString + minutesInString
// // document.write(time)

// if (time >= 0000 && time < 1200){
//   document.write("Good Morning" + " " + time)
// }

// else if (time >= 1200 && time < 1900){
//   document.write("Good afternoon" + " " + time)

// }
// else if (time > 1900 && time < 2100){
//   document.write("Good evening" + " " + time )
// }

// else if( time >= 2100 && time < 2359){
//   document.write("Good Night" + " " + time )
// }


// ( CHAPTER 14-16) ARRAYS


// var studentName = [];
// var studentName = [,,,,,];

// var stringArray  = ["hammad","cricket","bat","pakistan"];
// var numberArray  = [1,2,3,4,5,6,7,8];
// var booleanArray = [true,false];
// var mixedArray = ["hammad",123,true,false,prompt()];
// var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","MPHIL","PHD"]

// for(var i = 0; i< qualifications.length; i++){
//   document.write(qualifications[i]+ "<br>")
// }


// var stuNames = ["Mikael","Talha","Abdullah"];
// var tMarks = [500];

// document.write("Score of " + stuNames[0] + " is 320 and percentage is 64%")
// document.write("<br>")
// document.write("Score of " + stuNames[1] + " is 230 and percentage is 46%")
// document.write("<br>")
// document.write("Score of " + stuNames[2] + " is 480 and percentage is 96%")



var colorNames = ["red" , "blue" , "green" , "orange" , "cyan" , "purple"]
// document.write(colorNames)

// var userColor = prompt("Enter which color do you want to add in start")

// colorNames.unshift(userColor)

// document.write(colorNames)


//colorNames.push(userColor)

//document.write(colorNames)


// colorNames.unshift("green","marjinda")
// document.write(colorNames)


// var poppedElement = colorNames.pop()
// document.write(colorNames)
// document.write(poppedElement)

// var firstElement = colorNames.shift()
// document.write(colorNames)
// document.write("<br>")
// document.write(firstElement)


// var deleteElement = prompt("at which pos you want to delete color")
// var userValue = prompt("How many you want to delete")

// var item =  colorNames.splice(deleteElement,userValue)

// document.write(item)

// document.write(colorNames)


// var userAdd = prompt("enter value you want to add")

// var addItem = colorNames.splice(2,0,userAdd)
// document.write(colorNames)


// var cityNames =["karachi", "lahore","new york","london","sydney"]

// var selectedCities = cityNames.slice(0,3)
// document.write(selectedCities)


// var arr = [" This "," is "," my ", " cat "]

// var newArr = arr.join()

// document.write(newArr)


// var parts = [" "]

// parts[0] = "keyboard"
// parts[1] = "mouse"
// parts[2] = "printer"
// parts[3] = "monitor"





// document.write(parts[0])
// document.write("<br>")
// document.write(parts[1])
// document.write("<br>")
// document.write(parts[2])
// document.write("<br>")
// document.write(parts[3])
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")

// var newParts = parts.shift()
// document.write(newParts)
// document.write("<br>")

// var second = parts.shift()
// document.write(second)

// document.write("<br>")

// var third = parts.shift()
// document.write(third)

// document.write("<br>")

// var fourth = parts.shift()
// document.write(fourth)






//     CHAPTER 17 - 20 ( ARRAYS AND LOOPS)




// var multiArr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]

// document.write(multiArr[0] + "<br>" + multiArr[1] + "<br>" + multiArr[2])


// for(var i = 1; i <=10; i++) {
//   document.write(i + "<br>")
// }



// var userNumber = +prompt("Enter a number to show its multiplication table")

// var tableLength = +prompt("Enter length multiplication table")

// for( var i = 1; i <= tableLength; i++){

//   result = userNumber * i;

//   document.write(userNumber + " " + "x" + " " + i + " " + "="  + " "  + result  + "<br>" )
  
// }


// var fruits = ["apple", "banana", "mango", "orange","strawberry"]

// for(var i = 0; i < 1; i++){
//   document.write("Element at index 0 is " + fruits[0] + "<br>" + "Element at index 1 is " + fruits[1] + "<br>" + "Element at index 2 is " + fruits[2] + "<br>" +"Element at index 3 is " + fruits[3] + "<br>" +"Element at index 4 is " + fruits[4] + "<br>" )
 
// }



// for ( var i = 1; i <= 10; i++){
//   document.write(i + "<br>")
// }


// for ( var i = 10; i >= 1; i--){
//   document.write(i + "<br>")
// }

// for ( var i = 0; i <= 30; i+= 2){
//   document.write(i + "<br>")
// }


// for ( var i = 1; i <= 30; i+= 2){
//   document.write(i + "<br>")
// }


// for ( var i = 2000; i <= 20000; i+= 2000){
//   document.write(i + "<br>")
// }


// var A = ["cake", "apple pie", "cookie", "chips", "patties"]



// var userItem = prompt("Enter a item you want to search")

// for ( var i = 0; i < A.length; i++){

//   if(userItem == A[i]){

//     alert("It's at index" +  " " + i)

//   }
//   else {
//     document.write("It's not in the list")
//   }
  
// }


// var arrayOfnum = [24,53,78,91,12]

// var userArrayNum = prompt("Enter any number")



//  if( userArrayNum == arrayOfnum[3] ){
//     document.write("The largest number is " + arrayOfnum[3])
//   }
//   else{
//     document.write("it's not")
//   }


// var arrayOfnum = [24,53,78,91,12]

// var userArrayNum = prompt("Enter any number")



//  if( userArrayNum == arrayOfnum[4] ){
//     document.write("The smallest number is " + arrayOfnum[4])
//   }
//   else{
//     document.write("it's not the smallest")
//   }
 


// for( var i = 5; i <= 100; i+=5 ){
//   document.write(i + "<br>")
// }





 




























