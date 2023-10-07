const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
console.log("hiiiii");

app.prepare().then(() => {
  const server = express();

  server.get("*", (req, res) => {
    console.log("Hostname:", req.hostname); // Add this line
    const subdomain = req.hostname.split(".")[0];
    console.log("Subdomain:", subdomain);
    req.query.subdomain = subdomain;
    console.log("Req Query:", req.query);
    handle(req, res);
  });

  //   server.get("*", (req, res) => {
  //     const subdomain = req.hostname.split(".")[0];
  //     req.query.subdomain = subdomain;
  //     console.log("Req Query:", req.query); // Add this line
  //     handle(req, res);
  //   });

  const PORT = 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
