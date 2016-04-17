/**
 * Created by andreasoikonomou on 16/04/2016.
 */
//Global var
var stage;
var image;
var shapeArray;

var stageWidth = 1800;
var stageHeight = 1000;

function init() {

    stage = new createjs.Stage("demoCanvas");
    image = new createjs.Bitmap("img/gear.png");
    stage.addChild(image);


    shapeArray = [];
    var a = createjs.Ticker.addEventListener("tick", handleTick);
    a.framerate = 3;

    myLoop(stage, 60, stageWidth, stageHeight, shapeArray);
    setCanvasBackground();

}

function circle(stage, posX, posY, radius, color, shapeArray) {

    var circle = new createjs.Shape();
    circle.graphics.beginFill(color).drawCircle(posX, posY, radius);
    circle.x = randomInteger(1, 100);
    shapeArray.push(circle);
    stage.addChild(circle);
    stage.update();

}

function rectangle(stage, posX, posY, radius, color) {

    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawRect(posX, posY, radius);
    circle.x = randomInteger(1, 400);
    circle.y = randomInteger(1, 400);
    stage.addChild(circle);
    stage.update();

}


function myLoop(stage, iterations, stageWidth, stageHeight, shapeArray) {


    for (var i = 1; i < iterations; i++) {

        circle(stage, randomInteger(5, stageWidth), randomInteger(5, stageHeight), randomInteger(5, 50), randomHexColor(), shapeArray);
    }

}


function randomInteger(min, max) {

    var randomNumber;
    randomNumber = Math.floor((Math.random() * max) + min);

    console.log(randomNumber.toString(16));
    return randomNumber;


}

function randomHexColor() {

    var randomHexColor;
    randomHexColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    return randomHexColor;

}


/*
function handleTick(event) {

shapeArray.forEach(function(entry){

    shapeArray[entry].x += 5;


})
console.log(randomInteger(1,100));
    stage.update();
}
*/




function handleTick(event) {



    image.x += 10;
    checkGraphicAgainstBoundaries(image, 0, stageWidth, 0, stageHeight);
    moveBalls();
   // console.log(randomInteger(1,100));
    stage.update();
}


function checkGraphicAgainstBoundaries(graphic,left, right, top, bottom){

    if (graphic.x>= right){
        graphic.x=left+10;
    }

    if (graphic.x<= left){
        graphic.x=right;
    }

    if (graphic.y>= bottom){
        graphic.y=top;
    }

    if (graphic.y>= bottom){
        graphic.y=top;
    }

    message("Right="+right);

}

function moveBalls(){

    for(var i=0;i<shapeArray.length;i++){

        shapeArray[i].x += randomInteger(1,20);
        shapeArray[i].y += randomInteger(1,20);

    }

}


function message(text){

    console.log(text);

}
