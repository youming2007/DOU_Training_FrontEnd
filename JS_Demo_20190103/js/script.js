var timeout;
var result = document.getElementById("txtResult");
var input = document.getElementById("txtInput");
function delayTyping(){
    timeout = 0;
    input.onkeydown = function(){
        timeout++;
        setTimeout("lookup("+timeout+")",500);
    }
}


window.onload = delayTyping;
function lookup(key_down){
    if(key_down == timeout){
        const url = 'https://yesno.wtf/api';
        var last = input.value;
        if(last.slice(-1) === "?"){
            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    if(data.answer === "yes"){
                        result.innerHTML = "Yes.";
                    }else{
                        result.innerHTML = "Thinking...";
                    }
            }).catch(err=> console.error(error));   
        }else{
          result.innerHTML = "Question usually contain a question mark...";
        }
    }else{
        result.innerHTML = "Waiting for you to stop typing..."
    }
}