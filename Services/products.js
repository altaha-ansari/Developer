const quickReplies = require("../Utils/quickReplies");
const webProjects = require("./webProjects");
const graphicProjects = require("./graphicProjects");
const arProjects = require("./arProjects");
const aiMlProjects = require("./aiMlProjects");
const splitPayload = require("../Utils/splitPayload");
const reply_data_0 = [{
        title: "Web",
        payload: "products_web",
        image_url: ""
    },
    {
        title: "Graphics",
        payload: "products_graphics",
        image_url: ""
    },
    {
        title: "AR",
        payload: "products_ar",
        image_url: ""
    },
    {
        title: "AI/ML",
        payload: "products_aiMl",
        image_url: ""
    },
];

function products(payload) {
    const {
        payload1,
        payload2
    } = splitPayload(payload);
    let response;

    switch (payload1 || payload) {
        case "web":
            response = webProjects(payload1 ? payload2 : payload);
            break;
        case "graphics":
            response = graphicProjects(payload1 ? payload2 : payload);
            break;
        case "ar":
            response = arProjects(payload1 ? payload2 : payload);
            break;
        case "aiMl":
            response = aiMlProjects(payload1 ? payload2 : payload);
            break;
        default:
            response = quickReplies(reply_data_0, "Please select a category.");

    }

    return response;
}

module.exports = products;