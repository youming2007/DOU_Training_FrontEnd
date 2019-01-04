	
	var timeout = null;
	var textInput = document.getElementById('inputt');
	textInput.onkeydown = function (e) {

		document.getElementById("content").innerHTML = "Waiting for you to stop typing....";

		// Clear the timeout if it has already been set.
   		// This will prevent the previous task from executing
    	// if it has been less than <MILLISECONDS>
    	clearTimeout(timeout);

    	// Make a new timeout
	    timeout = setTimeout(function() {
	    	document.getElementById("content").innerHTML = "Questions usually contain a question mark :)))";
	    	fetching();
	    }, 500)};

function fetching(){

	var ques = document.getElementById('inputt').value;
	var lastChar = ques.substr(-1);
	
	if (lastChar=='?'){

		document.getElementById("content").innerHTML = "Thinking...";

		fetch('https://yesno.wtf/api')	
		.then(response => response.json())
		.then(data => {
  	 		document.getElementById("content").innerHTML = (data.answer).toUpperCase();
		})
		.catch(error => alert('Có gì đó ko ổn!!'));
		}
}
	