"use strict"
const serverless = require("serverless-http"),
    express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

const route = require("./route"),
    config = require("./config"),
    allowCORS = config.allowCORS; //remove later when we have domain

app.set("port", process.env.PORT || 2020)
    .use(bodyParser.urlencoded({ extended: true }));

route(express, app);

// app.listen(app.get("port"), () => console.log(`Server listening on IP: 127.0.0.1 \+ PORT: ${app.get("port")}`));
module.exports.handler = serverless(app);