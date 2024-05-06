const express = require('express')
const app = express()
const port = 3000
const users = require("./model/User.model")
const cors = require('cors')
const bodyParser = require("body-parser")
const { connectToDB, disconnectFromDB, isConnected } = require('./database');
const {userData, data} = require("./Routes/routes")

userData.use(express.json())
connectToDB()
app.use(cors())
app.use(bodyParser.json())

app.use("/", userData)
app.use("/", data)


app.get("/", (req, res) => {
    res.send(isConnected ? "Connected" : "Disconnected");
});

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});