const request = require("request");

function callSendAPI(sender_psid, response) {
  // Construct the message body
  let request_body = {
    recipient: {
      id: sender_psid,
    },
    messaging_type: response.quick_replies && "RESPONSE",
    message: response,
  };

  // Send the HTTP request to the Messenger Platform
  request({
      uri: "https://graph.facebook.com/v7.0/me/messages",
      qs: {
        access_token: process.env.PAGE_ACCESS_TOKEN,
      },
      method: "POST",
      json: request_body,
    },
    (err, res, body) => {
      if (!err) {
        console.log("message sent!");
      } else {
        console.error("Unable to send message:" + err);
      }
    }
  );
}

module.exports = callSendAPI;