//Exercises #01
function howMany(str1, letter) {
    
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
    
    return '01. My output is: ' + myStr1;
}


console.log(howMany('w3resource.com', 'o'));


//Exercises #02

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
//I log my function
console.log('02. Here is my first not repeated character: ' + checkLetters('abacddbec'));


//Exercise #03

//Create function
function Longest_Country_Name(country_name)  {  
  
    return country_name.reduce(function(lname, country) {  
        
        return lname.length > country.length ? lname : country; 
       
        },"") ;   
}
//log result
console.log('03. The longest name is: ' + Longest_Country_Name(["Australia", "Germany", "United States of America"]));  


function myFunction() {
    
    console.log('04. My function name is: ' + arguments.callee.name );
    
}

myFunction();