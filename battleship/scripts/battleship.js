var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},

	displayMiss: function(cellID) {
		var cell = document.getElementById(cellID);
		cell.setAttribute("class", "miss");
	},

	displayHit: function(cellID) {
		var cell = document.getElementById(cellID);
		cell.setAttribute("class", "hit");
	}
}

/* test view
view.displayHit("34");		//D4
view.displayHit("12");		//B2
view.displayHit("26");		//C6

view.displayMiss("00");		//A0
view.displayMiss("55");		//F5
view.displayMiss("25");		//C5

view.displayMessage("Display Message test");
*/

var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,

	ships: [
		{
			locations: ["06", "16", "26"], hits: ["", "", ""]
		},
		{
			locations: ["24", "34", "44"], hits: ["", "", ""]
		},
		{
			locations: ["10", "11", "12"], hits: ["", "", ""]
		}
	],

	fire: function(guess) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess);
			
			if (index >= 0) {
				ship.hits[index] = "hit";
				
				view.displayHit(guess);
				view.displayMessage("HIT!");
				
				if (this.isSunk(ship)) {
					view.displayMessage("You sank my battleship!");
					this.shipsSunk++;
				}
				
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessage("You missed.");

		return false;
	},

	isSunk: function(ship) {
		for (var i = 0; i < this.shipLength; i++) {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
		return true;
	}
}

/* test model
model.fire("53"); 		//MISS

model.fire("06");		//HIT
model.fire("16");
model.fire("26");

model.fire("34");		//HIT
model.fire("24");
model.fire("44");

model.fire("12");		//HIT
model.fire("11");
model.fire("10");
*/

var controller = {
	guesses: 0,

	processGuess: function(guess) {
		var location = this.parseGuess(guess);
		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
				view.displayMessage("You sank all my ships in " + this.guesses + " guesses");
			}
		}
	},

	parseGuess: function(guess) {
		var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

		if (guess === null || guess.length !==2) {
			alert("Please enter a letter and a number on the board.");
		} else {
			firstChar = guess.charAt(0);
			var row = alphabet.indexOf(firstChar);
			var column = guess.charAt(1);

			if (isNaN(row) || isNaN(column)) {
				alert("That isn't on the board");
			} else if (row < 0 || row >= model.boardSize ||
							column < 0 || column >= model.boardSize ) {
				alert("That is off the board");
			} else {
				return row + column;
			}
		}
		return null;
	}
}

/* test controller 
console.log(controller.parseGuess("A0"));		// 00
console.log(controller.parseGuess("B6"));		// 16
console.log(controller.parseGuess("G3")); 		// 63
console.log(controller.parseGuess("H0"));		// null
console.log(controller.parseGuess("A7"));		// null


controller.processGuess("A0");

controller.processGuess("A6");
controller.processGuess("B6");
controller.processGuess("C6");

controller.processGuess("C4");
controller.processGuess("D4");
controller.processGuess("E4");

controller.processGuess("B0");
controller.processGuess("B1");
controller.processGuess("B2");
*/

function init() {
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;
	
	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;
}

function handleFireButton() {
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value;
	controller.processGuess(guess);
	guessInput.value = "";
}

function handleKeyPress(e) {
	var fireButton = document.getElementById("fireButton");
	if (e.keyCode === 13) {
		fireButton.click();
		return false;
	}
}

window.onload = init;

