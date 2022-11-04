import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
	console.log(users);
	res.send(users);
};

export const getUser = (req, res) => {
	const { id } = req.params;

	const foundUser = users.find((user) => user.id === id);
	res.send(foundUser);
};

export const createUser = (req, res) => {
	const user = req.body;

	users.push({ ...user, id: uuidv4() });

	res.send(`User with the name ${user.firstName} was added to the database`);
};

export const deleteUser = (req, res) => {
	const { id } = req.params;

	users = users.filter((user) => user.id !== id);

	res.send(`User with the id ${id} was deleted`);
};

export const editUser = (req, res) => {
	const { id } = req.params;

	const user = users.find((user) => user.id === id);

	const { firstName, lastName, age } = req.body;

	firstName && (user.firstName = firstName);
	lastName && (user.lastName = lastName);
	age && (user.age = age);

	res.send(`User with ID ${id} has been updated`);
};
