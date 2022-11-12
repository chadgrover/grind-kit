const setupServer = require("./server");
const db = require("../db/knex");
const PORT = process.env.port || 4000;
const server = setupServer();

(async () => {
  try {
    await db.migrate.latest();
    server.listen(PORT, () => {
      console.log(`App is listening @ http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
