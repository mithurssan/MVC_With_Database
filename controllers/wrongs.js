const Wrong = require("../models/Wrong");

const show = async (req, res) => {
    try {
        const id = req.params.id;
        const wrong = await Wrong.findById(id);
        res.send(wrong);
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
}

const create = async (req, res) => {
    try {
        const perpetrator_id = req.body.perpetrator_id;
        const victim_id = req.body.victim_id;
        const description = req.body.description;
        const newWrong = await Wrong.create(perpetrator_id, victim_id, description);
        res.send(newWrong);
    } catch (error) {
        res.status(422).send({ error: error.message });
    }
}

module.exports = { show, create };
