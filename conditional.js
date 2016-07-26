// Exercise #01

//Create function with two parameters
function checkInter(num01,num02) {
    
    //Empty container
    var a = '';
    
    //I check three conditions 
    if ( parseInt(num01) > parseInt(num02) ) {
        
        a = "01. The larger number is: " + num01;
   
    } else {
        
         if ( parseInt(num01) < parseInt(num02) ) {
        
                    a = "01. The larger number is: " + num02; 

                    } else {

                    a = "01. The numbers are equal";
                }
    }
    //return our container with a result
    return a;
}

//function is taking input data 
function checkInput(){
    
    var a = document.getElementById('firstNumber').value;
    var b = document.getElementById('secondNumber').value;
    
    //passing input data into the function
    return console.log(checkInter(a,b));
}

// Exercise #02


var sampleNum = (function(){
    
    return function(num1,num2,num3) {
        
        var num1 = parseInt(num1);
        var num2 = parseInt(num2);
        var num3 = parseInt(num3);
        var item = num1 * num2 * num3;
        
        return (item > 0) ? '02. + ': '02. - ';
        
    }
    
})();

console.log(sampleNum(-3,4,2));

//Exercise #03

//Create a function
function sortNumbers(numbers) {
    
    //sorting array
    var a = numbers.sort();
    
    return '03. Here is my result: ' + String(a);
}

//log a function and passing array
console.log(sortNumbers([0,-1,4]));


//Exercise #04

//Create a function
function largestNumber(num) {
    
    //create a container and putting the largest number
    var a = Math.max(...num);
    
    //present results
    return '04. The largest number form that array i: ' + a;
}
//log function and passing an array
console.log(largestNumber([-5, -2, -6, 0, -1]));


//Exercise #05

//Define for loop
for ( i = 0; i <= 15; i++ ) {
    
    //Check three conditions and log results
    if ( i == 0 ) {
        
        console.log(i + ' is even');
    } else if (i % 2 == 0 ){
        
       console.log(i + ' is even');

    } else {
        console.log(i + ' is odd');
    }
}
console.log(' ')
console.log('------------------------')
console.log(' ')

//Exercise #06

//Define conditions
for ( var y = 0; y <= 100; y++ ) {
    
    //Multiply by three anf five
    if ( y % 3 == 0 && y % 5 == 0 ) {
        console.log( y + ' FizzBuzz');
    
    //Multiply by three
    } else if ( y % 3 == 0 ) {
        console.log( y + ' Fizz');
    
    //Multiply by five
    } else if ( y % 5 == 0 ){
        console.log( y + ' Buzz');
        
    //Others
    } else {
        console.log(y);
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

console.log('07. Multiply 3 and 5 under 1000:');
console.log(multiply);


// Exercise #08

//Create container 
var pattern = (function(number){
    
    b = '';
    
    //Create for loop
    for ( var i = 0 ; i < number; i++ ){
        
        //log results and push into b container
        console.log( b += '* ');
    }
    
//call function with (5) parametr    
})(5);








