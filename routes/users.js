import config from "config";
import controller from "../controller/users.js";

export default (app) => {
	const defaultPath = config.get("server.path_root");
	const routeName = "users";

	app.route(defaultPath).get(controller.home);

	app.route(defaultPath + routeName).get(controller.showList);

	app.route(defaultPath + routeName + "/:id").get(controller.userById);

    app.route(defaultPath + routeName + "/:id/:nome/:email").post(controller.addUser);
};
