const express = require("express");
const path = require("path");
const db = require("../db/knex");
const bodyParser = require("body-parser");

function setupServer() {
  const app = express();

  // middleware

  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.resolve(__dirname, "../client/build")));

  app.get("/test", (req, res) => {
    res.status(200).send("Hello 🌏");
  });

  app.get("/api/instancecontent", async (req, res) => {
    try {
      const instancecontent = await db("twg")
        .select("*")
        .timeout(1500);
    } catch (error) {
      console.error(error);
    }
  });

  return app;
}

module.exports = setupServer;
