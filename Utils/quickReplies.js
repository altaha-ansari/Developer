function quickReplies(replies, text) {

    const quick_replies = replies.map(({
        title,
        payload,
        image_url
    }) => ({
        content_type: "text",
        title: title,
        payload: payload,
        image_url: image_url
    }));

    const response = {
        text: text,
        quick_replies: quick_replies,
    }

    return response;
}

module.exports = quickReplies;