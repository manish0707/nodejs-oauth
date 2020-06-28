const express = require('express');
const authRoutes = require("./routes/authRoutes");
require('dotenv').config()
const passportSetup = require("./config/passportSetup");


const app = express();

app.get('/', (req, res) => {
    res.json({message: "Homepage works!"})
});

app.use("/auth", authRoutes);


app.listen(8000, () => {
    console.log(`server is running!`)
});