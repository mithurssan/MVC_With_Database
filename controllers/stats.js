const Stat = require("../models/Stat");

const index = async (req, res) => {
    const stats = await Stat.all();
    res.send(stats);
}

const show = async (req,res) => {
    const stat = await Stat.findById(req.params.id);
    res.send(stat);
}

module.exports = { index, show };
