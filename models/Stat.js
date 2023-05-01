const db = require("../database/db");

class Stat {
    constructor(data) {
        this.total_wrongs = data.total_wrongs;
        this.total_wrongs_commited = data.total_wrongs_commited;
    }

    static async all() {
        const data = await db.query("SELECT COUNT(*) FROM wrongs");
        if (data.rows[0].count) {
            return new Stat({ total_wrongs: data.rows[0].count });
        } else {
            throw new Error("Stats not found.")
        }
    }

    static async findById(id) {
        const data = await db.query("SELECT COUNT(*) FROM wrongs WHERE perpetrator_id = $1", [id]);
        if (data.rows[0].count) {
            return new Stat({ total_wrongs_commited: data.rows[0].count });
        } else {
            throw new Error("Stats not found.")
        }
    }
}

module.exports = Stat;
