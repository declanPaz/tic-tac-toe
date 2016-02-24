

document.addEventListener('DOMContentLoaded',function(){

	var inputName = [];
	var ul = document.getElementById('addToMe');
	var newContent =[];
	var newLi = [];
	var fullArray = [];
	var luckyNumber = 0;
	var luckyStudent = [];
	var p = document.getElementById('addRand');
	console.log(p);

	// console.log(ul);

	document.addEventListener('click', function(event){
	//this does primary button/list
		if(event.target.classList.contains('btn-primary')){
			//this logs the input value when button is clicked;
			console.log("button clicked");
			inputName = document.getElementsByTagName('input')[0].value.split(", ");
			console.log(inputName);

			//this will create new LI in UL;
			for (var i = 0; i<inputName.length; i++){
				console.log('second click function!');
				newLi = document.createElement('li');
				newContent = document.createTextNode(inputName[i]);


				newLi.appendChild(newContent);
				console.log("newContent",newContent);
				console.log("newLi:",newLi);
				ul.appendChild(newLi);

				fullArray.push(inputName[i]);
				console.log("namePushed",inputName[i]);
			}
		document.getElementById('eraseMe').value="";
		console.log("fullArray:",fullArray);
		}

// moved this section up
		if (event.target.id=='randomizer'){
			console.log("crazy random picked!");
			luckyNumber = Math.floor((Math.random()*fullArray.length));
			console.log(luckyNumber);

			luckyStudent = document.createTextNode(fullArray[luckyNumber]);
			console.log(luckyStudent);
			p.appendChild(luckyStudent);
		}

	});
	console.log("ul",ul);

	// picks a random number between 0 and amount of students
	// document.querySelector('#randomizer').onclick = function(){
	// 	console.log("crazy random picked!");
	// 	luckyNumber = Math.floor((Math.random()*fullArray.length)+1);
	// 	console.log(luckyNumber);

	// 	luckyStudent = document.createTextNode(fullArray[luckyNumber]);
	// 	console.log(luckyStudent);
	// 	p.appendChild(luckyStudent);
});















