function genericTemplate(template_elements) {

    const elements = template_elements.map(({
        title,
        subtitle,
        image_url,
        buttons
    }) => ({
        title: title,
        subtitle: subtitle,
        image_url: image_url,
        buttons: buttons.map(({
            title,
            payload
        }) => ({
            type: "postback",
            title: title,
            payload: payload,
        }))
    }));


    let response = {
        attachment: {
            type: "template",
            payload: {
                template_type: "generic",
                elements: elements,
            }
        }
    }

    return JSON.stringify(response);
}

module.exports = genericTemplate;