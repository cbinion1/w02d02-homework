console.log("indeed");


const playerCards = [];
const computerCards = [];
const dealtCard = []

//keep a library of all the Pokemon cards that can be played (see the array in the "The Cards" section)
const game = {
				cards: [
					{name: "Bulbasaur", damage:60}, 
					{name: "Caterpie", damage:40},
					{name: "Charmander", damage:60},
					{name: "Clefairy", damage:50},
					{name: "Jigglypuff", damage:60},
					{name: "Mankey", damage:30},
					{name: "Meowth", damage:60},
					{name: "Nidoran - female", damage:60},
					{name: "Nidoran - male", damage:50},
					{name: "Oddish", damage:40},
					{name: "Pidgey", damage:50},
					{name: "Pikachu", damage:50},
					{name: "Poliwag", damage:50},
					{name: "Psyduck", damage:60},
					{name: "Rattata", damage:30}, 
					{name: "Squirtle", damage:60}, 
					{name: "Vulpix", damage:50}, 
					{name: "Weedle", damage:40}
	]



//const playedCards = [];

// 	deal(){
// 		//choose a random index within cards.length.
// 		//let dealtCard =cards.splice(index, 1)
// 		//return dealtCard
// 		//}
// 		//startGame(){
// 		// player.hand.push(dealtCard())
// 		// player.hand.push(dealtCard())
// 		// player.hand.push(dealtCard())	
// 		// }
// 		//same for computer's hand *3;

// 	}

// }

//Start game should be a function that deals the cards to the computer and the player


// const startGame = () => {
// 	playercards.push(dealtCard);
// 	return dealtCard;
// }

 


function dealItUp () {
let (i = game.cards.length-1; i >= 0; i++){
  array.splice(Math.floor(Math.random() * game.cards.length), 1);
  console.log(dealtCard);
	}
}
console.log(dealItUp);
//know what cards have been played

// know how many cards are left to be played overall

// track points for both the player and the computer Note: Points are determine by the following: 
// If the player's card beats the computer's card, the player gets one point (and vice versa). 
// If there is a tie, no one gets a point.

// track rounds

// track number of rounds won for both player and computer

// automatically deal 3 cards from the library to the player and 3 cards to the computer each round

// const deal = function(){
    
//     let dealtCard = Math.floor(Math.random() * 18);
    
//     game.cards.splice(card,1);
    
//     return game.cards[dealtCard];

// };


// // determine the winner of each play

// // stop once there are no cards left or not enough to deal 3 to each the player and computer

// const cardsFight = () => {
// 	if (game.cards.damage > )

// }








