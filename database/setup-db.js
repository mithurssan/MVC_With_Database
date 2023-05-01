const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "setup.sql");
const sql = fs.readFileSync(filePath).toString();

const db = require("./db");

db.query(sql)
    .then(data => console.log("Set-up complete"))
    .catch(error => console.log(error))
