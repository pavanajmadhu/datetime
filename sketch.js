const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    textSize(20);
    text("Time  "+min,100,20)


    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var respond=await fetch("https://worldtimeapi.org/api/timezone/europe/london")
    // write code to fetch time from API
    var respondJson=await respond.json();


    //change the data in JSON format
    var Dateandtime = respondJson.datetime;


    // write code slice the datetime
   // hourd= Dateandtime.slice(14,16);
     hour= Dateandtime.slice(11,13);
     min= Dateandtime.slice(11,16);

    



if(hour>=04 && hour<=06){
    bg = "sunrise1.png"
}
else if(hour>=06 && hour<=08){
    bg = "sunrise2.png"
}
else if(hour>=08 && hour<=10){
    bg = "sunrise3.png"
}
else if(hour>=10 && hour<=12){
    bg = "sunrise4.png"
}
else if(hour>=12 && hour<=14){
    bg = "sunrise5.png"
}
else if(hour>=14 && hour<=16){
    bg = "sunrise6.png"
}
else if(hour>=16 && hour<=18){
    bg = "sunset7.png"
}
else if(hour>=18 && hour<=20){
    bg = "sunset8.png"
}
else if(hour>=20 && hour<=22){
    bg = "sunset9.png"
}
else if(hour>=23 && hour==0){
    bg = "sunset10.png"
}
else if(hour==0 && hour<=03){
    bg = "sunset11.png"
}
else{
    bg = "sunset12.png"
}

backgroundImg=loadImage(bg);

    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
