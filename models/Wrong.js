const db = require("../database/db");

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

    async destroy() {
        const id = this.id;
        const exists = await db.query("SELECT * FROM wrongs WHERE wrong_id = $1", [id]);
        if (exists.rows[0]) {
            const data = await db.query("DELETE FROM wrongs WHERE wrong_id = $1 RETURNING *", [id]);
            return new Wrong(data.rows[0]);
        } else {
            throw new Error("Wrong does not exist.")
        }
    }

    async update(description) {
        const id = this.id;
        const exists = await db.query("SELECT * FROM wrongs WHERE wrong_id = $1", [id]);
        if (exists.rows[0]) {
            const data = await db.query("UPDATE wrongs SET description = $2 WHERE wrong_id = $1 RETURNING *", [id, description]);
            return new Wrong(data.rows[0]);
        } else {
            throw new Error("Wrong does not exist.")
        }
    }
}

module.exports = Wrong;
