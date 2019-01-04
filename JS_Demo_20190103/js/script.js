var timeout;
var result = document.getElementById("txtResult");
var input = document.getElementById("txtInput");


input.onkeydown = function(){  result.innerHTML = "Waiting for you to stop typing..";
}


function lookup(){
        timeout = null;
        input.onkeyup = function(){
          
          clearTimeout(timeout);
          timeout = setTimeout(function(){
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
        },500);
  }
}
window.onload = lookup;