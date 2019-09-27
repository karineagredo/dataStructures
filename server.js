// const http = require("http");

// const server = http.createServer((request, response) => {
//   response.setHeader("content-type", "application/json");
//   console.log(request.method);
//   console.log(request.url);

//   const user = {
//     name: "karine",
//     lastName: "Agredo"
//   };
//   response.end(JSON.stringify(user));
// });

// server.listen(3000);

const express = require("express");

const app = express();

const user = {
  name: "karine",
  hobby: "coding"
};

app.get("/", (req, res) => {
  res.send(user);
});

app.listen(3000);
