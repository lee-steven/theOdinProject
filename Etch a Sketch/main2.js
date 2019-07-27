const container = document.getElementById('container');

//Setting Up Default Grid
createDiv(16);
addMouseHover(); 

function createDiv(number){
    for(let i = 0; i < Math.pow(number,2); i++){
        let divSquare = document.createElement('div'); 
        divSquare.classList.add('box');
        container.appendChild(divSquare);
    }
}

//Useful Answer from Stack Overflow:
// https://stackoverflow.com/questions/52563263/using-the-css-grid-repeat-declaration-in-javascript
function setGrid(number){
    // container.setAttribute('style', 'grid-template-columns: repeat(' + number + ', 1fr)');
    // container.setAttribute('style', 'grid-template-rows: repeat(' + number + ', 1fr)');
    container.style.setProperty('--gridSize', number);
}

// Notes for Myself: 
// Tried to use getElementByClassName but didn't work got an error message, had to use querySelectorAll instead
// According to https://www.reddit.com/r/learnjavascript/comments/884hc1/getelementsbyclassname_vs_queryselectorall/ 
// "document.GetElementsByClassName returns a HTMLCollection object which does not have the forEach method" which is why it wasn't working for me
function addMouseHover(){
    var gridBoxes = document.querySelectorAll('.box');
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener("mouseenter", (e) => {
            gridBox.style.backgroundColor = "#333333";
        });
    });
}

function deleteChild(){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
}

let clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener("click", ()=> {
    let clearBoxes = document.getElementsByClassName('box');
    for(let i = 0; i<clearBoxes.length; i++){
        clearBoxes[i].style.backgroundColor="white";
    }
});

let newGridBtn = document.getElementById('newGridBtn');
newGridBtn.addEventListener("click", ()=> {
    var newGridSize = prompt("Enter a new grid size!");
    deleteChild();
    createDiv(newGridSize);
    addMouseHover();
    setGrid(newGridSize);
});

