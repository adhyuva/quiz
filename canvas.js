
/*let shirt = document.getElementById("shirtColor").value;
let hair = document.getElementById("hairColor").value;
let eye = document.getElementById("eyeColor").value;
let pant = document.getElementById("pantColor").value;
let shoe = document.getElementById("shoeColor").value;
let skin = document.getElementById("skinColor").value;*/

function makePerson () {}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//sky
ctx.fillStyle = "lightBlue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "Chocolate";
//face
ctx.fillRect(50, 10, 50, 50);
//neck
ctx.fillRect(70, 60, 10, 20);
//arms
ctx.fillRect(20,100, 30, 10);
ctx.fillRect(100, 100, 30, 10);
ctx.fillStyle = "Green";
//body
ctx.fillRect(50, 80, 50, 70);
//shirt arms
ctx.fillRect(30,100, 20, 10);
ctx.fillRect(100, 100, 20, 10);
ctx.fillStyle = "Blue";
//legs
ctx.fillRect(50, 150, 10, 50);
ctx.fillRect(90, 150, 10, 50);
ctx.fillStyle = "black";
//hair
ctx.fillRect(50, 5, 50, 10);
//feett
ctx.fillRect(30, 190, 20, 10);
ctx.fillRect(100, 190, 20, 10);
//eyes
ctx.beginPath();
ctx.arc(65, 25, 5, 0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();
ctx.arc(85, 25, 5, 0, Math.PI * 2, true);
ctx.fill();
//mouth
ctx.beginPath();
ctx.arc(75, 45, 6, 0, Math.PI, false);
ctx.stroke();
//ground
ctx.fillStyle = "Green";
ctx.fillRect(00, 200, 150, 20);