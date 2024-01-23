const express = require("express");
const axios = require("axios");

const app = express();
const port = 3001;

app.get("/say-hello-docker", (req, res) => {
  res.send("Hello, Docker!");
});

app.get("/hello-to-world-app", async (req, res) => {
  try {
    const response = await axios.get(
      "http://app-world-service:3000/say-hello-world"
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
