const genericTemplate = require("../Utils/genericTemplate");
const templateData = [{
        title: "Instagram Effects",
        subtitle: "click for more info",
        image_url: "3a1957269552.ngrok.io/enquire.jpg",
        buttons: [{
            title: "More",
            payload: "projects_ar_instagram"
        }, ]
    },
    {
        title: "Snapchat Lenses",
        subtitle: "click for more info",
        image_url: "3a1957269552.ngrok.io/enquire.jpg",
        buttons: [{
            title: "More",
            payload: "projects_ar_snapchat"
        }, ]
    },
];

function arProjects(payload) {
    console.log(`webProjects.js:=> payload: ${payload}`);
    let response;
    switch (payload) {
        case "instagram":
            response = {
                "text": "This is the info of my instagram filters"
            };
            break;
        case "snapchat":
            response = {
                "text": "This is the info of my snapchat filters"
            };
            break;

        default:
            response = genericTemplate(templateData);
    }
    return response;
}

module.exports = arProjects;