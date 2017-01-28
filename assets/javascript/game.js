
	console.log(document.getElementById("currentWord"));

	var PokemonList = ["Metapod", "Mew", "Jinx"];
		// Computer picks a random Pokemon from the list
		var Pokemon = PokemonList[Math.floor(Math.random() * PokemonList.length)];
		console.log(Pokemon);
		// Creates a list the same length as the Pokemon picked
		var winCount=0;
		// sett winGoal to lenght of Pokemon picked
		var winGoal=  Pokemon.length;
		console.log(winGoal);
		// Writes the list to the document
		for(var i=0;i<Pokemon.length;i++){
			var node = document.createElement("LI");
			document.getElementById("currentWord").appendChild(node);
		}


document.onkeydown= function(event){

	
	// Assigns Guess the value of the key pressed
	var Guess= event.key.toLowerCase();
	// Comparison starts
	console.log(Guess);

	for(var i=0;i<Pokemon.length;i++){

		if(Guess.toLowerCase === Pokemon[i].toLowercase){
			document.getElementById("currentWord").innerHTML=Guess.toUpperCase;
			winCount++;
			console.log(winCount);
		}

		else{
			document.getElementById("lettersUsed").innerHTML=Guess;
		}
		if(winCount == winGoal){
			alert("CONGRATS");
		}
	}

}