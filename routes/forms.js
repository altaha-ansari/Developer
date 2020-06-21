const express = require("express");
const router = express.Router();

router.post('/Services', (req, res) => {
    let {
        tools,
        description
    } = req.body;
    // let header = req.header;
    console.log(tools, description);
    res.sendStatus(200);
});

router.post('/ContactUs', (req, res) => {
    let {
        fname,
        lname,
        subject,
        message,
    } = req.body;
    // let header = req.header;
    console.log(fname, lname, subject, message);
    res.sendStatus(200);
});

module.exports = router;