const mongoose = require("mongoose");
require("dotenv").config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;
const cluster = process.env.DB_CLUSTER;
const readPreference = process.env.DB_READ_PREFERENCE || "primary";

const host = `mongodb+srv://${username}:${password}@${cluster}/${database}?retryWrites=true&w=majority&readPreference=${readPreference}`;

const connect = async () => {
  try {
    await mongoose.connect(host);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1);
  }
};

const disconnect = async () => {
  try {
    await mongoose.connection.close();
    console.log("Database disconnected successfully");
  } catch (error) {
    console.error("Error disconnecting the database:", error.message);
  }
};

module.exports = {
  connect,
  disconnect,
};
