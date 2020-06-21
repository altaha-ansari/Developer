function urlButton(buttons, text) {

    buttonsArr = buttons.map(({
        url,
        title,
        whRatio
    }) => ({
        type: "web_url",
        url: url,
        title: title,
        webview_height_ratio: whRatio
    }));

    let response = {
        attachment: {
            type: "template",
            payload: {
                template_type: "button",
                text: text,
                buttons: buttonsArr,
            }
        }
    };
    return response;
}

module.exports = urlButton;