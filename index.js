/* document.getElementById("sumDigits").onsubmit = function(event) {
    event.preventDefault();
} */

document.getElementById("submit").onclick = function() {
    /* take the num from text field & display it in our display area */
    var input = document.getElementById("input").value;
    /* console.log(input); */
    document.getElementById("display").innerHTML += input;
    document.getElementById("input").value = "";
    
}

document.getElementById("addDigits").onclick = function() {
    console.log("addDigits clicked");
    /* get sum of digits from the display field */
    var display = document.getElementById("display").innerHTML;
    /* console.log(display); */
    "123"
    var runningTotal = 0;
    for (var i = 0; i < display.length; i++) {
        /* console.log(display[i]); */
        runningTotal = runningTotal + parseInt(display[i]);
    }
    /* console.log(runningTotal); */
    document.getElementById("display").innerHTML = runningTotal;
}