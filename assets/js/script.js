/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function multiplyBy()
{
        num1 = document.getElementById("length").value;
        num2 = document.getElementById("width").value;
        var num3 = .35;
        var esitmate = num1 * num2 * num3;
        document.getElementById("result").innerHTML = esitmate.toFixed(2);

        if (isNaN(num1) || isNaN(num2)) 
  {
  	document.getElementById("result").innerHTML = 0.00;
    alert("Use valid numbers");
    return false;
  }

  function checkEmail() {

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
}
