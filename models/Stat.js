const db = require("../database/db");

class Stat {
    constructor(data) {
        this.person_id = data.person_id;
        this.person_name = data.person_name;
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
        const exists = await db.query("SELECT * FROM people WHERE person_id = $1", [id]);
        if (exists.rows[0]) {
            const data = await db.query("SELECT COUNT(*) FROM wrongs WHERE perpetrator_id = $1", [id]);
            if (data.rows[0].count) {
                return new Stat({ total_wrongs_commited: data.rows[0].count });
            } else {
                throw new Error("Stats not found.")
            }
        } else {
            throw new Error("Person not found.")
        }
    }

    static async wrongsSum() {
        const data = await db.query("SELECT * FROM people");
        if (data.rows) {
            const stats = [];
            for (const person of data.rows) {
                const total_wrongs_commited = (await Stat.findById(person.person_id)).total_wrongs_commited;
                stats.push(new Stat({ ...person, total_wrongs_commited }));
            }
            return stats;
        } else {
            throw new Error("Summary not found.")
        }
    }
}

module.exports = Stat;
