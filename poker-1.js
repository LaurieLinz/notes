const determineHand = (hand) => {
    const cards = hand.split(' ');
    // logic to determine suit
    // Understand Array.prototype.map and other functions of similar form (foreach, reduce, etc)
    const suits = cards.map((card) => {
        return card[card.length-1];
    });

    const isFlush = (suits) => {
        return (new Set(suits)).size === 1;
    };
    
    
    const numericCardValues = (values) => {
        return values.map((value) => {
            if (value === 'J') {
                return '11';
            } else if (value === 'Q') {
                return '12';
            } else if (value === 'K') {
                return '13';
            } else if (value === 'A') {
                return '14';
            }
            return value;
        });
    };
    
    const values = numericCardValues(cards.map((card) => {
        return card.substring(0, card.length-1);
    }));

    const hasFourOfaKind = (values) => {
        let cardValues = [];
        let cardFrequencies = [];
        values.forEach((value) => {
            if(!cardValues.includes(value)) {
                cardValues.push(value);
                cardFrequencies.push(1);
            } else {
                cardFrequencies[cardValues.indexOf(value)] = cardFrequencies[cardValues.indexOf(value)]+1;
            }
        });
        return cardFrequencies.includes(4);
    };

    const hasThreeOfaKind = (values) => {
        let cardValues = [];
        let cardFrequencies = [];
        values.forEach((value) => {
            if(!cardValues.includes(value)) {
                cardValues.push(value);
                cardFrequencies.push(1);
            } else {
                cardFrequencies[cardValues.indexOf(value)] = cardFrequencies[cardValues.indexOf(value)]+1;
            }
        });
        return cardFrequencies.includes(3);
    };

    const isFullHouse = (values) => {
        let cardValues = [];
        let cardFrequencies = [];
        values.forEach((value) => {
            if(!cardValues.includes(value)) {
                cardValues.push(value);
                cardFrequencies.push(1);
            } else {
                cardFrequencies[cardValues.indexOf(value)] = cardFrequencies[cardValues.indexOf(value)]+1;
            }
        });
        return cardFrequencies.includes(3 & 2);
    };
    
    const hasPair = (values) => {
        let cardValues = [];
        let cardFrequencies = [];
        values.forEach((value) => {
            if(!cardValues.includes(value)) {
                cardValues.push(value);
                cardFrequencies.push(1);
            } else {
                cardFrequencies[cardValues.indexOf(value)] = cardFrequencies[cardValues.indexOf(value)]+1;
            }
        });
        return cardFrequencies.includes(2 && !3);
    };



    const isStraight = (values)=>{
        values.sort(function (a, b){
            return a - b;
            if(values[4] - values[0] === 4) {
                return true
            } else {
                return false
            }
        });
    };

    const isStraightFlush = isFlush() && isStraight();

    

// switch (suits, values) {

//     case straightFlush:
//         if suits 
//     case fourOfaKind:
//     case flush:
//     case straight:
//     case fullHouse:
//     case threeOfaKind:
//     case twoPair:
//     case pair:
//     case highCard:

// }
};

determineHand(hand);


