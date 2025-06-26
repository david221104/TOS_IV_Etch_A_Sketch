const container = document.querySelector(".container");

//random color function
const getMyColor = () => {
    let n = (Math.random() * 0xffffff * 1000000).toString(16);
    console.log(n);
    return "#" + n.slice(0, 6);
}

//function that prints the grid
function canvas(inputNumber) {
    for(let i = 0; i < inputNumber ; i++) {
        for(let y = 0; y < inputNumber; y++) { //prints divs in the same line, then later wraps them, in CSS
            const grid = document.createElement("div");
            let inputSize = 640 / inputNumber;
            let opacityValue = 10
            grid.setAttribute("style", `width: ${inputSize}px; height: ${inputSize}px;`);
            grid.addEventListener("mouseover", () => {
                grid.style.backgroundColor = getMyColor(); //must use this, setAttribute overrides all the previous style properties with just the background color,
                //therefore removing the previous width/height properties, while by this method only one property, that being backgroundColor, is changed
                grid.style.opacity = `${opacityValue+=10}%` 
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


/*
Regarding colors:

000000-FFFFFF

it's not really a spectrum but an instruction how to mix together red, green and blue to get the colour you want

the first two digits tell you how much red you need

the second two how much green

and the third two how much blue

the pairs are hexadecimal numbers, that means instead of 10 digits (0-9, decimal) they use 16 (0-9 + A-F, where A=10, B=11, and so on until F=15)

that way, "00" means 0 parts, "01" means 1 part, all the way up to "FF" which means 255 parts

so FF0000 is 255 parts red, 0 parts green and 0 parts blue => really, really red

0xffffff - 0x is purely a syntax marker, without it JS would not recognize it as a hexadecimal number, but rather as an invalid syntax or a string
*/ 