var timer = null;
function keyDown() {
    document.getElementById("content").innerHTML = "Wating for you to stop typing...";
    clearTimeout(timer);
    timer = setTimeout(stopTyping, 500)
};

function stopTyping() {
    //doing
    let yourname = document.getElementById("textInput").value;
    let endChar = yourname.substr(-1);
    endChar == '?' ? callApis() : document.getElementById("content").innerHTML = "Question usually contain a question mark ;-)";
}
async function callApis() {
    document.getElementById("content").innerHTML = 'Thinking...'
    let response = await fetch('https://yesno.wtf/api');
    let dataResult = await response.json();
    dataResult.answer == 'yes' ? document.getElementById("content").innerHTML = 'Yes' :
        document.getElementById("content").innerHTML = 'No'


}