

	var PokemonList = ["Metapod", "Mew", "Jinx", "Squirtle", "Ditto", "Zapdos"];
		// Computer picks a random Pokemon from the list
		var Pokemon = PokemonList[Math.floor(Math.random() * PokemonList.length)];
		console.log("Pokemon chosen is "+Pokemon);
		// Creates a list the same length as the Pokemon picked
		var winCount=0;
		// sett winGoal to lenght of Pokemon picked
		var winGoal=  Pokemon.length;
		console.log("Win Goal is: "+winGoal);
		
		// Populates an array of dashes the same L as Pokemon
		var displayList=[];
		for(var i=0;i<Pokemon.length;i++){
			displayList.push(" _ ");
		} 
		// ['_', '_']
		//write array to HTML
		// USe forEach maybe??
		document.getElementById("spanName").innerHTML=displayList.join("");

		


document.onkeyup= function(event){

	
	// Assigns Guess the value of the key pressed
	var Guess= event.key.toLowerCase();
	console.log("Your guess is "+Guess);
	
	// Comparison starts
	for(var i=0;i<Pokemon.length;i++){

		if(Guess === Pokemon[i].toLowerCase()){
			displayList.splice(i,1,Guess);
			console.log(displayList);
			displayList.toString();
    		document.getElementById("spanName").innerHTML = displayList.join(" ");
			// keeps track of correct guesses
			winCount++;
			console.log("Letters guess correctly so far: "+winCount);
		}

		else {
			console.log("Incorrent Letter: "+ Guess);
			var node = document.createElement("LI");
		    var textnode = document.createTextNode(Guess);
		    node.appendChild(textnode);
			document.getElementById("lettersUsed").appendChild(node);
		}
		if(winCount == winGoal){
			alert("CONGRATS");
			console.log("YOU GUESSED IT!");
		}
	}

}