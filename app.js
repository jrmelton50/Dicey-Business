let $diceContainer = $("#diceContainer");
let diceArray = [];
class Die {
    constructor() {
        this.value;
        this.$div = $("<div class='die'></div>");
        this.$div.click(() => {
            this.roll();
        });
        this.$div.dblclick(() => {
            this.$div.remove() // delete div from container
            removeDie(this);  // delete instance from array
        });
        this.roll();
        this.$div.appendTo($diceContainer);
    }
    
    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
        console.log();
        this.$div.text(getUnicode(this.value));
    }
}

function createDie() {
    diceArray.push(new Die());
}

function rollDice() {
    for (let i=0; i<diceArray.length; i++) {
        diceArray[i].roll();
    }
}

function sumDice() {
    let sum = 0;
    for (let i=0; i<diceArray.length; i++) {
        sum += diceArray[i].value;
    }
    alert("Sum is " + sum);
}

function removeDie(dieInstance) {
    for (let i=0; i<diceArray.length; i++) {
        let currentDie = diceArray[i];
        if (currentDie == dieInstance) {
            diceArray.splice(i, 1);
        }
    }
}

function getUnicode(value) {
    if (value == 1) {
        return "\u2680"; // "&#9856;";
    }
    else if (value == 2) {
        return "\u2681"; // "&#9857;";
    }
    else if (value == 3) {
        return "\u2682"; //"&#9858;"; 
    }
    else if (value == 4) {
        return "\u2683"; // "&#9859;"; 
    }
    else if (value == 5) {
        return "\u2684"; // "&#9860;"; 
    }
    else { // this will default to 6
        return "\u2685"; // "&#9861;"; 
    }
}