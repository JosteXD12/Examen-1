const express = require("express");

const router = express.Router();
const studentSchema = require("../models/studentes");
//--------------------------------------------------------------------------//
//get all students
router.get("/", async(req, res) => {
    res.json(await studentSchema.find({}));
});
//--------------------------------------------------------------------------//
//get at students
router.get("/:id", async(req, res) => {
    const { id } = req.params;
    res.json(await studentSchema.findById(id));
});
//--------------------------------------------------------------------------//
// creaction a user
router.post("/", async(req, res) => {
    try {
        const student = new studentSchema(req.body);
        res.send(await student.save());
    } catch (e) {
        res.status(400);

        res.send("Bad request", e);
    }
});
//--------------------------------------------------------------------------//
// modify a user
router.put("/:id", async(req, res) => {
    const { id } = req.params;
    const { Carnet, Nombre, Apellidos, Carrera, Canton, Provincia, Description } =
    req.body;

    res.json(
        await studentSchema.updateOne({
            _id: id,
        }, {
            $set: {
                Carnet,
                Nombre,
                Apellidos,
                Carrera,
                Canton,
                Provincia,
                Description,
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
        await studentSchema.remove({
            _id: id,

        })
    );
});

//--------------------------------------------------------------------------//

module.exports = router;