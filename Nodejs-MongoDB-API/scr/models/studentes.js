const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    Carnet: {
        type: String,
        require: true,
        trim: true,
    },
    Nombre: {
        type: String,
        require: true,
    },
    Apellidos: {
        type: String,
        require: true,
    },
    Carrera: {
        type: String,
        require: true,
    },
    Dirección: {
        Canton: {
            type: String,
            require: true,
        },

        Provincia: {
            type: String,
            require: true,
        },

        Description: {
            type: String,
            require: true,
        },
    },
});

module.exports = mongoose.model("student", studentSchema);