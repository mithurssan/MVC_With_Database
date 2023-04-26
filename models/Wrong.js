const db = require("../db.js");

class Wrong {
    constructor(data) {
        this.id = data.wrong_id;
        this.perpetratorId = data.perpetrator_id;
        this.victimId = data.victim_id;
        this.description = data.description;
    }

    static async findById(id) {
        const data = await db.query("SELECT * FROM wrongs WHERE wrong_id = $1", [id]);
        if (data.rows[0]) {
            return new Wrong(data.rows[0]);
        } else {
            throw new Error("Wrong not found.");
        }
    }
}

module.exports = Wrong;
