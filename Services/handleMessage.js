const callSendAPI = require("./callSendAPI");
const genericTemplate = require("../Utils/genericTemplate");

function handleMessage(sender_psid, received_message) {

    let response;

    // Check if the message contains text
    if (received_message.text) {

        // Create the payload for a basic text message
        response = {
            "text": `You sent the message: "${received_message.text}". Now send me an image!`
        }
    } else if (received_message.attachments) {

        // Gets the URL of the message attachment
        let attachment_url = received_message.attachments[0].payload.url;
        let props = {
            title: "Is this the right picture?",
            subtitle: "Tap a button to answer.",
            image_url: attachment_url,
            buttons: [{
                    title: "Yes!",
                    payload: "yes"
                },
                {
                    title: "No!",
                    payload: "no"
                },
            ]
        };
        response = genericTemplate(props);

        // Sends the response message
        callSendAPI(sender_psid, response);
    }
}

module.exports = handleMessage;