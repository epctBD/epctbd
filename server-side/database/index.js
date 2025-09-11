const mongoose = require("mongoose");
require("dotenv").config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;
const cluster = process.env.DB_CLUSTER;
const readPreference = process.env.DB_READ_PREFERENCE || "primary";

const host = `mongodb+srv://${username}:${password}@${cluster}/${database}?retryWrites=true&w=majority&readPreference=${readPreference}`;
class Database {
  constructor() {}

  buildURI() {
    // since host already has the params, just return it
    return host;
  }

  async connect() {
    try {
      const uri = this.buildURI();
      await mongoose.connect(uri);
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Database connection failed:", error.message);
      process.exit(1);
    }
  }

  async disconnect() {
    try {
      await mongoose.connection.close();
      console.log("🛑 Database disconnected successfully");
    } catch (error) {
      console.error("❌ Error disconnecting database:", error.message);
    }
  }
}

module.exports = Database;
