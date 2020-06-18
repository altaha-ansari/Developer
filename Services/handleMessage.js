const callSendAPI = require("./callSendAPI");
const handlePostback = require("./handlePostback");


function handleMessage(sender_psid, received_message) {

    let response;
    const {
        value,
        confidence
    } = received_message.nlp.traits.wit$greetings[0];


    // Check if the message contains text
    if (received_message.text && confidence > 0.8) {
        handlePostback(sender_psid, {
            payload: "start"
        });
        console.log("Welcome Message sent");
    } else if (received_message.attachments) {
        response = {
            "text": `You sent an attachment".`
        }
    } else {
        response = {
            "text": "Please get in touch to our customer Care"
        }
        callSendAPI(sender_psid, response);
    }
}

module.exports = handleMessage;