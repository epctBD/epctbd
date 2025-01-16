const axios = require("axios");
const dotenv = require("dotenv");
const fs = require("fs");
dotenv.config();

const refreshToken = async () => {
  try {
    const response = await axios.get(
      `https://graph.facebook.com/v15.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.APP_ID}&client_secret=${process.env.APP_SECRET}&fb_exchange_token=${process.env.SHORT_LIVED_TOKEN}`
    );

    const newToken = response.data.access_token;
    console.log("New token generated:", newToken);

    // Update the token in the .env file
    const updatedEnv = Object.entries(process.env)
      .map(([key, value]) =>
        key === "SHORT_LIVED_TOKEN"
          ? `SHORT_LIVED_TOKEN=${newToken}`
          : `${key}=${value}`
      )
      .join("\n");

    fs.writeFileSync(".env", updatedEnv);

    dotenv.config(); // Reload environment variables
    return newToken;
  } catch (error) {
    console.error("Error refreshing token:", error.message);
    throw error;
  }
};

module.exports = { refreshToken };
