const callSendAPI = require("./callSendAPI");
const handlePostback = require("./handlePostback");


function handleMessage(sender_psid, received_message) {

    let response, confidence;
    if (received_message.nlp.traits.wit$greetings)
        confidence = received_message.nlp.traits.wit$greetings[0].confidence;
    else confidence = 0.0;

    // Check if the message contains text
    if (received_message.text && confidence > 0.8) {
        handlePostback(sender_psid, {
            payload: "start"
        });
        console.log("Welcome Message sent");
    } else if (received_message.quick_reply) {
        // console.log(received_message.quick_reply);
        // handlePostback(received_message.quick_reply.payload);
    } else {
        response = {
            "text": "Please get in touch to our customer Care"
        }
        callSendAPI(sender_psid, response);
    }
}

module.exports = handleMessage;