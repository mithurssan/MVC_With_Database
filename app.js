const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const peopleRoutes = require("./routers/people");
const wrongsRoutes = require("./routers/wrongs");


const db = require("./db");
const morgan = require("morgan");

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("The Wrongs API: track injustice.")
});

app.get("/wrongs", async (req, res) => {
    const data = await db.query('SELECT * FROM wrongs');
    res.send(data.rows);
})


app.use("/people", peopleRoutes);
app.use("/wrongs", wrongsRoutes);

module.exports = app;
