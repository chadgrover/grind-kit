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
      : res.status(404).send('No data found');
    } catch (error) {
      res.status(500).send(error);
    }
  });

  // POST

  app.post("/post/:id/:className/:classLevel", async (req, res) => {
    try {
      const { id, className, classLevel } = req.params;

      const table = await db("class_table")
        .join('user_table', 'user_table.id', 'class_table.user_id')
        .select(`${className}`)
        .where({user_id: id})
        .insert(classLevel);
      res.status(201).send("Success");
    } catch (error) {
      res.status(500).send(error);
    }
  });

  return app;
}

module.exports = setupServer;
