// function ageInDays() {
// 	let birthYear = prompt("Enter birth year");
// 	let result = (new Date().getFullYear() - birthYear) * 365;
// 	// could do this or appendchild
// 	// document.getElementById("flex-box-result").innerHTML = result;
// 	// appendchild method
// 	let createdElem = document.createElement("div");
// 	createdElem.setAttribute("id", "answer");
// 	let createdTextNode = document.createTextNode(
// 		"You are " + result + " days old."
// 	);
// 	createdElem.appendChild(createdTextNode);
// 	document.getElementById("flex-box-result").appendChild(createdElem);
// 	console.log(result);
// }

// function reset() {
// 	document.getElementById("answer").remove();
// }

// function generateCat() {
// 	let cat = document.createElement("img");
// 	// could do it this way or setAttribute
// 	// cat.src =
// 	// 	"https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
// 	// setAttribute method
// 	cat.setAttribute(
// 		"src",
// 		"https://thecatapi.com/api/images/get?format=src&type=gif&size=small"
// 	);
// 	cat.setAttribute("width", "30%");

// 	document.getElementById("catResult").appendChild(cat);
// }

// function rpsGame(gesture) {
// 	let random = Math.floor(Math.random() * 3) + 1;
// 	switch (random) {
// 		case 1:
// 			document.getElementById("rock").style = "box-shadow: -5px 5px 5px red;";
// 			break;
// 		case 2:
// 			document.getElementById("paper").style = "box-shadow: -5px 5px 5px red;";
// 			break;
// 		case 3:
// 			document.getElementById("scissors").style =
// 				"box-shadow: -5px 5px 5px red;";
// 			break;
// 	}
// 	let rpsDiv = document.createElement("div");
// 	let flexbox3 = document.getElementById("flex-box-container-3");
// 	flexbox3.insertBefore(rpsDiv, flexbox3.firstChild);
// 	rpsDiv.style =
// 		"border: 2px solid blue;  position: absolute; left: 0; right: 0; margin-left: auto; margin-right: auto; width: 75%; background-color: coral;";

// 	let rpsTie = document.createTextNode("It's a tie");
// 	let rpsWin = document.createTextNode("You won");
// 	let rpsLose = document.createTextNode("You lost");

// 	switch (gesture.id) {
// 		case "rock":
// 			if (random == 1) {
// 				rpsDiv.appendChild(rpsTie);
// 			} else if (random == 2) {
// 				rpsDiv.appendChild(rpsLose);
// 			} else if (random == 3) {
// 				rpsDiv.appendChild(rpsWin);
// 			}
// 			gesture.style = "box-shadow: 5px 5px 5px greenyellow;";
// 			break;
// 		case "paper":
// 			if (random == 1) {
// 				rpsDiv.appendChild(rpsWin);
// 			} else if (random == 2) {
// 				rpsDiv.appendChild(rpsTie);
// 			} else if (random == 3) {
// 				rpsDiv.appendChild(rpsLose);
// 			}
// 			gesture.style = "box-shadow: 5px 5px 5px greenyellow;";

// 			break;
// 		case "scissors":
// 			if (random == 1) {
// 				rpsDiv.appendChild(rpsLose);
// 			} else if (random == 2) {
// 				rpsDiv.appendChild(rpsWin);
// 			} else if (random == 3) {
// 				rpsDiv.appendChild(rpsTie);
// 			}
// 			gesture.style = "box-shadow: 5px 5px 5px greenyellow;";

// 			break;
// 	}
// }

// function rpsReset() {
// 	document.getElementById("rock").style = "";
// 	document.getElementById("paper").style = "";
// 	document.getElementById("scissors").style = "";
// 	let flexbox3 = document.getElementById("flex-box-container-3");

// 	while (flexbox3.getElementsByTagName("div")[0]) {
// 		flexbox3.removeChild(flexbox3.getElementsByTagName("div")[0]);
// 	}
// }

// let allButtons = document.getElementsByTagName("button");
// let copyAllButtons = [];
// for (let i = 0; i < allButtons.length; i++) {
// 	copyAllButtons[i] = allButtons[i].className;
// }

// function changeColor(selector) {
// 	console.log(allButtons);
// 	console.log(copyAllButtons);
// 	console.log(selector.value);
// 	switch (selector.value) {
// 		case "random":
// 			for (let i of allButtons) {
// 				let random = Math.floor(Math.random() * 2);
// 				if (random == 0) {
// 					i.className = "btn btn-danger";
// 				} else {
// 					i.className = "btn btn-success";
// 				}
// 			}
// 			break;
// 		case "red":
// 			// could use this for, or for of below
// 			for (let i = 0; i < allButtons.length; i++) {
// 				allButtons[i].className = "btn btn-danger";
// 			}
// 			console.log(allButtons);
// 			break;
// 		case "green":
// 			// could use this for of, or for above
// 			for (let i of allButtons) {
// 				i.className = "btn btn-success";
// 			}
// 			console.log(allButtons);

// 			break;
// 		case "reset":
// 			for (let i = 0; i < allButtons.length; i++) {
// 				allButtons[i].className = copyAllButtons[i];
// 			}
// 			break;
// 	}
// }

// blackjackkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
let swish = new Audio("./sounds/swish.m4a");
let aww = new Audio("./sounds/aww.mp3");
let cash = new Audio("./sounds/cash.mp3");
let yourCards = {
	0: 0,
	1: 0,
	2: 0,
	3: 0,
	4: 0,
	5: 0,
	6: 0,
	7: 0,
	8: 0,
	9: 0,
	10: 0,
	11: 0,
	12: 0,
	13: 0,
};
let opponentsCards = {
	0: 0,
	1: 0,
	2: 0,
	3: 0,
	4: 0,
	5: 0,
	6: 0,
	7: 0,
	8: 0,
	9: 0,
	10: 0,
	11: 0,
	12: 0,
	13: 0,
};

// so cards will overlap
let overLap = 0;
//picks a random card and returns and shows
function showCard(whosCard) {
	let cardImg = document.createElement("img");
	cardImg.setAttribute("id", "cardImageId");
	cardImg.setAttribute("width", "90em;");
	cardImg.setAttribute("height", "120em;");
	cardImg.style.top = overLap.toString() + "px";
	console.log("this is after style.top in showCard = " + overLap);
	let randomCard = Math.floor(Math.random() * 13);
	let randomCardOptions = [
		"A",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"J",
		"Q",
		"K",
	];
	cardImg.src = `./images/${randomCardOptions[randomCard]}.png`;
	document.querySelector(whosCard).appendChild(cardImg);
	overLap -= 50;
	swish.play();
	return randomCard;
}

function blackjackHit(whosHit, whosCardsContainer) {
	let blackjackResult = 0;
	let whosCards = [];
	let idOfResult;
	if (whosHit == "yourHit") {
		whosCards = yourCards;
		idOfResult = "your-blackjack-result";
	} else {
		whosCards = opponentsCards;
		idOfResult = "dealer-blackjack-result";
	}
	whosCards[showCard(whosCardsContainer)]++;

	// adding up cards ace to 10
	for (let i = 0; i < 10; i++) {
		blackjackResult += parseInt(whosCards[i]) * (i + 1);
	}
	// adding up cards jack to king
	for (let i = 10; i < 14; i++) {
		blackjackResult += parseInt(whosCards[i]) * 10;
	}
	// deciding if the aces can be 11
	for (let i = 0; i < whosCards[0]; i++) {
		if (blackjackResult < 12) {
			blackjackResult += 10;
		}
	}
	//current count
	document.getElementById(idOfResult).innerHTML = blackjackResult;
	if (
		parseInt(document.getElementById("your-blackjack-result").innerHTML) >
		21
	) {
		busted();
	}
}

function deal() {
	//disable deal button
	document
		.getElementById("blackjack-deal-button")
		.setAttribute("onclick", "messageToHitStand()");

	// enabling hit and stand buttons
	document
		.getElementById("blackjack-hit-button")
		.setAttribute("onclick", "blackjackHit('yourHit', '#yourCards')");
	document
		.getElementById("blackjack-stand-button")
		.setAttribute("onclick", "stand()");

	// resetting card count result
	yourCards = {
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
		7: 0,
		8: 0,
		9: 0,
		10: 0,
		11: 0,
		12: 0,
		13: 0,
	};
	opponentsCards = {
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
		7: 0,
		8: 0,
		9: 0,
		10: 0,
		11: 0,
		12: 0,
		13: 0,
	};
	document.getElementById("your-blackjack-result").innerHTML = 0;
	document.getElementById("dealer-blackjack-result").innerHTML = 0;
	// removing cards
	while (document.querySelector("#yourCards").hasChildNodes()) {
		document
			.querySelector("#yourCards")
			.removeChild(document.querySelector("#yourCards").childNodes[0]);
	}
	// removing cards
	while (document.querySelector("#opponentsCards").hasChildNodes()) {
		document
			.querySelector("#opponentsCards")
			.removeChild(
				document.querySelector("#opponentsCards").childNodes[0]
			);
	}

	blackjackHit("dealerHit", "#opponentsCards");
	overLap = 0;
	console.log("this is after pressing deal " + overLap);
}
// initial deal
deal();
overLap = 0;
console.log("this is after overlap=0 after initial deal" + overLap);

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
async function stand() {
	disableHitStand();
	overLap = -50;
	while (
		parseInt(document.getElementById("dealer-blackjack-result").innerHTML) <
		17
	) {
		blackjackHit("dealerHit", "#opponentsCards");
		await sleep(800);
	}

	// if dealer busts or your greater
	if (
		parseInt(document.getElementById("dealer-blackjack-result").innerHTML) >
			21 ||
		parseInt(document.getElementById("dealer-blackjack-result").innerHTML) <
			parseInt(document.getElementById("your-blackjack-result").innerHTML)
	) {
		win();
		// if dealer is greater
	} else if (
		parseInt(document.getElementById("dealer-blackjack-result").innerHTML) >
		parseInt(document.getElementById("your-blackjack-result").innerHTML)
	) {
		lose();
		// if equal
	} else {
		draw();
	}
}

function win() {
	cash.play();
	document.getElementById("wins").innerHTML =
		parseInt(document.getElementById("wins").innerHTML) + 1;
	overLap = 0;
	setTimeout(() => {
		alert("You won!");
	});
}

function lose() {
	aww.play();
	document.getElementById("losses").innerHTML =
		parseInt(document.getElementById("losses").innerHTML) + 1;
	overLap = 0;
	alert("You lost!");
}

function busted() {
	aww.play();
	disableHitStand();
	document.getElementById("losses").innerHTML =
		parseInt(document.getElementById("losses").innerHTML) + 1;
	overLap = 0;
	setTimeout(() => {
		alert("You busted!");
	}, 100);
}

function draw() {
	document.getElementById("draws").innerHTML =
		parseInt(document.getElementById("draws").innerHTML) + 1;
	overLap = 0;
	alert("It's a draw");
}

function disableHitStand() {
	//enable deal button
	document
		.getElementById("blackjack-deal-button")
		.setAttribute("onclick", "deal()");
	//disable hit
	document
		.getElementById("blackjack-hit-button")
		.setAttribute("onclick", "messageForNewGame()");
	//disable stand
	document
		.getElementById("blackjack-stand-button")
		.setAttribute("onclick", "messageForNewGame()");
}

function messageForNewGame() {
	alert("Click Deal for a new game.");
}

function messageToHitStand() {
	alert("Click Hit or Stand.");
}
