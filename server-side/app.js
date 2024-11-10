const express = require("express");
const router = require("./routes");
const app = express();
const port = 5000;

// Middleware to handle JSON requests
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Example API endpoint

router.registerApplicationRoutes(app);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
