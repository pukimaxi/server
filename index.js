const ganache = require("ganache-cli");

const options = {};
const server = ganache.server(options);
const PORT = 8545;
server.listen(PORT, async (err) => {
  if (err) throw err;

  console.log(`ganache listening on port ${PORT}...`);
  //const provider = server.provider;
});
