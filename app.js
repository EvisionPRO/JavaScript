
//First exercises - define week days
var today = new Date();

var day = today.getDay();

var week = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

//define time

var hour = today.getHours();

var min = today.getMinutes();

var sec = today.getSeconds();

var AmPm = (hour >= 12)? " PM ":" AM ";  
hour = (hour >= 12)? hour - 12: hour;  

//print current window

function printWindow(){
    window.print();
}

//current date

var year = today.getFullYear();

var oneMonth = today.getMonth();

var month = [1,2,3,4,5,6,7,8,9,10,11];

var date = today.getDate();

var date01 = month[oneMonth] + '-' + date + '-' + year;

var date02 = month[oneMonth] + '/' + date + '/' + year;

var date03 = date + '-' + month[oneMonth] + '-' + year;

var date04 = date + '/' + month[oneMonth] + '/' + year;


//05 Sunday January 01 between 2014 and 2050

 for ( year = 2014; year <= 2050; year++){
    
    var d = new Date(year, 0, 1);

    if ( d.getDay() === 0)
            
      console.log('1st January is being a Sunday - ' + year);
                 
};


    




