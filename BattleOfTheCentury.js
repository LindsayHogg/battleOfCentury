
/*
	Battle of the Century
	---------------------------------------
	The time has come for the most anticipated boxing match of
	the 21st century. 

	Fat Ronald vs Skinny Joe!

	Fat Ronald hits like a truck, but he has little in the way of speed
	and accuracy.

	Skinny Joe doesn't have much meat on his bones, but his boxing
	skills are top notch and he can get in and out quickly.

	== INSTRUCTIONS ==
	Design a game that allows Fat Ronald and Skinny Joe to duke it out!

	Fat Ronald lands his punches 25% of the time, but he hits for 2 HP
	Skinny Joe lands his punches 50% of the time, but he hits for 1 HP

	Once one of their HP's reaches 0 you should stop the game a declare a winner!

	Be sure to add some fun commentary when they land a punch or miss.

	== HINT == 
	getRandom returns a random number between the min and max inclusive.
	so for getRandom(1, 2) it could return either a 1 or a 2
*/

var joeHP = 4;
var ronaldHP = 4;
var game = true;


function fight() {
	// Joe Punches
	var joeHit = Math.floor(Math.random() * 2) + 1;

	if (joeHit === 1) {
	ronaldHP = ronaldHP - 1;	
	console.log("Joe landed a huge hit!\n");
	}
	else {
		console.log("Joe tries to throw a punch and misses like a newbie!\n")
	}
	
	
	// Ronald Punches
	var ronaldHit = Math.floor(Math.random() * 4) + 1;

	if (ronaldHit === 1) {
	joeHP = joeHP - 2;	
	console.log("Ronald landed a huge hit!\n");
	}
	else {
		console.log("Ronald misses on a big swing, what a sucker!\n")
	}
	
	
	// Round Recap
	console.log("After that round Joe's HP is at " + joeHP + " and Ronald's is at " + ronaldHP + "\n")
	if (joeHP <= 0 || ronaldHP <= 0) {
		game = false;
		console.log("Game over bitches");	
	}


	// Keep the loop going
	return game;
}

var gameLoop = setInterval(function () {
	if (!fight()) {
		clearInterval(gameLoop); // clears the interval and stops the game
	}
}, 1000); //pauses the loop for 1 second and then reruns 
