const callProfileAPI = require("./callProfileAPI");
const persistentMenu = require("../Utils/persistentMenu");

const templateData = [{
        title: "Projects",
        payload: "projects"
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