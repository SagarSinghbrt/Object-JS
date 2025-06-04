console.log("Object JS");

// -------------- Challenge 1: Count Frequency of Characters -----------------------

function countFrequency(value) {
	let freq = {};
	let splitValue = value.toLowerCase().split("");
	for (let str of splitValue) {
		freq[str] = (freq[str] || 0) + 1;
	}
	return freq;
}

// console.log(countFrequency("JavaScripts"));

// ------------ Challenge 2: Find the Highest Scorer ------------------

function scoreHigh() {
	const score = {
		laure: 98,
		borke: 88,
		john: 78,
	};
	let highScore = 0;
	let topper;

	for (let student in score) {
		if (score[student] > highScore) {
			highScore = score[student];
			topper = student;
		}
	}

	return `The Highest score is ${highScore} which is scored by ${topper}`;
}

// console.log(scoreHigh());

// --------------------- Challenge 3: Check if Object is Empty -------------------------

function isEmpty(obj) {
	return Object.keys(obj).length === 0;
}

console.log(isEmpty({}));

// --------------------- Challenge 5: Convert Array of Objects into One Object -------------------------

const arr = [
	{ id: 1, name: "Ram" },
	{ id: 2, name: "Shyam" },
];

const newObj = {};

for (let obj of arr) {
	newObj[obj.id] = obj.name;
}

// console.log(newObj);

// ---------------------  Challenge 6: Swap Object Keys and Values -------------------------

function swapObj(obj) {
	const swapobject = {};

	for (let key in obj) {
		swapobject[obj[key]] = key;
	}

	return swapobject;
}

// console.log(swapObj({ a: "1", b: "2" }));
