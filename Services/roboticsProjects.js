const genericTemplate = require("../Utils/genericTemplate");
const templateData = [{
        title: "Yet to come",
        subtitle: "click for more info",
        image_url: "3a1957269552.ngrok.io/enquire.jpg",
        buttons: [{
            title: "More",
            payload: "projects_robotics_project1"
        }, ]
    },
    {
        title: "Yet to come",
        subtitle: "click for more info",
        image_url: "3a1957269552.ngrok.io/enquire.jpg",
        buttons: [{
            title: "More",
            payload: "projects_robotics_project2"
        }, ]
    },
];

function roboticsProjects(payload) {
    console.log(`webProjects.js:=> payload: ${payload}`);
    let response;
    switch (payload) {
        case "project1":
            response = {
                "text": "This is the info of my yet to come project"
            };
            break;
        case "project2":
            response = {
                "text": "This is the info of my yet to come project"
            };
            break;

        default:
            response = genericTemplate(templateData);
    }
    return response;
}

module.exports = roboticsProjects;