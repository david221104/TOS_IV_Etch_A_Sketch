const container = document.querySelector(".container");

function canvas() {
    for(let i = 0; i < 16; i++) {
        for(let y = 0; y < 16; y++) {
            const grid = document.createElement("div");
            grid.addEventListener("mouseover", () => {
                grid.setAttribute("style", "background-color: black")
            });    
            container.appendChild(grid);
        }
    }
}

canvas();