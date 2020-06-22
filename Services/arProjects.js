const genericTemplate = require("../Utils/genericTemplate");
const urlButton = require("../Utils/urlButton");

const templateData = [{
        title: "Instagram Effects",
        subtitle: "click for more info",
        image_url: "https://img.icons8.com/clouds/500/000000/instagram.png",
        buttons: [{
            title: "More",
            payload: "projects_ar_instagram"
        }, ]
    },
    {
        title: "Snapchat Lenses",
        subtitle: "click for more info",
        image_url: "https://img.icons8.com/clouds/500/000000/snapchat.png",
        buttons: [{
            title: "More",
            payload: "projects_ar_snapchat"
        }, ]
    },
];

const reply_url_data_1 = [{
    url: "https://github.com/altaha-ansari/InstagramEffects",
    title: "Open",
    whRatio: "tall",
}];

const reply_url_data_2 = [{
    url: "https://github.com/altaha-ansari/SnapchatLenses",
    title: "Under Development",
    whRatio: "tall",
}];

function arProjects(payload) {

    let response;
    switch (payload) {
        case "instagram":
            response = urlButton(reply_url_data_1, "Tap on 'open' to get project info");
            break;
        case "snapchat":
            response = urlButton(reply_url_data_2, "Tap on 'open' to get project info");
            break;

        default:
            response = genericTemplate(templateData);
    }
    return response;
}

module.exports = arProjects;