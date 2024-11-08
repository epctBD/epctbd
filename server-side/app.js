const express = require("express");
const app = express();
const port = 5000;

// Middleware to handle JSON requests
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Example API endpoint
app.get("/projects", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
