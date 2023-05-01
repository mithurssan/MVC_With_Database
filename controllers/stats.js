const Stat = require("../models/Stat");

const index = async (req, res) => {
    try {
        const stats = await Stat.all();
        res.send(stats);
    } catch (err) {
        res.status(404).send({ error: err.message });
    }

}

const show = async (req, res) => {
    try {
        const stat = await Stat.findById(req.params.id);
        res.send(stat);
    } catch (err) {
        res.status(404).send({ error: err.message });
    }
}

const wrongsSum = async (req, res) => {
    try {
        const statSum = await Stat.wrongsSum();
        res.send(statSum);
    } catch (err) {
        res.status(404).send({ error: err.message });
    }
}

module.exports = { index, show, wrongsSum };
