


//need to review the checkWinner function and see wether its placement without the addEventListener function
// is it being called too often?


document.addEventListener('DOMContentLoaded', function(){
	var totalCount = -1;
	var xArray = [];
	var oArray = [];
	var winningArrays = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[3,5,7],[1,5,9]];
	var xArrayVsWinArr = [];
	var xCount = 0;
	var oArrayVsWinArr = [];
	var oCount = 0;
	var winner = "";
	//assigns winner to variable winner
	var checkWinner = function(){
		//creates array of x counts against winning combos
		winningArrays.map(function(x){
			x.map(function(y){
				for (var i =0; i<xArray.length; i++){
					if (xArray[i] == y){
						xCount++;
					}
				}
				xArrayVsWinArr.push(xCount);
			});
		});
		//creates array of o counts against winning combos
		winningArrays.map(function(x){
			x.map(function(y){
				for (var i =0; i<xArray.length; i++){
					if (oArray[i] == y){
						oCount++;
					}
				}
				oArrayVsWinArr.push(oCount);
			});
		});
		//checks and assigns winner if x array has winners
		xArrayVsWinArr.map(function(x){
			if (x > 2){
				winner = "player1";
			}
		});
		//checks and assigns winner if o array has winners
		oArrayVsWinArr.map(function(x){
			if (x>2){
				winner = "player2";
			}
		});
	};
	document.addEventListener('click',function(event){
// checks if box clicked
		if (event.target.classList.contains('box')){
			// 'togglers' the player
			if (totalCount % 2 !== 0){
				///list player whose turn it is
				var playerListingSpot = document.getElementById("playerUp");
				playerListingSpot.innerHTML = 'player1'
			}
			else {
				var playerListingSpot = document.getElementById("playerUp");
				playerListingSpot.innerHTML = 'player2'
			}
			//changes HTML content of clicked divs to X or O;
			totalCount++;
			if (totalCount % 2 === 0) {
					var id = event.target.id;
					console.log(id);
					var elOfId = document.getElementById(id);
					var placeToChange = elOfId.innerHTML = 'X';
					xArray.push(id)
					xArray.sort();
					console.log(xArray);
			}
			else {
					var id = event.target.id;
					console.log(id);
					var elOfId = document.getElementById(id);
					var placeToChange = elOfId.innerHTML = 'O';
					oArray.push(id)
					oArray.sort();
					console.log(oArray);
			}
			checkWinner();
			console.log("xArrayWinArr",xArrayVsWinArr);
			console.log("xCount",xCount);
			console.log("oArrayVSWinArr",oArrayVsWinArr);
			console.log("oCount",oCount);
			console.log("winner",winner);
			var winnersDiv = document.getElementById('theWinner');
			winnersDiv.innerHTML = "The winner is" + winner;
		}
	//if reset button clicked, set innerHTML to ID;
	//reset button also needs to reset the values for the variables
	if (event.target.classList.contains('resetter')){
		var resetterArray = document.getElementsByClassName('box');
		for (var i = 0; i < resetterArray.length; i++){
			resetterArray[i].innerHTML = i;
			console.log("is this id",i);
		}
	}
	});
});



