const genericTemplate = require("../Utils/genericTemplate");
const urlButton = require("../Utils/urlButton");

const templateData = [{
        title: "Quadruped Robot",
        subtitle: "tap to show",
        buttons: [{
            title: "show",
            payload: "projects_robotics_project1"
        }, ]
    },
    {
        title: "NodeMCU hosted game",
        subtitle: "tap to show",
        buttons: [{
            title: "show",
            payload: "projects_robotics_project2"
        }, ]
    },
];

const reply_url_data_1 = [{
    url: "https://www.youtube.com/watch?v=NL_iKdTNOic&list=PLT1-rWM6m8PrjoYKDWJxAxmkRf11_wG6c",
    title: "Open",
    whRatio: "tall",
}];

const reply_url_data_2 = [{
    url: "https://www.hackster.io/altahaaltaha/nodemcu-server-javascript-based-game-6b5741",
    title: "Open",
    whRatio: "tall",
}];

function roboticsProjects(payload) {

    let response;
    switch (payload) {
        case "project1":
            response = urlButton(reply_url_data_1, "Tap on 'open' to get project info");
            break;
        case "project2":
            response = urlButton(reply_url_data_2, "Tap on 'open' to get project info");
            break;

        default:
            response = genericTemplate(templateData);
    }
    return response;
}

module.exports = roboticsProjects;