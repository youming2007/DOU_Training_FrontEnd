let xhr = new XMLHttpRequest();
const timeToWait = 1000;
let lastInputTime;
function myFunction() {

    lastInputTime = new Date();
    searchText = document.getElementById("searchText").value;
    console.log("function is called! Value is: ", searchText)
    if (searchText == "" || searchText == undefined || searchText.trim() == "") {
        document.getElementById("message").innerText = "Question often contain a question mark! :D";
        return;
    }
    document.getElementById("message").innerText = "Waiting for you to stop typing...";
    window.setTimeout(search, timeToWait);

}
function search() {
    let waitingTime = new Date().getTime() - lastInputTime.getTime();
    console.log(waitingTime);
    if (waitingTime > timeToWait) {
        if (searchText.endsWith("?")) {
            document.getElementById("message").innerText = "Thinking...";
            
            //Start fetch API
            xhr.open('GET', 'https://yesno.wtf/api', true);
            xhr.onload = function () {
                //check if the status is 200(means everything is okay)
                if (this.status === 200) {
                    //return server response as an object with JSON.parse
                    console.log(JSON.parse(this.responseText));
                    let response = JSON.parse(this.responseText);
                    document.getElementById("message").innerText = response.answer;
                } else {
                    document.getElementById("message").innerText = "Opps! There is something wrong. You may wanna try again in later!"
                }
            }
            //call send
            xhr.send();
        } else {
            document.getElementById("message").innerText = "Question often contain a question mark! :D";
        }
    }
}