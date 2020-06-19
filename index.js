"use strict";

// Imports dependencies and set up http server
const express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path"),
  app = express().use(bodyParser.json()); // creates express http server
const baseRoutes = require("./routes/base");
const setProfiles = require("./Services/setProfileAPI");
require("dotenv").config();
app.use("/", baseRoutes);
app.use(express.static(path.join(path.resolve(), "public")));

setProfiles();
// Sets server port and logs message on success
app.listen(process.env.PORT || 3000, () => console.log("webhook is listening"));