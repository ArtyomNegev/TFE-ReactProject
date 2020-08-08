//require('dotenv').config();  //Commentaire car ne fonctionne pas avec le require -> Trouver une solution
//const createServer = require("createServer");
//const db = require("db");
import createServer from "./createServer.js";
import db from "./db.js";

const server = createServer();

server.start(
	{
		cors: {
			credentials: true,
			//origin: process.env.FRONTEND_URL
			origin: "http://localhost:7777"
		}
	},
	response => {
		console.log(`Serveur démarré http://localhost:${response.port}`);
	}
);