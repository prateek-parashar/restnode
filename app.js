const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());


// Settinng the headers in all the responses to allow CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    next();
});

const feedRoutes = require("./routes/feed");

app.use("/feed", feedRoutes);

app.listen(8080);
