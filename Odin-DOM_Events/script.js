function getUserInput() {
    const input = document.getElementById("grid-size");
    let size = Number(input.value);

    if (!size || size < 1) {
        size = 16;
    }

    if (size > 100) {
        size = 100;
    }

    input.value = size;
    return size;
}

function createGrid(size = 16) {
    const container = document.getElementById("grid-container");
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    const totalCells = size * size;

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        container.appendChild(cell);
    }
}

let isDrawing = false;

function colorCell(event) {
    if (!event.target.classList.contains("grid-cell")) {
        return;
    }

    event.target.style.backgroundColor = "green";
}

function enableHoverEffect() {
    const container = document.getElementById("grid-container");

    container.addEventListener("mousedown", (event) => {
        if (event.button !== 0) {
            return;
        }

        isDrawing = true;
        colorCell(event);
    });

    container.addEventListener("mouseover", (event) => {
        if (!isDrawing) {
            return;
        }

        colorCell(event);
    });

    document.addEventListener("mouseup", () => {
        isDrawing = false;
    });

    container.addEventListener("dragstart", (event) => {
        event.preventDefault();
    });
}

function generateGrid() {
    const size = getUserInput();
    createGrid(size);
}

function clearGrid() {
    const cells = document.querySelectorAll(".grid-cell");

    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
}

function setupButtons() {
    const generateButton = document.getElementById("generate-grid");
    const clearButton = document.getElementById("clear-grid");

    generateButton.addEventListener("click", generateGrid);
    clearButton.addEventListener("click", clearGrid);
}

createGrid(getUserInput());
enableHoverEffect();
setupButtons();