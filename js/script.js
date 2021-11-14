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
	let cardImg = $("<img>");
	cardImg.attr("id", "cardImageId");
	cardImg.attr("width", "90em;");
	cardImg.attr("height", "120em;");
	cardImg.css("top", overLap.toString() + "px");
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
	cardImg.attr("src", `./images/${randomCardOptions[randomCard]}.png`);
	$(whosCard).append(cardImg);
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
	console.log(`This is blackjackResult`);
	console.log(blackjackResult);

	$(`#${idOfResult}`).text(blackjackResult);
	if (parseInt($("#" + "your-blackjack-result").text()) > 21) {
		busted();
	}
}

function deal() {
	//disable deal button
	$("#" + "blackjack-deal-button").attr("onclick", "messageToHitStand()");

	// enabling hit and stand buttons
	$("#" + "blackjack-hit-button").attr(
		"onclick",
		"blackjackHit('yourHit', '#yourCards')"
	);
	$("#" + "blackjack-stand-button").attr("onclick", "stand()");

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
	$("#" + "your-blackjack-result").text("0");
	$("#" + "dealer-blackjack-result").text("0");
	// removing cards
	while ($("#yourCards").children().length > 0) {
		$("#yourCards").children()[0].remove();
	}
	// removing cards
	while ($("#opponentsCards").children().length > 0) {
		$("#opponentsCards").children()[0].remove();
	}

	blackjackHit("dealerHit", "#opponentsCards");
	overLap = 0;
}
// initial deal
deal();
overLap = 0;

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
async function stand() {
	disableHitStand();
	overLap = -50;
	while (parseInt($("#" + "dealer-blackjack-result").text()) < 17) {
		blackjackHit("dealerHit", "#opponentsCards");
		await sleep(800);
	}

	// if dealer busts or your greater
	if (
		parseInt($("#" + "dealer-blackjack-result").text()) > 21 ||
		parseInt($("#" + "dealer-blackjack-result").text()) <
			parseInt($("#" + "your-blackjack-result").text())
	) {
		win();
		// if dealer is greater
	} else if (
		parseInt($("#" + "dealer-blackjack-result").text()) >
		parseInt($("#" + "your-blackjack-result").text())
	) {
		lose();
		// if equal
	} else {
		draw();
	}
}

function win() {
	cash.play();
	$("#" + "wins").text(parseInt($("#" + "wins").text()) + 1);
	overLap = 0;
	setTimeout(() => {
		alert("You won!");
	});
}

function lose() {
	aww.play();
	$("#" + "losses").text(parseInt($("#" + "losses").text()) + 1);
	overLap = 0;
	alert("You lost!");
}

function busted() {
	aww.play();
	disableHitStand();
	$("#" + "losses").text(parseInt($("#" + "losses").text()) + 1);
	overLap = 0;
	setTimeout(() => {
		alert("You busted!");
	}, 100);
}

function draw() {
	$("#" + "draws").text(parseInt($("#" + "draws").text()) + 1);
	overLap = 0;
	alert("It's a draw");
}

function disableHitStand() {
	//enable deal button
	$("#" + "blackjack-deal-button").attr("onclick", "deal()");
	//disable hit
	$("#" + "blackjack-hit-button").attr("onclick", "messageForNewGame()");
	//disable stand
	$("#" + "blackjack-stand-button").attr("onclick", "messageForNewGame()");
}

function messageForNewGame() {
	alert("Click Deal for a new game.");
}

function messageToHitStand() {
	alert("Click Hit or Stand.");
}
