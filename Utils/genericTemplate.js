function genericTemplate(props) {
    const {
        title,
        subtitle,
        image_url,
        buttons
    } = props;

    let buttonsArr = buttons.map(({
        title,
        payload
    }) => ({
        type: "postback",
        title: title,
        payload: payload,
    }));

    let response = {
        attachment: {
            type: "template",
            payload: {
                template_type: "generic",
                elements: [{
                    title: title,
                    subtitle: subtitle,
                    image_url: image_url,
                    buttons: buttonsArr
                }]
            }
        }
    }

    return JSON.stringify(response);
}

module.exports = genericTemplate;