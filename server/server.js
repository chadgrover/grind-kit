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
      const data = await db("instancecontent_table").select("*").timeout(1500);
      data.length > 0
        ? res.status(200).send(data)
        : res.status(404).send("No data found");
    } catch (error) {
      return res.status(500).send(error);
    }
  });

  app.get("/api/levels/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const data = await db("user_table")
        .select("*")
        .where("id", id)
        .timeout(1500);
      data.length > 0
        ? res.status(200).send(data)
        : res.status(404).send("No data found");
    } catch (error) {
      return res.status.send(error);
    }
  });

  // POST

  app.post("/api/levels", async (req, res) => {
    try {
      const payload = req.body;
      const data = await db("user_table").insert(payload).timeout(1500);
      res.status(201).send("POST was successful");
    } catch (error) {
      res.status(500).send(error);
    }
  });

  // PATCH

  app.patch("/api/levels/:id", async (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    try {
      const data = await db("user_table")
        .where("id", id)
        .update(changes)
        .timeout(1500);
      res.status(200).send("PATCH was successful");
    } catch (error) {
      res.status(500).send(error);
    }
  });

  return app;
}

// DELETE

module.exports = setupServer;
