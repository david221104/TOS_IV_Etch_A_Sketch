const container = document.querySelector(".container");

let inputSizeGrid = 10;
canvas(inputSizeGrid);

const input = document.querySelector("#gridSize");
function inputButtonFunction() {
    let values = document.querySelector("input").value;
    input.value="";
    if(values >=1 && values <= 100){
        inputSizeGrid = Number(values); // convert to number;
        return inputSizeGrid;
    }
    else{
        alert("Wrong input, try again");
    }
}

const inputButton = document.querySelector("#inputButton");
inputButton.addEventListener("click", () => {
    container.textContent = "";
    inputButtonFunction();
    canvas(inputSizeGrid);
});


//function that prints the grid
function canvas(inputNumber) {
    for(let i = 0; i < inputNumber ; i++) {
        for(let y = 0; y < inputNumber; y++) {
            const grid = document.createElement("div");
            let inputSize = 640 / inputNumber;
            grid.setAttribute("style", `width: ${inputSize}px; height: ${inputSize}px`);
            grid.addEventListener("mouseover", () => {
                grid.style.backgroundColor = "black";
            });    
            container.appendChild(grid);
        }
    }
}
