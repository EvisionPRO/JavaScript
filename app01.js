// Exercise #03


function getDataWeb(w){

    var input = w.split("");
    
    var output = input.sort().join("");
    
    
   return console.log('My Output is: ' + output); 
    
}

//I call that function
getDataWeb('webmaster');

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
//calling function 
console.log(upperCase('the quick brown fox'));

// Exercise #05

function longestWord(word) {
    
    //Split sentence
    var word1 = word.split(' ');
    var word2 = word1[0];
    
    // loop thought array
    for ( var x = 1; x < word1.length; x++ ) {
    
        //looking for a longest word
        if( word2.length < word1[x].length) {
            
            word2 = word1[x];
        }
    }
    
    return word2;
}

// log results
console.log('The longest word is: ' + longestWord('Web Development Tutorial'));

// Exercise #06   

function lowestGreates (myArr){
    
    var myNumbers = myArr.sort();
    
    return myNumbers[1] + ', ' + myNumbers[myNumbers.length - 2];
    
}

console.log('My Output is: ' + lowestGreates([3,4,5,2,1]) + '.');


// Exercise #07 

function myFactor(num){
        
    myNumber = [];
    
    for ( var i = 1 ; i <= num ; i++) 
        
        if ( num % i === 0 ){
            
            myNumber.push(i);
        }
    
    
    return myNumber;
}

console.log(myFactor(15));
console.log(myFactor(16));
console.log(myFactor(17));


// Exercises #08



function amountTocoins(amount, coins)   
{  
 if (amount === 0) {  
    
     return [];  

    } else  {
       
     if (amount >= coins[0])  {
         
        left = (amount - coins[0]);  
        
         return [coins[0]].concat( amountTocoins(left, coins) );  
        
     } else {  
         coins.shift();  
         return amountTocoins(amount, coins); 
        }  
    }  
}   
console.log(amountTocoins(46, [25, 10, 5, 2,1]));  

