const callSendAPI = require("./callSendAPI");
const products = require("./projects");
const services = require("./services");
const splitPayload = require("../Utils/splitPayload");
const urlButton = require("../Utils/urlButton");

const reply_url_data_0 = [{
    url: "https://0fac0ee3e2ae.ngrok.io/contactUsForm.html",
    title: "continue",
    whRatio: "tall",
}];

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
                "text": "Hello! Welcome to my page. Get started by selecting an option from menu attached with input field below or in bottom left corner. If you wish to talk to me directly, simply click on contact us from the menu and i will reach out to you soon! Have a nice day!"
            }
            break;
        case "projects":
            response = products(payload1 ? payload2 : payload);
            break;
        case "services":
            response = services(payload1 ? payload2 : payload);
            break;
        case "contact":
            response = urlButton(reply_url_data_0, "Tap on continue to fill up a form");
            break;
        default:
            response = {
                "text": "Sorry! I don't know what to answer, try contacting us through contact us option"
            }
    }
    // Send the message to acknowledge the postback
    callSendAPI(sender_psid, response);
}

module.exports = handlePostback;