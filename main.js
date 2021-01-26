canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background="mars.jpg";
roverimage="rover.png";
rwidth=100;
rheight=90;
rx=10;
ry=10;

function add(){
    ping=new Image();
    ping.onload=uploadb;
    ping.src=background;
    ring=new Image();
    ring.onload=uploadr;
    ring.src=roverimage;
}
function uploadb(){
    ctx.drawImage(ping,0,0,canvas.width,canvas.height);

}
function uploadr(){
    ctx.drawImage(ring,rx,ry,rwidth,rheight);

}



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38')
{
up();
console.log("up");
}
if(keyPressed == '40')
{
down();
console.log("down");
}
if(keyPressed == '37')
{
left();
console.log("left");
}
if(keyPressed == '39')
{
right();
console.log("right");
}
}

function up()
{
if(ry >=0)
{
ry = ry - 10;
console.log("When up arrow is pressed,  x = " + rx + " | y = " +ry);
uploadb();
uploadr();
}
}
function down()
{
if(ry <=500)
{
ry =ry+ 10;
console.log("When down arrow is pressed,  x = " + rx + " | y = " +ry);
uploadb();
uploadr();
}
}
function left()
{
if(rx >= 0)
{
rx =rx - 10;
console.log("When left arrow is pressed,  x = " + rx + " | y = " +ry);
uploadb();
uploadr();
}
}
function right()
{
if(rx <= 700)
{
rx =rx + 10;
console.log("When right arrow is pressed,  x = " + rx + " | y = " +ry);
uploadb();
uploadr();
   }
}
