var notify = document.getElementById("notify-area");
var input = document.getElementById("input-area");
var typingTimer; // hold setTimout

input.addEventListener("keydown", function(e){typing();});
input.addEventListener("paste", function(e){typing();});
input.addEventListener("cut", function(e){typing();});

var typing = function(){
    notify.innerHTML = "Waiting for you stop typing...";
    clearTimeout(typingTimer);
    typingTimer = setTimeout(checkValid, 500);
};

var checkValid = function(){
    var content = document.getElementById("input-area").value.trim();
    if(content){
        var last = content[content.length - 1];
        if(last === "?"){
            notify.innerHTML = "Thinking...";
            return callAPI();
        } 
    }
    notify.innerHTML = "Questions usually contain a question mark. ;)";
}

var callAPI = async function(){
    var req = await fetch("https://yesno.wtf/api");
    var myjson = await req.json();
    if(myjson.answer){
        notify.innerHTML = myjson.answer;
    }
}