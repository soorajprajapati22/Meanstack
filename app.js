const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const bodyParser = require('body-parser');

const authRoute = require('./routes/auth-route');
const mongoose = require('mongoose');
 
const cors= require('cors')

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log("DB is connected");
    } catch (err) {
        console.error("Error connecting to database:", err);
    }
}

connectToDatabase();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());

app.use('/auth', authRoute);

app.get('/', (req, res) => {
    res.send("Welcome to suraj prajapati");
});

app.listen(port, () => {
    console.log("Node server is connected:", port);
});

