const container = document.getElementById('container');
const defaultSize = 16;

function createDiv(){
    let createDiv = document.createElement('div');
    createDiv.classList.add('square');
    container.appendChild(createDiv);
}

function createGridSize(size){
    for(let i =0; i< Math.pow(size, 2); i++){
        createDiv();
    }
    currentGridSize = Math.pow(size,2);
}

createGridSize(defaultSize);


const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseenter', (e) =>{
        square.style.backgroundColor = "black"; 
    });
});




var clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', ()=> {
    squares.forEach((square) => {
        square.style.backgroundColor = "white"; 
    });
})

var newGridBtn = document.getElementById('newGrid');
newGridBtn.addEventListener('click', ()=> {
    var gridSize = prompt("Enter a grid size for your Sketch!"); 
    deleteGrid();
    console.log(container.style.setProperty('--gridSize', gridSize)); 
    createGridSize(gridSize);
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', (e) =>{
            square.style.backgroundColor = "black"; 
        });
    });  
})

function deleteGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}