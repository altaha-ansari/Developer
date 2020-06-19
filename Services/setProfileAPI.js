const callProfileAPI = require("./callProfileAPI");
const persistentMenu = require("../Utils/persistentMenu");
// const templateData = [{
//         title: "Enquire of a Product",
//         subtitle: "Tap the button to get list",
//         image_url: "3a1957269552.ngrok.io/enquire.jpg",
//         buttons: [{
//             title: "Products",
//             payload: "product"
//         }, ]
//     },
//     {
//         title: "Services offered by us",
//         subtitle: "Tap the button to get list",
//         image_url: "3a1957269552.ngrok.io/services.jpg",
//         buttons: [{
//             title: "Services",
//             payload: "services"
//         }, ]
//     },
//     {
//         title: "Contact Us",
//         subtitle: "Tap the button to get list",
//         image_url: "3a1957269552.ngrok.io/contact_us.jpg",
//         buttons: [{
//             title: "Options",
//             payload: "contactUs"
//         }, ]
//     },
// ];

const templateData = [{
        title: "Products",
        payload: "products"
    },
    {
        title: "Services",
        payload: "services"
    },
    {
        title: "Contact Us",
        payload: "contact"
    },
]

function welcome() {
    const response = persistentMenu(templateData);
    callProfileAPI(response);
}

module.exports = welcome;