const container = document.getElementById('container');

createDiv(16);

function createDiv(number){
    for(let i = 0; i < Math.pow(number,2); i++){
        let divSquare = document.createElement('div'); 
        divSquare.classList.add('box');
        container.appendChild(divSquare);
    }
}

function mouseListen(){
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
    mouseListen();
});

