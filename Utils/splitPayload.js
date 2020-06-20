function splitPayload(payload) {
    const index = payload.indexOf("_");
    const payload1 = payload.substring(0, index);
    const payload2 = payload.substring(index + 1, payload.length);
    return ({
        payload1: payload1,
        payload2: payload2
    });
}

module.exports = splitPayload;