const express = require("express");
const router = express.Router();

router.post('/Services', (req, res) => {
    let {
        tools,
        description
    } = req.body;

    res.send('<h1>Thank you for your time, you can close the window now.</h1>')
});

router.post('/ContactUs', (req, res) => {
    let {
        fname,
        lname,
        subject,
        message,
    } = req.body;

    res.send('<h1>Thank you for your time, you can close the window now.</h1>')
});

module.exports = router;