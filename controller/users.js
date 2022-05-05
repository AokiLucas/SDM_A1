import usersDB from "../data/users.js";

const controller = {
	home: (req, res) => {
		res
			.status(200)
			.send("<h2>Olá</h2> </br> <h2>Feito por: Lucas Aoki, RM: 821239078</h2>");
	},

	showList: (req, res) => {
		res.status(200).json(usersDB);
	},

	userById: (req, res) => {
		let id = req.params.id;

		res.status(200).json(userById(id));
	},

	addUser: (req, res) => {
		let {id, nome, email} = req.params;

		res.status(200).json(addUser(id, nome, email));
	},
};

function userById(id) {
	for (var i = 0; i < usersDB.users.length; i++) {
		if (id == usersDB.users[i].id) {
			return usersDB.users[i];
		}
	}
}

function addUser(id, nome, email) {
	if (usersDB.users[id-1] != null) {
		return "User já cadastrado";
	} else {
		var intId = parseInt(id);
		usersDB.users.push({id: intId, nome, email});

		return usersDB.users[intId - 1];
	}
}

export default controller;
