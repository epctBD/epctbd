const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const { refreshToken } = require("../../utils/whatsAppTokenManager");

dotenv.config();
const router = express.Router();

const WHATS_APP_URL = process.env.WHATS_APP_URL;
let WHATS_APP_TOKEN = process.env.SHORT_LIVED_TOKEN;
const RECIPENT_NUMBER = process.env.RECIPENT_NUMBER;

router.post("/send-message", async (req, res) => {
  const { Name, PhoneNumber, Email, Message } = req.body;

  const messageContent = `*New Contact Form Submission:*\n\n*Name:* ${Name}\n*Phone:* ${PhoneNumber}\n*Email:* ${Email}\n*Message:* ${Message}`;

  // const data = {
  //   messaging_product: "whatsapp",
  //   to: RECIPENT_NUMBER,
  //   type: "template",
  //   template: {
  //     name: "contact_form_submission",
  //     language: {
  //       code: "en_US",
  //     },
  //     components: [
  //       {
  //         type: "body",
  //         parameters: [
  //           { type: "text", text: Name },
  //           { type: "text", text: PhoneNumber },
  //           { type: "text", text: Message },
  //         ],
  //       },
  //     ],
  //   },
  // };

  //default template
  const data = {
    messaging_product: "whatsapp",
    to: RECIPENT_NUMBER,
    type: "template",
    template: {
      name: "hello_world",
      language: {
        code: "en_US",
      },
    },
  };

  try {
    const response = await axios.post(WHATS_APP_URL, data, {
      headers: {
        Authorization: `Bearer ${WHATS_APP_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    console.log("Message sent successfully:", response.data);
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(
      "Error sending message:",
      error.response?.data || error.message
    );

    if (error.response?.status === 401) {
      console.log("Token expired, refreshing...");
      try {
        WHATS_APP_TOKEN = await refreshToken();
        // Retry after refreshing the token
        const retryResponse = await axios.post(WHATS_APP_URL, data, {
          headers: {
            Authorization: `Bearer ${WHATS_APP_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        console.log(
          "Message sent successfully after refreshing token:",
          retryResponse.data
        );
        return res.status(200).json({
          success: true,
          message: "Message sent successfully after refreshing token!",
        });
      } catch (refreshError) {
        console.error("Failed to refresh token:", refreshError.message);
        return res.status(500).json({
          success: false,
          message: "Failed to refresh token. Please try again later.",
        });
      }
    }

    res.status(500).json({
      success: false,
      message: "Failed to send the message. Please try again later.",
    });
  }
});

module.exports = router;
