const callSendAPI = require("./callSendAPI");
const welcome = require("./welcome");

function handleMessage(sender_psid, received_message) {

    let response;

    // Check if the message contains text
    if (received_message.text) {

        response = welcome();
        console.log("Message sent");
    } else if (received_message.attachments) {
        response = {
            "text": `You sent the message: "${received_message.text}".`
        }

    }
    callSendAPI(sender_psid, response);
}

module.exports = handleMessage;