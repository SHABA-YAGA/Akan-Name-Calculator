function fetchName(){

var MM = document.querySelector("#month").value;
var YYYY = document.querySelector("#year").value;
var DD = document.querySelector("#day").value;
var gender = document.querySelector('input[name="gender"]:checked').value;
if ((MM=="") || (isNaN(MM) || (MM < 0) || (MM>12))) {
alert('Invalid Month! Please enter correct Month');
return;
}

if ((YYYY=="") || (isNaN(YYYY) || (YYYY < 0))) {
alert('Invalid Year! Please enter correct Year');
return;
}

if ((DD=="") || (isNaN(DD) || (DD < 0) || (DD>31))) {
alert('Invalid Day of the Month! Please enter correct Day of the Month');
return;
}
