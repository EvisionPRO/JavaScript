//Exercise #01

//create container with string and array
var a = ('w3resource');
var b = [2,4,0];

//function checking is array
function is_array(arr) {
    
    
    return Array.isArray(arr);
    
}

//checking string and array

console.log('--Exercise 01--');
console.log(is_array(a));

console.log(is_array(b));


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
