const express = require("express");

function setupServer() {
  const app = express();

  // middleware

  app.use(express.json());

  app.get("/test", (req, res) => {
    res.status(200).send("Hello 🌏");
  });

  return app;
}

module.exports = setupServer;