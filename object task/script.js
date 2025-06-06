console.log("Object JS");

// Add a task to a tasks array where each task is an object with id, text, and completed.

function addTasks() {
	const tasks = [];
	tasks.push({
		id: 1,
		text: "JavaScript",
		completed: false,
	});

	console.log(tasks);
}

// addTasks();

// Toggle the completed status of a task by its id.

function toggleID(id) {
	let tasks = [
		{
			id: 1,
			completed: false,
		},
		{
			id: 123,
			completed: false,
		},
		{
			id: 12,
			completed: false,
		},
	];

	tasks = tasks.map((task) =>
		task.id === id ? { ...task, completed: !task.completed } : task
	);

	return tasks;
}

// console.log(toggleID(1));

//  Shopping Cart: Calculate Total Price
// Given a cart (array of item objects with price and qty), calculate total.

function shopingCart() {
	const cart = [
		{ name: "Pen", price: 10, qty: 2 },
		{ name: "Book", price: 50, qty: 1 },
	];

	let Total = 0;

	cart.forEach((item) => {
		Total += item.price * item.qty;
	});

	console.log(Total);

	let totalPrice = cart.reduce(
		(total, prc) => total + prc.price * prc.qty,
		0
	);

	console.log(totalPrice);
}

// shopingCart();

// Filter Products by Category
// Given an array of product objects, return only those in a specific category.

function productCategory(userCategory) {
	const products = [
		{ name: "Shirt", category: "clothing" },
		{ name: "Laptop", category: "electronics" },
		{ name: "Pants", category: "clothing" },
		{ name: "PC", category: "electronics" },
	];

	let filterCategory = products
		.filter(
			(product) =>
				product.category.toLowerCase() ==
				userCategory.toLowerCase().trim()
		)
		.map((product) => product.name)
		.join(" ");

	console.log(filterCategory);
}

// productCategory("clothing");

// Form Validation Object
// Validate that all fields in a form object are non-empty.

function validate() {
	const form = {
		name: "John",
		email: "",
		password: "123456",
	};

	let value = Object.values(form).every((key) => key.trim() !== "");
	console.log(value);
}

// validate();

// Convert CSV to Object Array

// Convert a CSV string to an array of objects.

function CSVtoArray(CSV) {
	const [header, ...rows] = CSV.split("\n");
	const keys = header.split(",");
	return rows.map((row) => {
		const values = row.split(",");
		return keys.reduce((obj, key, i) => {
			obj[key] = values[i];
			return obj;
		}, {});
	});
}

// console.log(CSVtoArray("name,age\nJohn,30\nSara,25"));

// Search in Object Array (Live Search)

// Search users by name (partial match, case insensitive).

function searchLive(user) {
	const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];

	const userSearch = users
		.filter((item) => {
			return item.name.toLowerCase().includes(user.toLowerCase());
		})
		.map((item) => item.name)
		.join(" ");

	console.log(userSearch);
}

searchLive("li");
