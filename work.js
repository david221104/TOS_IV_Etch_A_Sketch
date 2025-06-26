const container = document.querySelector(".container");

const input = document.querySelector("#gridSize");
function inputButtonFunction() {
    let values = document.querySelector("#gridSize").value;
    console.log(values);
    input.value="";
    if(values >=1 && values <= 100){
        return values;
    }
    else{
        alert("Wrong input, try again");
    }
}

const inputButton = document.querySelector("#inputButton");
inputButton.addEventListener("click", inputButtonFunction);

let inputSizeGrid = 100;

//function that prints the grid
function canvas(inputNumber) {
    for(let i = 0; i < inputNumber ; i++) {
        for(let y = 0; y < inputNumber; y++) {
            const grid = document.createElement("div");
            let inputSize = 640 / inputNumber;
            grid.setAttribute("style", `width: ${inputSize}px; height: ${inputSize}px`);
            grid.addEventListener("mouseover", () => {
                grid.setAttribute("style", "background-color: black")
            });    
            container.appendChild(grid);
        }
    }
}

canvas(inputSizeGrid);

