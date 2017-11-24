class DeckOfCards {
    
    constructor(){
        let suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
        let types = ["Ace",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"];
        this.deck = [];
        let i = 1;
        for(let suit of suits){
            for(let type of types){
                this.deck.push({
                    id: i,
                    desc: `${type} of ${suit}`
                }); i++;
            }
        }
        return this;
    }

    shuffle(){
        let shuffler = function(ordered, shuffled){
            if(ordered.length === 0) { return shuffled; }
            let r = Math.floor((Math.random() * ordered.length));
            shuffled.push(ordered[r]);
            ordered.splice(r, 1);
            return shuffler(ordered, shuffled);
        };
        this.deck = shuffler(this.deck, []);
        return this;
    }

    reset(){
        let deck = [];
        for(let card of this.deck){
            for(let i in card){
                deck[card.id-1] = card;
            }
        }
        this.deck = deck;
        return this;
    }

    deal(){
        let r = Math.floor((Math.random() * this.deck.length));
        let dealt = this.deck[r];
        this.deck.splice(r, 1);
        return dealt;
    }
}

let cards = new DeckOfCards();
cards.shuffle();
cards.reset();

class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    draw(deck) { this.hand.push(deck.deal()); return this; }
    discard() { this.hand.pop(); return this; }

}

let player = new Player();
player.draw(cards).draw(cards).draw(cards).draw(cards).draw(cards);
player.discard().discard().draw(cards).draw(cards);
console.log(player.hand);