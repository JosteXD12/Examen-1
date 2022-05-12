const mongoose = require("mongoose");

const quotesSchema = mongoose.Schema({
    Codigo: {
        type: String,
        require: true,
    },
    ID_Estudiante: {
        type: String,
        require: true,
    },
    Fecha: {
        type: String,
        require: true,
    },
    Hora: {
        type: String,
        require: true,
    },
    Asunto: {
        type: String,
        require: true,
    },
});
module.exports = mongoose.model("quotes", quotesSchema);