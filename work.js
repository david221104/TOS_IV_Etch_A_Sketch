const container = document.querySelector(".container");

//function that prints the grid
function canvas(inputNumber) {
    for(let i = 0; i < inputNumber ; i++) {
        for(let y = 0; y < inputNumber; y++) { //prints divs in the same line, then later wraps them, in CSS
            const grid = document.createElement("div");
            let inputSize = 640 / inputNumber;
            grid.setAttribute("style", `width: ${inputSize}px; height: ${inputSize}px`);
            grid.addEventListener("mouseover", () => {
                grid.style.backgroundColor = "black"; //must use this, setAttribute overrides all the previous style properties with just the background color,
                //therefore removing the previous width/height properties, while by this method only one property, that being backgroundColor, is changed
            });    
            container.appendChild(grid);
        }
    }
}

//default canvas size, calling the function
let inputSizeGrid = 10;
canvas(inputSizeGrid);


//getting a function to get the input from the input box
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

//generating the new canvas via a button
const inputButton = document.querySelector("#inputButton");
inputButton.addEventListener("click", () => {
    container.textContent = ""; //removes the previous canvas
    inputButtonFunction();
    canvas(inputSizeGrid);
});


