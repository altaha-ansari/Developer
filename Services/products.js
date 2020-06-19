const quickReplies = require("../Utils/quickReplies");

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

    let response;
    switch (payload) {
        case "web":
            response = {
                "text": "web products"
            };
            break;
        case "graphics":
            response = {
                "text": "graphics products"
            };
            break;
        case "ar":
            response = {
                "text": "AR products"
            };
            break;
        case "aiMl":
            response = {
                "text": "AI/ML products"
            };
            break;
        default:
            response = quickReplies(reply_data_0, "Please select a category.");

    }

    return response;
}

module.exports = products;