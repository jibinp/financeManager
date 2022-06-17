const weekdayInWords = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const monthInWords = ["January","February","March","April","May","June","July","August","September","October","November","December"];



function userAutoMode()
  {
   mode = "user";
   
  if(mode = "user")
    {
    dateUser();
    timeUser(); 
    }
  else if(mode = "auto")
    {

    }
  else 
    {
      //throw error
    }
  }

function generateDateTime()
  {
  userAutoMode();
  myDate = (
    yearOfTransaction + " " + 
    monthOfTransactionInWord + " " +
    digits2TwoString(dateOfTransaction) + ", " +
    dayOfTransactionInWord  
    );

  myTime = (
    digits2TwoString(hourOfTransaction12) + ":" + 
    digits2TwoString(minuteOfTransaction) + ":" + 
    digits2TwoString(secondOfTransaction) + " " + 
    AmPmOfTransaction
    );

  myDateTime = myDate + " - " + myTime;

  testDisplay(myDateTime, "showTransactionDateTime");
  }

function generateID()
  {
  userAutoMode();
  yearInID = yearOfTransaction-2000; 
  monthInID = digits2TwoString(monthOfTransactionInNum);
  dateInID = digits2TwoString(dateOfTransaction);
  dayInID = "0" + ((dayOfTransactionInNum+1));

  hourInID = digits2TwoString(hourOfTransaction24);
  minuteInID = digits2TwoString(minuteOfTransaction); 
  secondInID = digits2TwoString(secondOfTransaction);

  transactionId = yearInID +  monthInID + dateInID + dayInID + hourInID + minuteInID + secondInID + "fm";

  testDisplay(transactionId, "showTransactionID");
  generateDateTime();
  }


function dateUser()
	{
  let userDateVal = document.getElementById("transactionDateUser").value ;
  yearOfTransaction = Number(userDateVal.substring(0,4));
  monthOfTransactionInNum = Number(userDateVal.substring(5,7));
  monthOfTransactionInWord = monthInWords[monthOfTransactionInNum-1];
  dateOfTransaction =Number(userDateVal.substring(8,10));
  dayOfTransactionInNum = ((new Date(yearOfTransaction + "/" + monthOfTransactionInNum + "/" +  dateOfTransaction)).getDay()); 
  dayOfTransactionInWord = weekdayInWords[dayOfTransactionInNum];
  } 

function timeUser()
	{
  let userTimeVal = document.getElementById("transactionTimeUser").value ;
  hourOfTransaction24 = Number(userTimeVal.substring(0,2));
  hourOfTransaction12 = fn24to12(hourOfTransaction24);
  minuteOfTransaction = Number(userTimeVal.substring(3,5));
  secondOfTransaction = Number(userTimeVal.substring(6,8));
  AmPmOfTransaction = IsAMorPM(hourOfTransaction24);
  } 


function testDisplay (testDisplayValue, idForDisplay)
	{
  document.getElementById(idForDisplay).innerHTML = testDisplayValue; 
  } 
 
 function globalDisplay()
 	{
  displayValue =  (
	yearOfTransaction + " " + 
  monthOfTransactionInWord + " " +
  digits2TwoString(dateOfTransaction) + ", " +
  dayOfTransactionInWord  
  );
  
  document.getElementById("demo").innerHTML = displayValue;
  }
 	
 
function digits2TwoString(st1)
  {
  if(st1 < 10)
 		return ("0" + st1);   
      else 
    return ("" + st1);
  }
  
function fn24to12(timeToConvert)
	{
	 let returnValue = 0;

  if(timeToConvert < 13)
  	returnValue = timeToConvert;
  else
   	return (timeToConvert - 12);
		
	if(returnValue == 0 )
		returnValue = 12;
		
		
	return returnValue;	
  }


function IsAMorPM(timeToConvert)
	{
  if(timeToConvert < 12)
    return "AM";
  else
   	return "PM";
  }

   
  
  
  
  
  /*function ID_Generator() 
    {
        let myID = document.getElementById("transactionDate").value ;
        myID = ""+
        myID[2] + myID[3] + myID[5] + myID[6] + myID[8] + + myID[9];
      
        
    //const new_ID = new Date(); 

    let yearIn_Id = digits2TwoString(new_ID.getFullYear()-2000); 
    let monthIn_ID = digits2TwoString(new_ID.getMonth()+1); 
    let dateIn_ID = digits2TwoString(new_ID.getDate());
    let dayIn_ID = digits2TwoString((new_ID.getDay()+1)); 
    let datePartIn_ID = yearIn_Id + monthIn_ID + dateIn_ID + dayIn_ID; 

    let hourIn_ID = digits2TwoString(new_ID.getHours()); 
    let minuteIn_ID = digits2TwoString(new_ID.getMinutes());
    let secondIn_ID = digits2TwoString(new_ID.getSeconds());
    let timePartIn_ID = hourIn_ID + minuteIn_ID + secondIn_ID; 


    let UTCdiffIn_Id = 0; 



    let myID =datePartIn_ID + timePartIn_ID + UTCdiffIn_Id; 


    
    
    

    }*/


    
