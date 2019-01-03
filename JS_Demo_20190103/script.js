const url = "https://yesno.wtf/api";
const result = document.getElementById("txtResult");
var time = 0;

function checkTyping(e) {
    if (e.value != "") {
        result.innerHTML = "Waiting for you to stop typing...";
        window.clearTimeout(time);
        time = window.setTimeout(function() {
            checkQuestion(e.value);
        }, 500);
    } else {
        result.innerHTML = "Questions usually contain a question mark. ;-)";
    }
}

function checkQuestion(question) {
    if (question.charAt(question.length - 1) != "?") {
        result.innerHTML = "Questions usually contain a question mark. ;-)";
    } else {
        result.innerHTML = "Thingking...";
        fetchAPI(url);
    }
}

function fetchAPI(urlAPI) {
    fetch(urlAPI)
        .then(function(response) {
            if (response.status !== 200) {
                result.innerHTML =
                    "Looks like there was a problem. Status Code: " +
                    response.status;

                return;
            }
            response.json().then(function(data) {
                result.innerHTML = data.answer;
            });
        })
        .catch(function(err) {
            console.log("Error", err);
        });
}
