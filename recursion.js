
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

//log function with two numbers
console.log(myGCD(45,120));

//Exercise #02

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
//log function with range
console.log(getRange(2,9));

//Exercise #03

var compute = function(array) {
    
    var myArr = 0;
        
        for ( i = 0; i <= array.length; i++) {
            
            myArr += i;
        }
    
    return '03. Compute the sum is: ' + myArr;
}

console.log(compute([1,2,3,4,5,6]));

//Exercise #04

//create function
function even(number) {
        
        //checking criteria for even number
        if (number % 2 === 0) {
            //log if is even number
            console.log('04. ' + number + ' is even number!!!');
            
            }  else {
            //log if not 
                console.log('04. I\'m sorry, this is odd number');
                
            }
};

//create function which taking number from input and passing to even function
function getNumber() {
    
    var arr = document.getElementById('even').value;
    
    return even(arr);
}

//Exercise #05

function arrSort(arr) {
    
    var myArr = arr.sort(function(a,b) {
        
        return a-b;
    });
    
    return myArr;
    
}

console.log(arrSort([34,7,23,32,5,62]));

function mergeSort(array) {
    
    var middle = Math.floor(array.length / 2),
        left = array.slice(0,middle),
        right = array.slice(middle),
        merge = function(left,right) {
            
            var arry = [];
            
            while (left.length > 0 && right.length > 0) {  
                    arry.push((left[0] <= right[0]) ? left.shift() : right.shift());  
                };
            
            
            return arry.concat(left).concat(right);
        };
    
    return merge(left,right);
};


console.log(mergeSort([34,7,23,32,5,62]));







