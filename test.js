/**
 * Created by andreasoikonomou on 16/04/2016.
 */

// The first version of this program creates random, custom size, patterned backgrounds


//Global var
var stage;
var image;
var shapeArray;

var canvasWidth;
var canvasHeight;

// Initialise environment

function init() {


    //canvasWidth=document.getElementById("demoCanvas").width;
    //canvasHeight=document.getElementById("demoCanvas").height;
    //
    stage = new createjs.Stage("demoCanvas"); // Bind the createjs library to the html canvas
    //
    //image = new createjs.Bitmap("img/gear.png"); // Load an image resource into this variable
    //image.regX = image.width / 2; // registration point?
    //image.regY = image.height / 2;
    //stage.addChild(image); // Add image variable to stage. If not on stage it's not visible


    shapeArray = [];


    // Create graphics
    var type = "circle";
    var numberOfObjects = 50; // How many objects do you want;
    var minSize = 10; // Minimum graphic size
    var maxSize = 100; // Maximum graphic size
    var color = randomHexColor(); // Random colour from random colour function
    var xPos = randomInteger(0, canvasWidth); // Graphic position somewhere withing the screen bounds
    var yPos = randomInteger(0, canvasWidth); // Graphic position somewhere withing the screen bounds


    // createGraphics(type, numberOfObjects, minSize, maxSize, color, xPos, yPos); // Call createGraphics function with relevant parameters

    // Provides access to a ticker for animation properties. You can update the stage on every tick
    createjs.Ticker.addEventListener("tick", tick);
    // these are equivalent, 1000ms / 40fps = 25ms
createjs.Ticker.setInterval(25);
createjs.Ticker.setFPS(40);


    // Drag and drop section
    // enable touch interactions if supported on the current device:
    createjs.Touch.enable(stage);

    // enabled mouse over / out events
    stage.enableMouseOver(10);
    stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas



    message("I did the init");

}

function setupCanvasByUser() {

    // Get current values from form fields
    canvasWidth = document.getElementById("canvasWidth").value;
    canvasHeight = document.getElementById("canvasHeight").value;

    message("New canvas size is " + canvasWidth + " * " + canvasHeight);

    // Set canvas size to what the user put in the form fields
    document.getElementById("demoCanvas").width = canvasWidth;
    document.getElementById("demoCanvas").height = canvasHeight;

    setCanvasBackground();


}

function setCanvasBackground() {

    // Change the canvas' background colour (by painting a rectangle in it)
    var canvas = document.getElementById("demoCanvas");
    var context = canvas.getContext("2d");
    context.fillStyle = document.getElementById("canvasBackgroundColor").value;
    context.fillRect(0, 0, canvasWidth, canvasHeight);

}


function drawCircles() {

    //Reset the circles array so that it has nothing in it
    //shapeArray=[]; // Apparently Only works on EMPTY arrays. Otherways it leaves it unchanged
    shapeArray.length = 0;
    stage.removeAllChildren(); //Remove any sprites from previous operations perhaps from the stage

    var numberOfObjects = document.getElementById("numberOfCircles").value;

    createGraphics("circle", numberOfObjects);

}


function createGraphics(type, numberOfObjects) {

    for (var i = 0; i < numberOfObjects; i++) {
        if (type == "circle") {
            circle(stage, randomInteger(0, canvasWidth), randomInteger(0, canvasHeight), randomInteger(10, 100), randomHexColor());
        }
    }

}


function circle(stage, xPos, yPos, radius, color) {

    var circle = new createjs.Shape();
    circle.graphics.beginFill(color).drawCircle(xPos, yPos, radius);
    circle.mySpeed = randomInteger(1,10);
    circle.myRadius = radius;

    message(circle.myRadius);
    //circle.x = xPos;
    //circle.y= yPos;

    shapeArray.push(circle);
    stage.addChild(circle);
    stage.update();

}




function tick() {
    console.log("TICK!!!");

    for(var i=0;i<shapeArray.length;i++) {
        shapeArray[i].y -= shapeArray[i].mySpeed;


        if(shapeArray[i].y < canvasHeight*-1){

            // keep graphics within canvas after they come out of it. Code goes here
        }

        // Recoginses rollover but the scale bit doesn't work.
        shapeArray[i].on("rollover", function (evt) {
            this.scaleX = this.scale * 1.5;

        });

    }




    stage.update();


}