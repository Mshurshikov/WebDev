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

/* test model */
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

var controller = {
	guesses: 0,

	processGuess: function(guess) {
		
	}
}














