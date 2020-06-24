const quickReplies = require("../Utils/quickReplies");
const urlButton = require("../Utils/urlButton");
const reply_data_0 = [{
        title: "Web",
        payload: "services_web",
        image_url: ""
    },
    {
        title: "AR",
        payload: "services_ar",
        image_url: ""
    },
];

const reply_data_1 = [{
    title: "continue",
    payload: "services_web_continue",
    image_url: ""
}, ];

const reply_data_2 = [{
    title: "continue",
    payload: "services_ar_continue",
    image_url: ""
}, ];

const reply_url_data_0 = [{
    url: "https://fa9450d09126.ngrok.io/servicesForm.html",
    title: "continue",
    whRatio: "tall",
}];

function services(payload) {

    let response;
    switch (payload) {
        case "web":
            response = quickReplies(reply_data_1, "I will be able to provide you my experience in html, css, javascript and react.js. If you wish to see my projects, select projects from the menu in bottom right corner. If you want to continue tap on 'continue'");
            break;
        case "ar":
            response = quickReplies(reply_data_2, "I will be able to provide you my experience in SparkAR and Lens Studio. If you wish to see my projects, select projects from the menu in bottom right corner. If you want to continue tap on 'continue'");
            break;
        case "web_continue":
            response = urlButton(reply_url_data_0, "Tap on continue to proceed.");
            break;
        case "ar_continue":
            response = urlButton(reply_url_data_0, "Tap on continue to proceed.");
            break;
        default:
            response = quickReplies(reply_data_0, "I am up to freelance for a front-end web project or creating Instagram or Snapchat AR experiences. Please select a category.");

    }
    return response;
}

module.exports = services;