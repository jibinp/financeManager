
const weekdayInWords = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const monthInWords = ["January","February","March","April","May","June","July","August","September","October","November","December"];

document.onload = RTCInit();

function RTCInit()
    {
		

    liveClockLocal();
	liveClockToronto();
    liveClockUTC();
	liveClockIndia();	        
    }


//Local real time Clock module
	function liveClockLocal()
		{
		let timeLocal =  document.getElementById('localTimeDiv');
		localClock();
		function localClock()
			{
			timeLocal.innerHTML = convertTZ(new Date());
			setTimeout(localClock, 1000); 
			}
		}

//Toronto real time Clock module
	function liveClockToronto()
		{
		let timeToronto =  document.getElementById('torontoTimeDiv');
		torontoClock();
		function torontoClock()
			{
			timeToronto.innerHTML = convertTZ(new Date(),"America/Toronto");
			setTimeout(torontoClock, 1000); 
			}
		}
		
//UTC real time Clock module	
	function liveClockUTC()
		{
		let timeUTC =  document.getElementById('utcTimeDiv');
		gmtClock();
		function gmtClock()
			{
			timeUTC.innerHTML = convertTZ(new Date(),"GMT");
			setTimeout(gmtClock, 1000); 
			}
		}

//Indian real time Clock module
	function liveClockIndia()
		{
		let timeIndia =  document.getElementById('indianTimeDiv');
		indianClock();
		function indianClock()
			{
			timeIndia.innerHTML = convertTZ(new Date(),"Asia/Calcutta");
			setTimeout(indianClock, 1000); 
			}
		}


    function convertTZ(date, tzString) 
        {
        rtnVal = new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString})); 
        myTime = changeToMyformat_1(rtnVal,tzString);
        return myTime;
        }
    

    function changeToMyformat_1(timeInput, tZVal)
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
		
		fullDateTime = fullDate + ", " + fullTime;

		
		let timeZonePrint = ""
		timeZonePrint = getMyTimeZone(tZVal);
		
		fullDateTime_1 = 
			fullTime + ", " + 
			YYYY + " " + MMInWords + " " + DD + ", " + 
			dayInWords + timeZonePrint;

		return fullDateTime_1;
		//return timeInput;
        }
				
	
	function getMyTimeZone(tZInForFn)
		{
		let tZrtnVal = "";

		if(tZInForFn == undefined)
			{
				tZrtnVal =(new Date() .toLocaleDateString('en-US', {
			day: '2-digit',
			timeZoneName: 'long',
		  })
		  .slice(4));
		  return ( " (" + tZrtnVal + ")");
		} 
		//timeZone = (timeInput.toString().match(/\((.*)\)/).pop());

		/*else if(tZInForFn == "America/Toronto")
			{
				tZrtnVal = "UTC-4:00";
		} 

		else if(tZInForFn == "Asia/Calcutta")
			{
				tZrtnVal = "UTC+5:30";
		} 
		
		else if(tZInForFn == "GMT")
			{
				tZrtnVal = "UTC+0:00";
		} 

		else if(tZInForFn == "Asia/Calcutta")
			{
				tZrtnVal = "UTC+5:30";
		} */


		  return tZrtnVal;
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
