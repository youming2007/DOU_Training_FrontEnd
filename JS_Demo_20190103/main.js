var timer = null;

function checkKeydown(){
    clearTimeout(timer); 
    timer = setTimeout(doSomethingWhenStopTyping, 500)
    document.getElementById("status").innerHTML = "Waiting for you to stop typing...";
}

function doSomethingWhenStopTyping() {

    var lastCharacter = document.getElementById("input").value.slice(-1);

    if(lastCharacter == "?")
    {
        document.getElementById("status").innerHTML = "Thinking...";
        fetchAPI();
    }
    else
    {
        document.getElementById("status").innerHTML = "Question usually contain a question mark. ;)";
    }
}

function fetchAPI(){
    fetch('https://yesno.wtf/api')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById("status").innerHTML = data.answer;
    })
    .then((err) => {
        console.log(err);
    });
}
