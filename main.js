const gridContainer = document.querySelector("#grid-container");

function createInitialGrids() {
    for (let i = 0; i < 16*16; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item')
        gridContainer.appendChild(gridItem)
    }
}

createInitialGrids();

const gridItems = document.querySelectorAll('.grid-item')

Array.from(gridItems).forEach((gridItem) => {
    gridItem.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "red";
    })
})