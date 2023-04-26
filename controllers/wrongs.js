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

module.exports = { show };
