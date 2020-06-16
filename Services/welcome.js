const genericTemplate = require("../Utils/genericTemplate");

const templateData = [{
        title: "Enquire of a Product",
        subtitle: "Tap the button to get list",
        image_url: "3a1957269552.ngrok.io/enquire.jpg",
        buttons: [{
            title: "Products",
            payload: "product"
        }, ]
    },
    {
        title: "Services offered by us",
        subtitle: "Tap the button to get list",
        image_url: "3a1957269552.ngrok.io/services.jpg",
        buttons: [{
            title: "Services",
            payload: "services"
        }, ]
    },
    {
        title: "Contact Us",
        subtitle: "Tap the button to get list",
        image_url: "3a1957269552.ngrok.io/contact_us.jpg",
        buttons: [{
            title: "Options",
            payload: "contactUs"
        }, ]
    },
];

function welcome() {
    const response = genericTemplate(templateData);
    return response;
}

module.exports = welcome;