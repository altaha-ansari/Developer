const callSendAPI = require("./callSendAPI");
const products = require("./products");

function handlePostback(sender_psid, received_postback) {
    let response;

    // Get the payload for the postback
    let payload = received_postback.payload;
    const index = payload.indexOf("_");
    const payload1 = payload.substring(0, index);
    const payload2 = payload.substring(index + 1, payload.length);
    console.log(`payload1: ${payload1} and payload2: ${payload2}`);
    // Set the response based on the postback payload

    switch (payload1 || payload) {
        case "start":
            response = {
                "text": "Hello! Welcome to my page. Get started by selecting an option from menu in bottom left corner."
            }
            break;
        case "products":
            console.log("here");
            response = products(payload1 ? payload2 : payload);
            break;
        case "services":
            response = {
                "text": "You enquire of a service"
            }
            break;
        case "contact":
            response = {
                "text": "we will be in touch soon!"
            }
            break;
        default:
            response = {
                "text": "Sorry! I don't know what to answer"
            }
    }
    // Send the message to acknowledge the postback
    callSendAPI(sender_psid, response);
}

module.exports = handlePostback;