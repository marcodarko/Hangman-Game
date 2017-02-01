
// ------------------  GAME AS AN OBJECT   -----------------

// GLOBAL VARIABLES
var WordList = ["Metapod", "Mew", "Jinx", "Squirtle", "Ditto", "Zapdos"];
var WordChosen = WordList[Math.floor(Math.random() * WordList.length)];
console.log("Word Chosen is: "+WordChosen);
var displayList=[];
var IncorrectList=[];

for(var i=0;i<WordChosen.length;i++){
		displayList.push(" _ ");
} 
document.getElementById("spanName").innerHTML=displayList.join("");



// GAME OBJECT
var game={

	winCount: 0, 
	gamesWon: 0,
	loseCount: WordChosen.length+3,
	winGoal:  WordChosen.length,
	startGame: function(Guess, WordChosen){
		// Checks that input is a letter from a-z
		if (/^[a-z]$/i.test(Guess)){
			// Check if letter exists in word.
			if (-1 <= WordChosen.indexOf(Guess)) {
				//The letter exists!
				for(var i=0;i<WordChosen.length;i++){
				if(Guess === WordChosen[i].toLowerCase()){
					displayList.splice(i,1,Guess);
					console.log(displayList);
					//displayList.toString();
		    		document.getElementById("spanName").innerHTML = displayList.join(" ");
					// keeps track of correct guesses
					this.winCount++;
					console.log("Letters guess correctly so far: "+ this.winCount);
				}

				
					if(this.winCount == this.winGoal){
						this.gamesWon++;
						alert("CONGRATS");
						console.log("YOU GUESSED IT!");
						this.gamesWon.toString();
						document.getElementById("wins").innerHTML = this.gamesWon;
					}
					else if(this.loseCount==0){
						alert("YOU LOSE");
					}

				}

				} 
				else {
				// The letter is not in the word.
				this.loseCount--;
					console.log("Incorrent Letter: "+ Guess);
					// If Guess doesn't exist in IncorrectList, then add it to the list.
					if (-1 == IncorrectList.indexOf(Guess)) {
						IncorrectList.splice(i,1,Guess);
					}
					console.log(IncorrectList);
					IncorrectList.toString();
		    		document.getElementById("para").innerHTML = displayList.join(" ");
			}
			
		}
		else{
			alert("Must type a valid letter");
		}
	}


};

document.onkeyup= function(event){

	var Guess= event.key.toLowerCase();
	console.log("YOUR GUESS: "+Guess);

	game.startGame(Guess, WordChosen);
};





// -------------* WORKING*   OLD CODE WITH NO OBJECTS----------------



// 	var PokemonList = ["Metapod", "Mew", "Jinx", "Squirtle", "Ditto", "Zapdos"];
// 		// Computer picks a random Pokemon from the list
// 		var Pokemon = PokemonList[Math.floor(Math.random() * PokemonList.length)];
// 		console.log("Pokemon chosen is "+Pokemon);
// 		// Creates a list the same length as the Pokemon picked
// 		var winCount=0;
// 		var gamesWon=0;

// 		var loseCount=Pokemon.length+3;
// 		// sett winGoal to lenght of Pokemon picked
// 		var winGoal=  Pokemon.length;
// 		console.log("Win Goal is: "+winGoal);
		
// 		// Populates an array of dashes the same L as Pokemon
// 		var displayList=[];
// 		for(var i=0;i<Pokemon.length;i++){
// 			displayList.push(" _ ");
// 		} 
// 		// ['_', '_']
// 		//write array to HTML
// 		// USe forEach maybe??
// 		document.getElementById("spanName").innerHTML=displayList.join("");

		


// document.onkeyup= function(event){

	
// 	// Assigns Guess the value of the key pressed
// 	var Guess= event.key.toLowerCase();
// 	console.log("Your guess is "+Guess);
	
// 	// Comparison starts
// 	for(var i=0;i<Pokemon.length;i++){

// 		if(Guess === Pokemon[i].toLowerCase()){
// 			displayList.splice(i,1,Guess);
// 			console.log(displayList);
// 			displayList.toString();
//     		document.getElementById("spanName").innerHTML = displayList.join(" ");
// 			// keeps track of correct guesses
// 			winCount++;
// 			console.log("Letters guess correctly so far: "+winCount);
// 		}

// 		else if(Guess !== Pokemon[i].toLowerCase()){
// 			//loseCount--;
// 			console.log("Incorrent Letter: "+ Guess);
// 			var node = document.createElement("LI");
// 		    var textnode = document.createTextNode(Guess);
// 		    node.appendChild(textnode);
// 			document.getElementById("lettersUsed").appendChild(node);
//
//				// console.log("Incorrent Letter: "+ Guess);
//				// IncorrectList.splice(i,1,Guess);
//				// console.log(IncorrectList);
//				// IncorrectList.toString();
//	   			//document.getElementById("para").innerHTML = displayList.join(" ");
// 		}
// 		if(winCount == winGoal){
// 			gamesWon++;
// 			alert("CONGRATS");
// 			console.log("YOU GUESSED IT!");
// 			gamesWon.toString();
// 			document.getElementById("wins").innerHTML = gamesWon;
// 		}
// 		// else if(loseCount==0){
// 		// 	alert("YOU LOSE");
// 		// }
// 	}

// }