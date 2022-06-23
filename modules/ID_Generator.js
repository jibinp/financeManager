function userAutoModeSelectorID() {
  var checkBox = document.getElementById("selectUserAutoID");
  var text = document.getElementById("displayUserAutoID");
  if (checkBox.checked == true){
    console.log("Auto Mode");
    displayUserAutoID.innerHTML = "Auto Mode Active";
  } else {
    console.log("User Mode");
     displayUserAutoID.innerHTML = "User Mode Activte";
  }
  

  
}
