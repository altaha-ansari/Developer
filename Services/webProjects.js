const genericTemplate = require("../Utils/genericTemplate");
const templateData = [{
        title: "Express-React Blog",
        subtitle: "click for more info",
        image_url: "3a1957269552.ngrok.io/enquire.jpg",
        buttons: [{
            title: "More",
            payload: "projects_web_blog"
        }, ]
    },
    {
        title: "Mess Management Web App",
        subtitle: "click for more info",
        image_url: "3a1957269552.ngrok.io/enquire.jpg",
        buttons: [{
            title: "More",
            payload: "projects_web_mess"
        }, ]
    },
];

function webProjects(payload) {

    let response;
    switch (payload) {
        case "blog":
            response = {
                "text": "This is the info of my blog"
            };
            break;
        case "mess":
            response = {
                "text": "This is the info of my mess app"
            };
            break;

        default:
            response = genericTemplate(templateData);
    }
    return response;
}

module.exports = webProjects;