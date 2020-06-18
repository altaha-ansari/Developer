const request = require("request");

function callProfileAPI(response) {
    // Construct the message body
    let request_body = {
        get_started: {
            payload: "start"
        },
        persistent_menu: response
    };

    // Send the HTTP request to the Messenger Platform
    request({
            uri: "https://graph.facebook.com/v7.0/me/messenger_profile",
            qs: {
                access_token: process.env.PAGE_ACCESS_TOKEN,
            },
            method: "POST",
            json: request_body,
        },
        (err, res, body) => {
            if (!err) {
                console.log("profile message sent!", res.body);
            } else {
                console.error("Unable to send message:" + err);
            }
        }
    );
}

module.exports = callProfileAPI;