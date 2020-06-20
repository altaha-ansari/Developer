const genericTemplate = require("../Utils/genericTemplate");
const templateData = [{
        title: "Low-Poly Art",
        subtitle: "click for more info",
        image_url: "3a1957269552.ngrok.io/enquire.jpg",
        buttons: [{
            title: "More",
            payload: "products_graphics_lowPoly"
        }, ]
    },
    {
        title: "Covid-19 Poster",
        subtitle: "click for more info",
        image_url: "3a1957269552.ngrok.io/enquire.jpg",
        buttons: [{
            title: "More",
            payload: "products_graphics_poster"
        }, ]
    },
];

function graphicProjects(payload) {
    console.log(`webProjects.js:=> payload: ${payload}`);
    let response;
    switch (payload) {
        case "lowPoly":
            response = {
                "text": "This is the info of my low-poly art"
            };
            break;
        case "poster":
            response = {
                "text": "This is the info of my poster"
            };
            break;

        default:
            response = genericTemplate(templateData);
    }
    return response;
}

module.exports = graphicProjects;