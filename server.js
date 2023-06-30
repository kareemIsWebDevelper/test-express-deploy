const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const {mongoose} = require("./database/connection");

const categoryRoute = require("./routes/categories");
const userRoute = require("./routes/users");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/categories', categoryRoute);
app.use('/api/users', userRoute);

app.listen(process.env.PORT, () => {
    console.log("Backend is running and connecting to mongoDB successfully!");
})