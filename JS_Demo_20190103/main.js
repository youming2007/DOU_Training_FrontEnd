var textInput = document.getElementById("input");
var textOutput = document.getElementById("output");
var time = null;

textOutput.innerHTML = "Questions usually contain a question mark. ;-)";

textInput.onkeypress = function (e) {
    textOutput.innerHTML = "Waiting for you to stop typing...";
    clearTimeout(time);
    time = setTimeout(stopTyping, 500);
};
function stopTyping () {  
    let lastChar = textInput.value.substr(-1);
    lastChar == "?" ? callApi() : 
        textOutput.innerHTML = "Questions usually contain a question mark. ;-)";
};
async function callApi() {
    textOutput.innerHTML = "Thinking..."
    let response = await fetch("https://yesno.wtf/api");
    let dataResult = await response.json();
        dataResult.answer == "yes" ? textOutput.innerHTML = "Yes" : 
        textOutput.innerHTML = "No";                          
};