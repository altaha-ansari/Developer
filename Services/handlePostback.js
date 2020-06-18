const callSendAPI = require("./callSendAPI");

function handlePostback(sender_psid, received_postback) {
    let response;

    // Get the payload for the postback
    let payload = received_postback.payload;

    // Set the response based on the postback payload
    switch (payload) {
        case "start":
            response = {
                "text": "Hello! Welcome to my page. Get started by selecting an option from menu in bottom left corner."
            }
            break;
        case "products":
            response = {
                "text": "You enquire of a product"
            }
            break;
        case "services":
            response = {
                "text": "You enquire of a service"
            }
            break;
        case "contactUs":
            response = {
                "text": "we will be in touch."
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