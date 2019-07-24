var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");

var colors = ["red", "blue", "tomato", "yellow", "orange", "cyan", "lime", "aqua"];

function myFunction(e){
    var x = e.offsetX;
    var y = e.offsetY;
    ctx.fillStyle = chooseColor();
    ctx.fillRect(x, y, randomLengths(), randomLengths());
}

function chooseColor(){
    var randomColor =   Math.floor(Math.random()*8);
    var color = colors[randomColor];
    return color; 
}

function randomLengths(){
    var randomSize = Math.floor(Math.random()*50)+20;
    return randomSize;
}