const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const peopleRoutes = require("./routers/people");
const wrongsRoutes = require("./routers/wrongs");
const statsRoutes = require("./routers/stats");


const db = require("./database/db");

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.get("/", (req, res) => {
    res.send("The Wrongs API: track injustice.")
});

app.get("/wrongs", async (req, res) => {
    const data = await db.query('SELECT * FROM wrongs');
    res.send(data.rows);
})


app.use("/people", peopleRoutes);
app.use("/wrongs", wrongsRoutes);
app.use("/stats", statsRoutes);

module.exports = app;
