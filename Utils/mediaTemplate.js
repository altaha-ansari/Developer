function mediaTemplate(elements) {

    const elementsArr = elements.map(({
        media_type,
        attachment_id,
        buttons
    }) => ({
        media_type: media_type,
        attachment_id: attachment_id,
        buttons: buttons
    }));

    let response = {
        attachment: {
            type: "template",
            payload: {
                template_type: "media",
                elements: elementsArr,
            }
        }
    };

    return JSON.stringify(response);

}

module.exports = mediaTemplate;