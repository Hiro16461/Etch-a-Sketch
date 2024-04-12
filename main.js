const gridContainer = document.querySelector('#grid-container');
const newGridBtn = document.querySelector('.create-new-grid');

function createInitialGrids() {
	for (let i = 0; i < 16 * 16; i++) {
		const gridItem = document.createElement('div');
		gridItem.classList.add('grid-item');
		gridContainer.appendChild(gridItem);
	}
}

function drawBGRed() {
	const gridItemsDiv = document.querySelectorAll('.grid-item');

	Array.from(gridItemsDiv).forEach((gridItem) => {
		gridItem.addEventListener('mouseenter', (e) => {
			e.target.style.backgroundColor = 'red';
		});
	});
}

createInitialGrids();

newGridBtn.addEventListener('click', (e) => {
	const newGridItems = +prompt('How many grid do yo want? (ex. 16 x 16)');
	if (newGridItems > 100) {
		alert('The number is too big. Please enter the number less than 100');
	}
	const gridItems = document.querySelectorAll('.grid-item');
	Array.from(gridItems).forEach((gridItem) => {
		gridItem.remove();
	});

	gridContainer.style.gridTemplateColumns = `repeat(${newGridItems}, 1fr)`;
	gridContainer.style.gridTemplateRows = `repeat(${newGridItems}, 1fr)`;

	for (let i = 1; i <= newGridItems * newGridItems; i++) {
		const gridItem = document.createElement('div');
		gridItem.classList.add('grid-item');
		gridContainer.appendChild(gridItem);
	}

    drawBGRed();
});

drawBGRed();
