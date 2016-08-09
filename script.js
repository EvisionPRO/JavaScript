//BASIC SECTION

//Exercise #01

//create new date
var date = new Date();

//define weeks days
var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//checking day of the week
var today = date.getDay();
var todayIs = week[today];

//taking information about time
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

//create function to check either hour is AM or PM
var hours = (function(){
    
    //create empty container
    var amPm = ""
    
    //define conditions
    if (hour < 12) {
    
    //passings results    
        amPm += hour + ' AM : ';
    } else {
        
        amPm += (hour - 12) + ' PM : ';
    }
    //present results
    return amPm;
//close function and call function
})();



//Exercise #02

//Print window function
function printWindow(){
    return window.print();
}

//Exercise #03

//Define year, moth, day
var year = date.getFullYear();
var month = date.getMonth();
var months = [1,2,3,4,5,6,7,8,9,10,11,12];
var day = date.getDate();

//Create container with expected output
var mdy = months[month] + '-' + day + '-' + year;
var mmddyy = months[month] + '/' + day + '/' + year;

var dmy = day + '-' + months[month] + '-' + year;
var ddmmyy = day + '/' + months[month] + '/' + year;


//Exercise #03


//Exercise #05

//Create empty container
var januarySunday = '';

//Looping 
for (var year = 2014 ; year <=2050 ; year++) {
    
    //Create date January 1st
    var d = new Date( year, 0, 1);
    
    //define condition
    if ( d.getDay() === 0)
    
    //passing result into empty container
     januarySunday += year + ', ';
        
}



//Exercise #06

//create function
function quessNumber() {
    
    //create container with random number <10
    var random = Math.random() * 10;
    var yourRandom = Math.floor(random);

    //empty container
    var textNumber = '';
    
    //taking number from input
    var x = document.getElementById("form").value;
    
        //checking conditions
        if ( x < 0 || x == '' || x > 10) {

            textNumber += 'Ups... Please provide number between 1 - 10';
        } else if ( x == yourRandom ) {
            
            textNumber += 'Good Work! I\'ve got ' + yourRandom + ' too.';
        } else {
            
            textNumber += 'Not matched. My number is ' + yourRandom;
        }
    //return results
    return document.getElementById("guessNumber").innerHTML = textNumber;
}

//Exercise #08

    //create function multiply
    function multiplyNumbers (){

        //taking number 1
        num1 = document.getElementById('firstNumber').value;
        
        //taking number 2
        num2 = document.getElementById('secondNumber').value;

       //sending results
        document.getElementById('results').innerHTML = num1 * num2;

    }
        //create divide function
    function divideNumbers (){
        
        //taking number 1
        num1 = document.getElementById('firstNumber').value;
            
        //taking number 2
        num2 = document.getElementById('secondNumber').value;

       //sending rsults
        document.getElementById('results').innerHTML = num1 / num2;
            
        }

// RECURSION

// Exercise #01

//create function and passing two numbers
function myGCD(num01,num02) {
    
    //create container
    var gcd;
    
    //starting loop, and system is gong to use bigger number
        for ( i = 0; i <= Math.max(num01,num02); i++){
            
            //define criteria
            if ( num01 % i === 0 && num02 % i === 0) {
                
                //passing results
                gcd = i;
            }
            
        }
    
    //calling gcd
    return '01. The greatest common divisor for: ' + num01 +' and ' + num02 + ' is: ' + gcd;
}

//create container for with numbers to
var newGCD = myGCD(45,120);


//Exercise R02

//create function
function getRange(num01,num02) {
    
    //create container
    var cont = [];
    
        //looping range with criteria
        for ( i = num01 +1; i < num02; i++) {
            //putting result to our container
            cont.push(i);
        }
    //show results
    return '02. Between ' + num01 + ' and ' + num02 + ' we have - ' + cont;
}
//create container with range
var myRange = getRange(2,9);


//Exercise #03

//create container with function
var compute = function(array) {
    
    var myArr = 0;
        
        for ( i = 0; i <= array.length; i++) {
            
            myArr += i;
        }
    
    return '03. Compute the sum is: ' + myArr;
}


//Exercise #04

//create function


//create function which taking number from input and passing to even function
function evenOrOdd(number) {
        //create empty container
        var myArr = '';
        
        //checking criteria for even number
        if (number % 2 === 0) {
            //passing result if is even number
            myArr += 'Number ' + number + ' is even number!!!';
            
            }  else {
            //passing if not 
            myArr += 'I\'m sorry, number ' + number + ' is odd number';
            }
    //log results
    return document.getElementById('evenOrNot').innerHTML = myArr;
};


//create function to take data from input
function getNumber() {
    
    var arr = document.getElementById('even').value;
    
    //calling function 
    return evenOrOdd(arr);
}



//Exercise #05

//create sort function 
function arrSort(arr) {
    
    //create container and sorting arr
    var myArr = arr.sort(function(a,b) {
        
        //return ascending sort 
        return a-b;
    });
    
    return myArr;
    
}


//Function

//Exercise F01

//create function 
 function myOutput(n)  {  
    
          n = n + "";  
 
     //Convert into string, reverse and convert back
     return n.split("").reverse().join(""); 

 }


//Exercise F02

//create a function to generate all combination
function substrings(str1)  {  
    
    //create container, passing str1 and split to string
    var array1 = str1.split("");
    
    //empty container
    var combi = [];  
    
    //empty container
    var tmp= "";  
    
    //create one more container
    var slent = Math.pow(2, array1.length);  

    //looping 
    for (var i = 0; i < slent ; i++)  {
        
        tmp = "";  
        
        //lopping
        for ( var j = 0 ; j < array1.length ; j++ ) {
            
            //define condition
            if (i & Math.pow( 2, j )){
                
                //passing result into container
                tmp += array1[j];  
                
            }  
        } 
        
        //define condition if not empty
        if (tmp !== "")  {
            
            //passing result into container
            combi.push(tmp); 
            
        }  
    }  
//return results
return 'My Output: ' + combi.join(", ");  
}


// Exercise #03

//create a function
function getDataWeb(w){
    
    //create container and split string
    var input = w.split("");
    
    //create container and sorting 
    var output = input.sort().join("");
    
    //return results
   return 'My Output is: ' + output; 
    
}



// Exercise #04

function upperCase(string) {
    
    //I split string and put in array
    var str1 = string.split(' ');
    
    // I created new empty array 
    var str2 = [];
    
    //checking each word in array
    for (var x = 0 ; x < str1.length ; x++){
        
        //convert first letter to uppercase 
        str2.push(str1[x].charAt(0).toUpperCase() + str1[x].slice(1));
    }
    //convert array to string
    return str2.join(' ');
    
}

// Exercise #05

function longestWord(word) {
    
    //Split sentence
    var word1 = word.split(' ');
    var word2 = word1[0];
    
    // loop thought array
    for ( var x = 1; x < word1.length; x++ ) {
    
        //looking for a longest word
        if( word2.length < word1[x].length) {
            
            //passing longest word
            word2 = word1[x];
        }
    }
    //return results
    return word2;
}


// Exercise #06   

//create function
function lowestGreates (myArr){
    
    //puting numbers into container
    var myNumbers = myArr.sort();
    
    //return two numbers
    return myNumbers[1] + ', ' + myNumbers[myNumbers.length - 2];
    
}



// Exercise #07 

function myFactor(num){
    
    //create empty container
    myNumber = [];
    
    //lopping 
    for ( var i = 1 ; i <= num ; i++) 
        
        //looking for positive integer
        if ( num % i === 0 ){
            
            //adding to container
            myNumber.push(i);
        }
    //return result
    return myNumber;
}


// Exercises #08

//create function
function amountTocoins(amount, coins) {

//checking if amount is 0
 if (amount === 0) {  
    
     return [];  

    } else  {
    
    //define criteria
     if (amount >= coins[0])  {
         
        //create container  
        left = (amount - coins[0]);  
        
         //return result
         return [coins[0]].concat( amountTocoins(left, coins) );  
        
     } else {  
         coins.shift();  
         return amountTocoins(amount, coins); 
        }  
    }  
}   


//Exercises #09
function howManyLetters(str1, letter) {
    
    //creating a new container
    var myStr1 = 0;
    
    //looping throung input string
    for (var i = 0; i < str1.length; i++){
                
        //I'm taking first character and compare with letter 
        if( str1.charAt(i) === letter) {
            
            //adding results to container
            myStr1 += 1;
        }
    
    }
    //return results
    return 'My output is: ' + myStr1;
}


//Exercises #10

//creating function
function checkLetters(string) {

    //empty result contaner
    var results = '';
    
    //addition container
    var cont = 0;
    
    //Split a string into an array
    var str1 = string.split('');
        
    //looping thought array
    for (var i = 0; i < str1.length; i++) {
        
        cont = 0;
        
        //One more time looping throught array
        for (var j = 0; j < str1.length; j++){
            
            //compare two results
            if ( str1[i] === str1[j]) {
                
                //adding results into temp container
                cont += 1;
            }
        }
    if ( cont < 2 ) {
        
        //I've got results when character is one time
        results += str1[i];
        
        //I finish when function found one
        break;
        
        }
    }
    //present result
    return results;
}



//Exercise #11

//Create function
function Longest_Country_Name(country_name)  {  
  
    return country_name.reduce(function(lname, country) {  
        
        return lname.length > country.length ? lname : country; 
       
        },"") ;   
}


//Exercise #12
function myFunctionIs() {
    
    return console.log('My function name is: ' + arguments.callee.name);
    
}

myFunctionIs();



//Conditionals File

// Exercise C01


//function is taking input data 
function checkMyNumbers(){
    
    var a = document.getElementById('firstNum').value;
    var b = document.getElementById('secondNum').value;
    
    var c = "";
    
     //I check three conditions 
    if ( parseInt(a,10) > parseInt(b,10) ) {
        
        //pasing result when a > b
        c = "The larger number is: " + a;
   
    } else {
        
         if ( parseInt(a,10) < parseInt(b,10) ) {
            //passing results when b > a
            c = "The larger number is: " + b; 

            } else {
                
            //passing results when equal
            c = "The numbers are equal";
        }
    }
    //printing result
    return document.getElementById('twoIntegers').innerHTML = c;
}

// Exercise #02



//create function    
function myDisplay(num1,num2,num3) {
        
    //create empty container
       var a = '';
        
        //create containers with num1,2,3
        var num1 = parseInt(num1);
        var num2 = parseInt(num2);
        var num3 = parseInt(num3);
        //multiplication of numbers
        var item = num1 * num2 * num3;
        
        //define condition and passing resylt into empty container
        (item > 0) ? a = '02. + ': a = '02. - ';
       //log results
        return console.log(a); 
    
};

//call function with three numbers
myDisplay(3,-7,2);

//Exercise #03

//Create a function
function sortNumbers(numbers) {
    
    //sorting array
    var a = numbers.sort(function(a,b) {
        return b-a;
    });
    //printing results
    return 'Here is my result: ' + String(a);
}


//Exercise #04

//Create a function
function largestNumber(num) {
    
    //create a container and putting the largest number
    var a = Math.max(...num);
    
    //print results
    return 'The largest number form that array i: ' + a;
}


//Exercise #05


var evenOrOdd = '';
//Define for loop
for ( i = 0; i <= 15; i++ ) {
    
    //Check three conditions and log results
    if ( i == 0 ) {
        
        evenOrOdd += i + ' is even, ';
    } else if (i % 2 == 0 ){
        
       evenOrOdd += i + ' is even, ';

    } else {
        evenOrOdd += i + ' is odd, ';
    }
}

//Exercise #06

var fizzBuzz = '';

//Define conditions
for ( var y = 0; y <= 100; y++ ) {
    
    //Multiply by three anf five
    if ( y % 3 == 0 && y % 5 == 0 ) {
        fizzBuzz += y + ' FizzBuzz <br />';
    
    //Multiply by three
    } else if ( y % 3 == 0 ) {
        fizzBuzz += y + ' Fizz <br />';
    
    //Multiply by five
    } else if ( y % 5 == 0 ){
        fizzBuzz += y + ' Buzz <br />';
        
    //Other
    } else {
        fizzBuzz += y + '<br />';
    }
    
}


//Exercise #07

//Create empty container
var multiply = "";

    //Create loop
    for ( i = 0; i <= 1000; i++){
        
        //Define conditions
        if ( i % 3 == 0 && i % 5 == 0) {
            
            //Pushing reasults into empty container
            multiply += i + ', ';
        }
        
    }


// Exercise #08

//Create container 
    
console.log('Exercise C08')

//create container
var be = '';
    
//Create for loop
for ( var i = 1 ; i <= 6; i++ ){

    for ( var y = 1 ; y < i ; y++){

    //log results and push into b container
    be += '*';

    }
    //log rsults
   console.log(be);
    be = '';

}


//Array File

//Exercise #01

//create container with string and array
var ae = ('w3resource');
var eb = [2,4,0];

//function checking is array
function is_array(arr) {
        
    return Array.isArray(arr); 
}

//Exercise #02

//create function
function array_Clone(arr) {
    
    //clone array
    return arr.slice(0);
}

//log and call function with array
console.log('--Exercise 02--');
console.log(array_Clone([1, 2, 4, 0]));

console.log(array_Clone([1, 2, [4, 0]]));


//Exercise #03

//create function
function first(arr,n) {
    
        //define conditions
        if (arr == null)
            return void 0;
    
        if (n == null)
            return arr[0];
    
        if (n < 0)
            return [];
    
    //return results
    return arr.slice(0,n);
}

console.log('--Exercise 03--');
console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

