$(document).ready(function(){
	var keepGoing = true;
	while(keepGoing){
		var inputString = prompt('Enter a number between 1 and 300:');
		var inputNumber = parseInt(inputString);

		if(!isNaN(inputNumber) && inputNumber!=''){
			if(inputNumber > 0 && inputNumber < 301){
				console.log('Good number!,' + 'inputNumber=' + inputNumber);
				fizzBuzz(inputNumber);
				keepGoing = false;

			} else{
				alert("That number is not between 1 and 300.");
				keepGoing = false;
			}
		}
		else{
			thatIsNotaNumber();
			keepGoing = false;
		}
	} /* ends the keep going loop*/
});

function fizzBuzz (highLimit){
	for(var counter = 1; counter <= highLimit; counter++){

		console.log('counter=' + counter + ', ' + 'highLimit=' + highLimit);

		var addThisToBody = counter;
		if (counter % 3 ===0 && counter % 5 === 0){
			addThisToBody = 'Fizz and Buzz!, '
		} 
		else{
			if (counter % 3 === 0){
				addThisToBody = 'Fizz, ';
			} 
			else{
				if (counter % 5 === 0){
					addThisToBody = 'Buzz, ';
					} 
				else{
					if(!isNaN(addThisToBody)){
						addThisToBody = addThisToBody + ', ';
					} 
				}
			}
		}
		if (counter % 10 === 0){
			addThisToBody = addThisToBody + "<br/><br/>"
		}
		$('body').append(addThisToBody);
	}


};

function thatIsNotaNumber(){
	alert('That is not a number');
	keepGoing=false;
	return;
	}


