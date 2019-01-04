// addEventListener("keypress", function(event){
// 	var input = document.getElementById('input').value;
// 	alert(input);
// });

var input = document.getElementById('input');
var result = document.getElementById('result');
var timeout = null;

input.onkeydown = function(e) {
	result.innerHTML = "Waiting for you to stop typing...";
}

input.onkeyup = function(e) {

	clearTimeout(timeout);

	timeout = setTimeout(function() {
		var inp = input.value;
		var lastChar = inp[inp.length - 1];
		// document.getElementById('result').innerHTML = lastChar;
		if(lastChar !== "?") {
			result.innerHTML = "Question usually contains a question mask (?)";
		}
		else {
			var url = 'https://yesno.wtf/api';

			fetch(url)
			.then(res => res.json())
			.then((out) => {
				if(out.answer === "yes") {
					result.innerHTML = "Yes";
				}
				else {
					result.innerHTML = "Thinking...";
				}
			})
			.catch(err => { throw err });
		}
	}, 5000);


};