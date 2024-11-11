const express = require("express");
const router = require("./routes");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

//databse connection
const Database = require("./database");

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
  Database.connect();
});
