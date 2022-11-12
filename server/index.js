const setupServer = require("./server");
const PORT = process.env.port || 4000;
const server = setupServer();

(() => {
  server.listen(PORT, () => {
    console.log(`App is listening @ http://localhost:${PORT}`);
  });
})();
