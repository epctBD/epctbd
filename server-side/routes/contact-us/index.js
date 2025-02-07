const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
const router = express.Router();

const WHATS_APP_URL = process.env.WHATS_APP_URL;
const WHATS_APP_TOKEN = process.env.LONG_LIVED_TOKEN;
const RECIPENT_NUMBER = process.env.RECIPENT_NUMBER;

router.post("/send-message", async (req, res) => {
  const { Name, PhoneNumber, Email, Message } = req.body;

  const data = {
    messaging_product: "whatsapp",
    to: RECIPENT_NUMBER,
    type: "template",
    template: {
      name: "contact_form_submission",
      language: { code: "en_US" },
      components: [
        {
          type: "body",
          parameters: [
            { type: "text", text: Name },
            { type: "text", text: PhoneNumber },
            { type: "text", text: Email },
            { type: "text", text: Message },
          ],
        },
      ],
    },
  };

  try {
    const response = await axios.post(WHATS_APP_URL, data, {
      headers: {
        Authorization: `Bearer ${WHATS_APP_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(
      "Error sending message:",
      error.response?.data || error.message
    );

    return res.status(500).json({
      success: false,
      message: "Failed to send the message. Please try again later.",
    });
  }
});

module.exports = router;

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
