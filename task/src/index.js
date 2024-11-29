// Node App starts here
const app = require("./app");

let server;

server = app.listen(8080, () => {
  console.log(`Node server listening on port => ${8080}`);
});
