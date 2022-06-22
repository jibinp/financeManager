const weekdayInWords = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const monthInWords = ["January","February","March","April","May","June","July","August","September","October","November","December"];


function RTCInit()
    {
    currentTimeLocal = new Date();
    let timeLocal =  document.getElementById('localTimeDiv');
		//displayClock1();
   /* function displayClock1(){
        utc.innerHTML = formatDate(getUtcValue(new Date()));
        setTimeout(displayClock1, 1000); 
        }*/
    timeLocal.innerHTML = currentTimeLocal;

    let timeToronto =  document.getElementById('torontoTimeDiv');
    timeToronto.innerHTML = convertTZ(currentTimeLocal, "America/Toronto");
		

    let timeUTC =  document.getElementById('utcTimeDiv');
    timeUTC.innerHTML = convertTZ(currentTimeLocal, "GMT");

    let timeIndia =  document.getElementById('indianTimeDiv');
    timeIndia.innerHTML = convertTZ(currentTimeLocal, "Asia/Calcutta");


           
    }


    function convertTZ(date, tzString) 
        {
        rtnVal = new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString})); 
        myTime = changeToMyformat(rtnVal);
        return myTime;
        }
    

    function changeToMyformat(timeInput)
        {
        YYYY = timeInput.getFullYear();
				MM = (timeInput.getMonth())+1;
				MMInWords = monthInWords[MM-1];
				DD = timeInput.getDate();
				day = (timeInput.getDay())+1;
				dayInWords = weekdayInWords[day-1];
				fullDate = dayInWords + ", " + YYYY + " " + MMInWords + " " + DD;
				
				hours = timeInput.getHours();
				minutes = timeInput.getMinutes();
				seconds = timeInput.getSeconds();
				ampm = IsAMorPM(hours);
				
				fullTime = digits2TwoString(fn24to12(hours)) + ":" + 
				digits2TwoString(minutes) + ":" +
				digits2TwoString(seconds) + " " + ampm;
				
				console.log(fullDate + "\n" + fullTime);
        }
				
				
	function digits2TwoString(st1)
  	{
  	rtnStr = st1 < 10 ? ("0" + st1) : ("" + st1)
 		return rtnStr;
  	}
		
		
function IsAMorPM(timeToConvert)
	{
  ampmVal = (timeToConvert < 12) ? "AM" : "PM";
    return ampmVal;
	}
	
function fn24to12(timeToConvert)
		{
	 	let returnValue = 0;

  	if(timeToConvert < 13)
  		returnValue = timeToConvert;
  	else
   		returnValue  = (timeToConvert - 12);
			
		if(returnValue == 0 )
			returnValue = 12;
		
		
		return returnValue;	
  	}
