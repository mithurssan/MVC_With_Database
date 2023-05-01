const db = require("../database/db");

class Person {
  constructor(data) {
    this.id = data.person_id;
    this.name = data.person_name;
  }

  static async all() {
    const data = await db.query("SELECT * FROM people")
    return data.rows.map((row => new Person(row)));
  }

  static async findById(id) {
    const data = await db.query("SELECT * FROM people WHERE person_id = $1", [id]);
    if (data.rows[0]) {
      return new Person(data.rows[0]);
    } else {
      throw new Error("Person not found.")
    }
  }

  static async create(name) {
    const exists = await db.query("SELECT * FROM people WHERE person_name = $1", [name]);
    if (!exists.rows[0]) {
      const data = await db.query("INSERT INTO people (person_name) VALUES ($1) RETURNING *", [name])
      return new Person(data.rows[0]);
    } else {
      throw new Error("Name already exists.")
    }
  }

  async destroy() {
    const id = this.id;
    const exists = await db.query("SELECT * FROM people WHERE person_id = $1", [id]);
    if (exists.rows[0]) {
      await db.query("DELETE FROM wrongs WHERE perpetrator_id = $1 RETURNING *", [id]);
      await db.query("DELETE FROM wrongs WHERE victim_id = $1 RETURNING *", [id]);
      const data = await db.query("DELETE FROM people WHERE person_id = $1 RETURNING *", [id]);
      return new Person(data.rows[0]);
    } else {
      throw new Error("Person does not exist.")
    }
  }
}

module.exports = Person;

//app -> router -> controller -> models/DB <-- when debugging

//models/DB -> controller -> router -> app <-- when building
