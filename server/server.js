const express = require("express");
const path = require("path");
const db = require("../db/knex");
const bodyParser = require("body-parser");

function setupServer() {
  const app = express();

  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.resolve(__dirname, "../client/build")));

  // GET

  app.get("/api/instancecontent", async (req, res) => {
    try {
      const data = await db("instancecontent_table")
        .select("*")
        .timeout(1500);
      data.length > 0
        ? res.status(200).send(data)
        : res.status(404).send("No data found");
    } catch (error) {
      return res.status(500).send(error);
    }
  });

  app.get("/get-levels", async (req, res) => {
    try {
      const { uid } = req.body;
      const data = await db("user_table")
        .select("*")
        .where({ user_id: uid })
        .timeout(1500);
      data.length > 0
        ? res.status(200).send(data)
        : res.status(404).send("No data found");
    } catch (error) {
      return res.status.send(error);
    }
  });

  // POST

  app.post("/post-levels", async (req, res) => {
    try {
      const { uid } = req.body;
      const data = await db("user_table")
        .select("*")
        .where({ user_id: uid })
        .insert(req.body)
        .timeout(1500);
      res.status(201).send("Success");
    } catch (error) {
      res.status(500).send(error);
    }
  });

  return app;
}

module.exports = setupServer;
