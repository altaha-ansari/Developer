function persistentMenu(options) {

    const optionsArr = options.map(({
        title,
        payload
    }) => ({
        type: "postback",
        title: title,
        payload: payload
    }));

    let response = [{
        locale: "default",
        composer_input_disabled: false,
        call_to_actions: optionsArr
    }];


    return response;
}

module.exports = persistentMenu;