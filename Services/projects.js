const quickReplies = require("../Utils/quickReplies");
const webProjects = require("./webProjects");
const graphicProjects = require("./graphicProjects");
const arProjects = require("./arProjects");
const roboticsProjects = require("./roboticsProjects");
const splitPayload = require("../Utils/splitPayload");

const reply_data_0 = [{
        title: "Web",
        payload: "projects_web",
        image_url: "https://img.icons8.com/dusk/50/000000/domain.png"
    },
    {
        title: "Graphics",
        payload: "projects_graphics",
        image_url: "https://img.icons8.com/plasticine/50/000000/paint-brush.png"
    },
    {
        title: "AR",
        payload: "projects_ar",
        image_url: "https://img.icons8.com/dusk/64/000000/augmented-reality.png"
    },
    {
        title: "Robotics",
        payload: "projects_robotics",
        image_url: "https://img.icons8.com/bubbles/50/000000/robot.png"
    },
];

function projects(payload) {
    const {
        payload1,
        payload2
    } = splitPayload(payload);
    let response;
    const payloadArgument = payload1 ? payload2 : payload;
    switch (payload1 || payload) {
        case "web":
            response = webProjects(payloadArgument);
            break;
        case "graphics":
            response = graphicProjects(payloadArgument);
            break;
        case "ar":
            response = arProjects(payloadArgument);
            break;
        case "robotics":
            response = roboticsProjects(payloadArgument);
            break;
        default:
            response = quickReplies(reply_data_0, "Please select a category.");

    }

    return response;
}

module.exports = projects;