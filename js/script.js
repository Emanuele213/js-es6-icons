const arrIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const eleIconsContainer = document.querySelector('#icons-container');
const eleSelect = document.querySelector('#type-filter');

// stampare le card delle icone
populateSelect(arrIcons, eleSelect);
randomizeColors(arrIcons);
renderIcons(arrIcons, eleIconsContainer);
eleSelect.addEventListener('change', filterIcons);


// FUNCTIONS

function renderIcons(arrData, eleContainer) {
	eleContainer.innerHTML = '';
	arrData.forEach(objIcon => eleContainer.innerHTML += generateCard(objIcon));

	// altro metodo 
	// for (let i = 0; i < arrData.length; i++) {
	// 	const objIcon = arrData[i];
	// 	eleContainer.innerHTML += generateCard(objIcon);
	// }
}

function generateCard(objData) {
	return `
		<div class="box">
			<i class="${objData.family} ${objData.prefix}${objData.name}" style="color:${objData.color}"></i>
			<div class="title">${objData.name}</div>
		</div>
	`;
}

function populateSelect(arrData, eleSelect) {
	// estrapolare i type dall'array dei dati
	const arrTypes = [];
	arrData.forEach(objIcon => arrTypes.includes(objIcon.type) ? '' : arrTypes.push(objIcon.type));

	console.log(arrTypes);

	// aggiungere le options per ciscun tipo
	arrTypes.forEach(type => eleSelect.innerHTML += `<option value="${type}">${type}</option>`);
}

function filterIcons() {
	const selectedType = this.value; // qui avrebbe funzionato anche eleSelect essendo in scope, ma ci sono casi in cui la variabile non e' in scope, il this funziona sempre

	// filtrare array
	if (selectedType !== '') {
		arrIconsFiltered = arrIcons.filter(objIcon => objIcon.type === selectedType)
	} else {
		arrIconsFiltered = arrIcons;
	}
	console.log(arrIconsFiltered);

	// renderizzare array delle icone filtrate
	renderIcons(arrIconsFiltered, eleIconsContainer);
}

function randomizeColors(arrIcons) {
	arrIcons.forEach(objIcon => objIcon.color = getRandomColor());
}

function getRandomColor() {
	const acceptableChars = '0123456789ABCDEF';
	let color = '#'
	for (let i = 0; i < 6; i++) {
		color += acceptableChars[getRandomInteger(0, 15)];
	}
	return color;
}

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}