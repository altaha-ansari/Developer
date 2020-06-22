const handlePostback = require("./handlePostback");


function handleMessage(sender_psid, received_message) {

    let confidence;
    if (received_message.nlp.traits.wit$greetings)
        confidence = received_message.nlp.traits.wit$greetings[0].confidence;
    else confidence = 0.0;

    // Check if the message contains text
    if (received_message.text && confidence > 0.8) {
        handlePostback(sender_psid, {
            payload: "start"
        });
    }


}

module.exports = handleMessage;