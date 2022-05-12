const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const studentRoutes = require("./routes/student");
const quotesRoutes = require("./routes/quotes");

const app = express();
mongoose
    .connect(process.env.Mongo)
    .then(() => console.log("conecatado a la BD"))
    .catch((error) => console.error(error));

app.set("port", process.env.PORT || 3000);

app.use(express.json());

//midleeware student
app.use("/api/studentes", studentRoutes);
//midleeware quotes
app.use("/api/quotes", quotesRoutes);

// mongoose conection
app.listen(app.get("port"), () =>
    console.log("Servidor en linea", app.get("port")));