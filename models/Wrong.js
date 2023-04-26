const db = require("../db.js");

class Wrong {
    constructor(data) {
        this.id = data.wrong_id;
        this.perpetrator_id = data.perpetrator_id;
        this.victim_id = data.victim_id;
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

    static async create(perpetrator_id, victim_id, description) {
        const exists = await db.query("SELECT * FROM wrongs WHERE perpetrator_id = $1 AND victim_id = $2 AND description = $3", [perpetrator_id, victim_id, description]);
        if (!exists.rows[0]) {
            const data = await db.query("INSERT INTO wrongs (perpetrator_id, victim_id, description) VALUES ($1, $2, $3) RETURNING *", [perpetrator_id, victim_id, description]);
            return new Wrong(data.rows[0]);
        } else {
            throw new Error("Wrong already exists.");
        }
    }
}

module.exports = Wrong;
