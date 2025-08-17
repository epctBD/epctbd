const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
const dotenv = require("dotenv");
const database = require("./database");
const { commonMiddleWare } = require("./middlewares/common.middleware");
const { errorHandler } = require("./middlewares/error.middleware");

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(...commonMiddleWare);

router.registerApplicationRoutes(app);
app.use(errorHandler);

//connect the db
new database().connect().then(() => {
  console.log("Database Connected");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
