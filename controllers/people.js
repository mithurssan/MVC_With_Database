const Person = require("../models/Person");

const index = async (req, res) => {
    const people = await Person.all();
    res.send(people);
}

const show = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const person = await Person.findById(id);
        res.send(person);
    } catch (error) {
        res.status(404).send({ error: error.message });
    }

}

const create = async (req, res) => {
    try {
        const person = await Person.create(req.body.name);
        res.send(person);
    } catch (error) {
        res.status(422).json({ error: error.message });
    }
}

const destroy = async (req, res) => {
    try {
        const personId = parseInt(req.params.id);
        const person = await Person.findById(personId);
        await person.destroy();
        res.sendStatus(204);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}


module.exports = { show, index, create, destroy };

