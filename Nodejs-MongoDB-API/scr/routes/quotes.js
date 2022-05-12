const express = require("express");

const router = new express.Router();
const quotesSchema = require("../models/quotes");
//--------------------------------------------------------------------------//
//get all quotes
router.get("/", async(req, res) => {
    res.json(await quotesSchema.find({}));
});
//--------------------------------------------------------------------------//
//get at quotes
router.get("/:id", async(req, res) => {
    const { id } = req.params;
    res.json(await quotesSchema.findById(id));
});
//--------------------------------------------------------------------------//
// creaction a user
router.post("/", async(req, res) => {
    try {
        const quotes = new quotesSchema(req.body);
        res.send(await quotes.save());
    } catch (e) {
        res.status(400);
        res.send("Bad request", e);
    }
});
//--------------------------------------------------------------------------//
// modify a user
router.put("/:id", async(req, res) => {
    const { id } = req.params;
    const { Codigo, ID_Estudiante, Fecha, Hora, Asunto } =
    req.body;

    res.json(
        await quotesSchema.updateOne({
            _id: id,
        }, {
            $set: {
                Codigo,
                ID_Estudiante,
                Fecha,
                Hora,
                Asunto
            },
        })
    );
});
//--------------------------------------------------------------------------//
// delete at student
router.delete("/:id", async(req, res) => {
    const { id } = req.params;
    req.body;
    res.json(
        await quotesSchema.remove({
            _id: id,

        })
    );
});
//--------------------------------------------------------------------------//


module.exports = router;