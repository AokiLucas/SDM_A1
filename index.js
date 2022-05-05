import express from "express";
import config from "config";
import usersRoute from "./routes/users.js";

var app = express();
app.use(express.urlencoded({extended: true}));

let port = config.get("server.port");

usersRoute(app);

app.listen(port, () => {
	console.log("Estou funcionando");
});
