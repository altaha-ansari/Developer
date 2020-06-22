const genericTemplate = require("../Utils/genericTemplate");
const mediaTemplate = require("../Utils/mediaTemplate");

const genericTemplateData = [{
        title: "Low-Poly Art",
        subtitle: "Tap on open to send",
        buttons: [{
            title: "open",
            payload: "projects_graphics_lowPoly"
        }, ]
    },
    {
        title: "Covid-19 Poster",
        subtitle: "Tap on open to send",
        buttons: [{
            title: "open",
            payload: "projects_graphics_poster"
        }, ]
    },
];


const mediaTemplateData_1 = [{
    media_type: "image",
    attachment_id: 263991718165624,
    buttons: []
}, ];

const mediaTemplateData_2 = [{
    media_type: "image",
    attachment_id: 267866221199621,
    buttons: []
}, ];


function graphicProjects(payload) {

    let response;
    switch (payload) {
        case "lowPoly":
            response = mediaTemplate(mediaTemplateData_1);
            break;
        case "poster":
            response = mediaTemplate(mediaTemplateData_2);
            break;

        default:
            response = genericTemplate(genericTemplateData);
    }
    return response;
}

module.exports = graphicProjects;