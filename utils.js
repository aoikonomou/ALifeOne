/**
 * Created by andreasoikonomou on 19/04/2016.
 */


// Write debug messages to console
function message(text){

    console.log(text);

}

// Return a random color in HEX
function randomHexColor() {

    var randomHexColor;
    randomHexColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomHexColor;

}

// Return a random Integer between min & max
function randomInteger(min, max) {

    var randomNumber;
    randomNumber = Math.floor((Math.random() * max) + min);

    //console.log(randomNumber.toString(16));
    return randomNumber;

}