const genericTemplate = require("../Utils/genericTemplate");
const urlButton = require("../Utils/urlButton");

const templateData = [{
        title: "Express-React Blog",
        subtitle: "click for more info",
        buttons: [{
            title: "show",
            payload: "projects_web_blog"
        }, ]
    },
    {
        title: "Mess Management Web App",
        subtitle: "Under development, will be updated soon",
        buttons: [{
            title: "show",
            payload: "projects_web_mess"
        }, ]
    },
];

const reply_url_data_1 = [{
    url: "https://github.com/altaha-ansari/micronoob",
    title: "Open",
    whRatio: "tall",
}];

const reply_url_data_2 = [{
    url: "https://github.com/altaha-ansari",
    title: "Under Development",
    whRatio: "tall",
}];

function webProjects(payload) {

    let response;
    switch (payload) {
        case "blog":
            response = urlButton(reply_url_data_1, "Tap on 'open' to get project info");
            break;
        case "mess":
            response = urlButton(reply_url_data_2, "Button tap leads to my github profile");
            break;

        default:
            response = genericTemplate(templateData);
    }
    return response;
}

module.exports = webProjects;