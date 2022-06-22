function RTCInit()
    {
    currentTimeLocal = new Date();
    let timeLocal =  document.getElementById('localTimeDiv');
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
        changeToMyformat(rtnVal);
        return rtnVal;
        }
    

    function changeToMyformat(timeInput)
        {
        console.log(timeInput.getFullYear());
        }

   