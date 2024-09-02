const express = require("express");
const { Request, Response } = require("@types/express");

const app = express();
const port = 8124;

app.get("/", (req, res) => {
	res.send("Hello World!");
})

app.get("/emoji", (req, res) => {
	res.send("🍎");
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
