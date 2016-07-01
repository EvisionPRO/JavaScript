
//Define week days
var today = new Date();

var day = today.getDay();

var week = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

//define time

var hour = today.getHours();

var min = today.getMinutes();

var sec = today.getSeconds();

var AmPm = (hour >= 12)? " PM ":" AM ";  
hour = (hour >= 12)? hour - 12: hour;  


