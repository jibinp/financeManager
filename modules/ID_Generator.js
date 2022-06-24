var modeSelectorID = "user";
var myTransactionIDValue = "000";


//window.onload = defaultModeForIDChecker();

function defaultModeForIDChecker()
		{
    //console.log("User Mode");
    displayUserAutoID.innerHTML = "User Mode Activte";
		modeSelectorID = "user";
		transactionIDUser();
  	}


function userAutoModeSelectorID() 
	{
	var checkBox = document.getElementById("selectUserAutoID");
  var text = document.getElementById("displayUserAutoID");
	
	
  if (checkBox.checked == true)
		{
    //console.log("Auto Mode");
    displayUserAutoID.innerHTML = "Auto Mode Active";
		modeSelectorID = "auto";
		transactionIDAuto();
  	} 
	else 
		{
    defaultModeForIDChecker();
  	}
	}
 
 function printMyTransactionIDValue()
 	{
	document.getElementById('printTransactionID').innerHTML
                ="Transaction Id : " + myTransactionIDValue;
	}
 
 function transactionIDUser()
		{
		
		
		
		myTransactionIDValue = "00_User";
		printMyTransactionIDValue();
		}
		
		
function transactionIDAuto()
		{
		myTransactionIDValue = "00_Auto";
		printMyTransactionIDValue();
		}
