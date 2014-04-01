$(document).ready(function(){

		var inputString = prompt('Enter a number between 1 and 300:');
		var inputNumber = parseInt(inputString);
		var n = inputString.indexOf(".");
		if (n==-1) {
			if(!isNaN(inputNumber) && inputNumber!=''){
					if(inputNumber > 0 && inputNumber < 301){
						console.log('Good number!,' + 'inputNumber=' + inputNumber);
						fizzBuzz(inputNumber);
					} else{
						alert("That number is not between 1 and 300.");
					}
			}
			else{
				console.log(isNaN(inputNumber));
				thatIsNotaNumber();
			}
		}else{
			alert("It wont work for decimals!");
		}




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
	return;
	}
});

