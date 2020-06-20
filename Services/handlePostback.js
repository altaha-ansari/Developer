const callSendAPI = require("./callSendAPI");
const products = require("./products");
const splitPayload = require("../Utils/splitPayload");

function handlePostback(sender_psid, received_postback) {
    let response;

    // Get the payload for the postback
    let payload = received_postback.payload;
    const {
        payload1,
        payload2
    } = splitPayload(payload);

    // Set the response based on the postback payload

    switch (payload1 || payload) {
        case "start":
            response = {
                "text": "Hello! Welcome to my page. Get started by selecting an option from menu in bottom left corner."
            }
            break;
        case "products":
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