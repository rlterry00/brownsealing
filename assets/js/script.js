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
        document.getElementById("result").innerHTML = num1 * num2 * .35;
}
