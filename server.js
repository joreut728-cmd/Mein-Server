const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Server läuft");
});

app.get("/hello", (req, res) => {
res.status(200).send("Syntax!!!!");
});


app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});

