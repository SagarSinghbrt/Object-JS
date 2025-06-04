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
