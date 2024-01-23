const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/say-hello-world", (req, res) => {
  res.send("Hello, World!");
});

app.get("/hello-to-docker-app", async (req, res) => {
  try {
    const response = await axios.get(
      "http://app-docker-service:3001/say-hello-docker"
    );
    console.log(response.data);
    res.send("Received response from app-docker: " + response.data);
  } catch (error) {
    console.error("Error communicating with app-docker:", error);
    res.status(500).send("Error communicating with app-docker");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
