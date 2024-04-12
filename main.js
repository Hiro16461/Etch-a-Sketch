const gridContainer = document.querySelector('#grid-container');
const newGridBtn = document.querySelector('.create-new-grid');
const randomColorBtn = document.querySelector('.random-color');
const darkeningEffectBtn = document.querySelector('.dark-color');

function createInitialGrid() {
	for (let i = 0; i < 16 * 16; i++) {
		const gridItem = document.createElement('div');
		gridItem.classList.add('grid-item');
		gridContainer.appendChild(gridItem);
	}
}

function createNewGrid() {
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
}

function drawBGRed() {
	const gridItemsDiv = document.querySelectorAll('.grid-item');

	Array.from(gridItemsDiv).forEach((gridItem) => {
		gridItem.addEventListener('mouseenter', (e) => {
			e.target.style.backgroundColor = 'red';
		});
	});
}

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function drawBGRandom() {
	const gridItemsDiv = document.querySelectorAll('.grid-item');

	Array.from(gridItemsDiv).forEach((gridItem) => {
		gridItem.addEventListener('mouseenter', (e) => {
			e.target.style.backgroundColor = getRandomColor();
		});
	});
}

function drawBGDark() {
	const gridItemsDiv = document.querySelectorAll('.grid-item');

	Array.from(gridItemsDiv).forEach((gridItem) => {
		gridItem.addEventListener('mouseenter', (e) => {
            e.target.style.filter = "grayscale(100%)"
		});
	});
}

createInitialGrid();
drawBGRed();

newGridBtn.addEventListener('click', (e) => {
	createNewGrid();
	drawBGRed();
});

randomColorBtn.addEventListener('click', (e) => {
	drawBGRandom();
});

darkeningEffectBtn.addEventListener('click', (e) => {
    drawBGDark();
})
