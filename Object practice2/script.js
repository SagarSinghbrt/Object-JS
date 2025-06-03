console.log("Objects in JS");

const person = {
	name: "Sagar Singh",
	address: {
		street: "Bank Road",
		city: "Biratnagar",
		country: "Nepal",
	},
};

// console.log(person);
// console.log(person.address);
// console.log(person.address.city);

const playlist = {
	name: "Arijit Singh",
	songs: ["Tu hi yaar mera", "Ae dil he muskil", "Apna banale piya"],
};

// console.log(playlist.songs[0]);

const obj = {
	language: "JavaScript",
	framework: "React",
	Nech: "Front-End Developer",
};

// console.log(Object.entries(obj));

// console.log(Object.keys(obj).length);

// obj.destination = "USA";

const scores = {
	math: 40,
	science: 50,
	english: 45,
};

for (let key in scores) {
	scores[key] *= 2;
}

// console.log(scores);

const o1 = {
	math: 40,
	english: 45,
};

const o2 = {
	physics: 38,
	chemistry: 48,
};

const objToArray = { ...o1, ...o2 };
console.log(objToArray);
