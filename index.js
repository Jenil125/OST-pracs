const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Open Source Lab 125");
});

app.get("/api/info", (req, res) => {
  res.json({
    name: "NPM Lab",
    subject: "Open Source Technology",
    semester: "125 B Batch"
  });
});

app.get("/api/user", async (req, res) => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
  res.json(response.data);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});