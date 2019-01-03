
/**
 * Kiểm tra is user finish typing
 */
function ktInput() {
	document.getElementById('status').innerHTML = "Waiting for you to stop typing..." ;
	setTimeout(ktQuestion, 500);	
}


/**
 * Kiểm tra is it a valid question
 */
function ktQuestion(){
	var question = document.getElementById('question').value;
	var last = question[question.length -1];
	if(question.length>0 && last =='?'){
		fetch('https://yesno.wtf/api').then(function(response){
			if(response.ok){
				document.getElementById('status').innerHTML = "YES" ;
			}
			else{
				document.getElementById('status').innerHTML = "Thinking..." ;
			}
		});	
	}
	else{
		document.getElementById('status').innerHTML = "Question usually contain a question mark. ;-)" ;
	}
}